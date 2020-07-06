<template>
  <div class="skills">
    <div class="skills__add">
      <img :src="skillUrl" class="skills__preview" />
      <button type="button" @click="onPickFile" class="skills__btn">
        <i class="fas fa-arrow-up"></i> Выбрать
      </button>
      <input type="text" class="skills__text" placeholder="Введите название" v-model="title" />
      <input
        type="file"
        style="display: none"
        accept="image/*"
        ref="fileInput"
        @change="onfilePicked"
      />
      <button type="button" @click="add" class="skills__btn">
        <i class="fas fa-plus-square"></i> Добавить
      </button>
    </div>
    <div class="skills__list">
      <div class="skill" v-for="(skill,index) in newSkills" :key="skill.index">
        <img :src="skill.img" class="skill__img" v-if="typeof(skill.img) == 'string'" />
        <img :src="skill.url" class="skill__img" v-else />
        <!-- input:file change img -->
        <div class="skill__text">{{skill.title}}</div>
        <button type="button" class="skill__delete" @click="remove(index)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['skills'],
  mounted () {
    this.newSkills = this.skills
  },
  data () {
    return {
      newSkills: [],
      deletedSkills: [],
      // new skill
      title: '',
      fileName: '',
      skill: null,
      skillUrl: ''
    }
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onfilePicked (event) {
      const files = event.target.files
      const fileName = files[0].name
      this.fileName = fileName
      this.filename = fileName
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('please add a avild file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.skillUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.skill = files[0]
    },
    add () {
      this.newSkills.push({
        title: this.title,
        img: this.skill,
        url: this.skillUrl,
        name: this.fileName
      })
      this.title = ''
      this.skill = null
      this.skillUrl = ''
      this.fileName = ''
    },
    remove (i) {
      this.deletedSkills.push(this.newSkills[i].name)
      this.newSkills.splice(i, 1)
      this.$emit('changed-skills', this.deletedSkills)
    }
  }
}
</script>

<style lang="less" scoped>
.skills {
  display: flex;
  flex-direction: column;
  &__add {
    display: flex;
  }

  &__preview {
    width: 50px;
    margin-right: 10px;
  }

  &__text {
    margin: 0 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex-basis: 30%;
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
  }

  &__btn {
    background: #4d6a00;
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #f2f2f2;
    cursor: pointer;
    padding: 10px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
.skill {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  max-width: 80px;
  align-items: center;
  justify-content: space-between;
  &__img {
    width: 40px;
  }

  &__text {
    margin: 10px 0;
    text-align: center;
  }

  &__delete {
    outline: none;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
}
</style>
