<template>
  <div class="view">
    <Loader v-if="loading" />
    <template v-else>
      <div class="view__item view__item_header">{{header}}</div>
      <input
        type="text"
        class="view__input"
        placeholder="Название"
        v-if="category === 'service'"
        v-model="service.title"
      />
      <input type="text" class="view__input" placeholder="Название" v-else v-model="project.title" />
      <div class="view__item view__item_desc">
        <template v-if="category === 'service'">
          <div class="view__item view__item_sub">Описание</div>
          <!-- for services SubsEditor -->
          <SubsEditor :subs="service.description" @change="loadSubs"></SubsEditor>
        </template>
        <template v-else>
          <!-- for projects -->
          <div class="view__item view__item_sub">Краткое описание</div>
          <input
            type="text"
            class="view__input"
            placeholder="Для карточки проекта"
            v-model="project.subTitle"
          />
        </template>
      </div>
      <div class="view__item view__item_img">
        <!-- ChangeImg -->
        <div
          class="view__item view__item_sub"
        >Обложка {{ category === 'service' ? 'услуги' : 'проекта'}}</div>
        <ChangeImg v-if="category === 'service' " :img="service.img" @changed-img="changeImg"></ChangeImg>
        <ChangeImg v-else :img="project.img" @changed-img="changeImg"></ChangeImg>
      </div>

      <div class="view__item view__item_settings">
        <!-- for services steps StepsEditor -->
        <template v-if="category == 'service'">
          <div class="view__item view__item_sub">Этапы работы</div>
          <StepsEditor :steps="service.steps" @changed="changeSteps"></StepsEditor>
        </template>

        <template v-else>
          <!-- for project slides -->
          <div class="view__item view__item_sub">
            Изображения проекта
            <br />
            <small>
              <i>( разрешение 1345х755px )</i>
            </small>
          </div>
          <SlideEditor :slides="project.imgs" @changed="slideChange"></SlideEditor>
          <!-- for project SubsEditor x2-->
          <div class="view__item view__item_sub">О компании</div>
          <SubsEditor :subs="project.aboutCompany" @change="loadCompSubs"></SubsEditor>
          <div class="view__item view__item_sub">Задачи</div>
          <SubsEditor :subs="project.task" @change="loadTaskSubs"></SubsEditor>
        </template>
      </div>
      <!-- for services -->
      <template v-if="category == 'service'">
        <div class="view__item view__item_sub">Срок выполнения:</div>
        <input
          type="text"
          class="view__input view__input_date"
          placeholder="Пример: Срок выполнения от 25 дней"
          v-model="service.date"
        />
      </template>

      <!-- for projects -->
      <template v-else>
        <div class="view__sub">Выберите предоставленную услугу:</div>
        <select class="view__select" v-model="project.nameOfService">
          <option class="view__option" v-for="(name,index) in categoryName" :key="index">{{name}}</option>
        </select>
      </template>

      <button type="submit" class="view__save btn" @click="save">Сохранить</button>
    </template>
  </div>
</template>

<script>
import SubsEditor from '@/components/SubsEditor'
import ChangeImg from '@/components/ChangeImg'
import StepsEditor from '@/components/StepsEditor'
import SlideEditor from '@/components/SlideEditor'
export default {
  props: ['mode', 'category', 'data'],
  async mounted () {
    if (this.category === 'project') {
      await this.$store.dispatch('services/loadServices')
      this.categoryName = this.$store.getters['services/servicesName']
    }
    if (this.mode === 'edit') {
      const id = this.$route.params.id
      if (this.category === 'service') {
        await this.$store.dispatch('services/loadServiceById', id)
        this.service = this.$store.getters['services/service']
      } else {
        await this.$store.dispatch('projects/loadProjectById', id)
        this.project = this.$store.getters['projects/project']
      }
    }
    this.loading = false
  },
  metaInfo () {
    return {
      title: this.header.toUpperCase()
    }
  },
  data () {
    return {
      loading: true,
      categoryName: [],
      service: {
        title: '',
        img: '',
        steps: [
          {
            title: '',
            description: ''
          }
        ],
        description: [''],
        date: ''
      },
      project: {
        title: '',
        subTitle: '',
        img: '',
        imgs: [],
        aboutCompany: [''],
        task: [''],
        nameOfService: ''
      },
      deletedName: []
    }
  },
  computed: {
    header () {
      return (this.mode === 'add' ? 'Добавление' : 'Редактирование') + ' ' + (this.category === 'service' ? 'услуги' : 'проекта')
    },
    img () {
      return this.mode === 'add' ? null : this.data.img
    }
  },
  methods: {
    loadSubs (v) {
      console.log(v)
      this.service.description = v
    },
    loadCompSubs (v) {
      this.project.aboutCompany = v
    },
    loadTaskSubs (v) {
      this.project.task = v
    },
    changeSteps (v) {
      console.log(v)
      this.service.steps = v
    },
    changeImg (v) {
      if (this.category === 'service') {
        this.service.img = v
      } else {
        this.project.img = v
      }
    },
    slideChange (v, d) {
      this.deletedName = d
      this.project.imgs = v
    },
    async save () {
      if (this.category === 'service') {
        if (this.mode === 'add') {
          try {
            this.loading = true
            await this.$store.dispatch('services/addNewService', {
              service: this.service,
              img: this.service.img
            })
            this.loading = false
            this.$router.push('/admin/services')
          } catch (error) {
            this.loading = false
            alert(error)
          }
        } else {
          try {
            this.loading = true
            await this.$store.dispatch('services/editServices', {
              service: this.service,
              id: this.$route.params.id
            })
            this.loading = false
            this.$router.push('/admin/services')
          } catch (error) {
            this.loading = false
            console.log(error)
            alert(error)
          }
        }
      } else {
        for (let i = 0; i < this.project.imgs.length; i++) {
          this.project.imgs[i].url = ''
        }
        if (this.mode === 'add') {
          try {
            this.loading = true
            await this.$store.dispatch('projects/addNewPorject', {
              project: this.project,
              img: this.project.img
            })
            this.loading = false
            this.$router.push('/admin/projects')
          } catch (error) {
            this.loading = false
            alert(error)
          }
        } else {
          try {
            this.loading = true
            await this.$store.dispatch('projects/editProject', {
              project: this.project,
              id: this.$route.params.id,
              deletedName: this.deletedName
            })
            this.loading = false
            this.$router.push('/admin/projects')
          } catch (error) {
            this.loading = false
            console.log(error)
            alert(error)
          }
        }
      }
    }
  },
  components: {
    SubsEditor,
    ChangeImg,
    StepsEditor,
    SlideEditor
  }
}
</script>

<style lang="less" scoped>
.btn {
  background: #4d6a00;
  outline: none;
  border: none;
  font-size: 18px;
  text-align: center;
  color: #f2f2f2;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 20px;
  &:active {
    background: darken(#4d6a00, 5%);
  }
}
.view {
  display: flex;
  flex-direction: column;
  &__item {
    margin: 20px 0;
    &_header {
      align-self: center;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 25px;
      line-height: 37px;
      /* identical to box height */
      margin-bottom: 30px;
      letter-spacing: 0.09em;
      text-transform: uppercase;
    }

    &_desc {
      padding-bottom: 20px;
      border-bottom: 2px solid grey;
    }

    &_sub {
      font-size: 20px;
    }

    &_img {
      width: 25%;
      @media (max-width: 1200px) {
        width: 50%;
      }
      @media (max-width: 800px) {
        width: 100%;
      }
    }

    &_settings {
      padding-bottom: 20px;
      border-top: 2px solid grey;
      border-bottom: 2px solid grey;
    }
  }

  &__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    background: #f5f5f5;
    border: 1px solid #959595;
    box-sizing: border-box;
    font-family: Montserrat;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    padding: 1%;
    border-radius: 0;
    margin-bottom: 20px;
    width: 100%;
    &_date {
    }
  }

  &__sub {
  }

  &__select {
    // -webkit-appearance: none;
    // -moz-appearance: none;
    // appearance: none;
    font-family: Montserrat;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.09em;
    padding: 0.5%;
    background: #f5f5f5;
    border-radius: 0%;
    border: 1px solid #959595;
    box-sizing: border-box;
    outline: none;
    resize: vertical;
    margin: 1%;
  }
  &__option {
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.09em;
    padding: 0.5%;
    background: #f5f5f5;
    border: 1px solid #959595;
    box-sizing: border-box;
    outline: none;
    margin: 2%;
  }
  &__save {
    margin: 50px 0%;
  }
}
</style>
