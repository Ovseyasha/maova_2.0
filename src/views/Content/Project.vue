<template>
  <div class="project">
    <Loader v-if="loading" />
    <template v-else>
      <div class="project__back">
        <a class="link-back" @click="$router.go(-1)">
          <i class="fas fa-arrow-circle-left"></i> Назад
        </a>
      </div>
      <div class="project__content">
        <div class="project__slider animate__animated animate__slideInLeft">
          <slick ref="slick" :options="slickOptions">
            <div class="project__slide" v-for="img in project.imgs" :key="img.img">
              <div class="project__slide-title">{{img.title}}</div>
              <img
                class="project__slides"
                :src="require('@/assets/loading-slider.gif')"
                :data-lazy="img.img"
              />
            </div>
          </slick>
        </div>
        <div class="project__text animate__animated animate__fadeInLeft">
          <h1 class="project__name">{{project.subTitle}}</h1>
          <div class="subs">
            <div class="subs__item">
              <div class="subs__title">Деятельность компании:</div>
              <p class="subs__text" v-for="(sub,index) in project.aboutCompany" :key="index">{{sub}}</p>
            </div>
            <div class="subs__item">
              <div class="subs__title">Задача:</div>
              <p class="subs__text" v-for="(sub,index) in project.task" :key="index">{{sub}}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Slick from 'vue-slick'
export default {
  async mounted () {
    const id = this.$route.params.id
    await this.$store.dispatch('projects/loadProjectById', id)
    this.project = await this.$store.getters['projects/project']
    if (!this.project) {
      this.$router.push({ name: 'Error' })
    }
    this.loading = false
  },
  beforeDestroy () {
    if (this.$refs.slick) {
      this.$refs.slick.destroy()
    }
  },
  metaInfo () {
    return {
      title: this.project.title || 'Прокект' + ' | OMDESIGN'
    }
  },
  data () {
    return {
      loading: true,
      project: {},
      slickOptions: {
        lazyLoad: 'progressive',
        dots: true,
        mobileFirst: true
      }
    }
  },
  computed: {
    header () {
      return this.project.title.toLowerCase()
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },

    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  },
  components: { Slick }
}
</script>

<style lang="less" >
@import '~slick-carousel/slick/slick.css';
.slick-arrow {
  z-index: 999;
  position: absolute;
  top: 40%;
  font-size: 0px;
  width: 80px;
  height: 80px;
  border: none;
  outline: none;
  background: url('../../assets/right.svg') no-repeat center;
  cursor: pointer;
  opacity: 0.65;
  @media (max-width: 600px) {
    top: 35%;
    width: 40px;
    height: 40px;
  }
  &:hover {
    opacity: 1;
  }
}
.slick-next {
  right: 0;
}
.slick-prev {
  transform: rotate(180deg);
}
.slick-dots {
  // position: absolute;
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 15%;
  margin: 0 auto;
  padding: 0;
  // bg
  button {
    widows: 10px;
    height: 11px;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 0;
    background: #c4c4c4;
    border-radius: 50%;
    @media (max-width: 600px) {
      widows: 5px;
      // height: 5px;
    }
  }
}
.slick-active {
  button {
    background: #888888;
  }
}
.project {
  position: relative;
  margin-top: 5%;
  @media (max-width: 1500px) {
    margin-top: 10%;
  }
  @media (max-width: 1300px) {
    margin-top: 15%;
  }
  @media (max-width: 500px) {
    padding-top: 10%;
  }
  &__back {
    padding-bottom: 2%;
    @media (max-width: 500px) {
      padding-bottom: 4%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
  &__slider {
    z-index: 2;
    width: 75%;
    position: relative;
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
  &__slides {
    width: 100%;
    height: 100%;
  }
  &__slide-title {
    font-family: Montserrat;
    font-style: italic;
    font-weight: medium;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.09em;
    margin-bottom: 1%;
    color: #4d6a00;
    @media (max-width: 500px) {
      font-size: 10px;
    }
  }
  &__text {
    width: 24%;
    @media (max-width: 1200px) {
      margin-top: 5%;
      width: 100%;
    }
  }

  &__name {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    // line-height: 44px;
    text-transform: uppercase;
    margin-bottom: 10%;
    /* knopka */
    @media (max-width: 1200px) {
      margin-bottom: 2%;
    }
    @media (max-width: 500px) {
      margin-bottom: 4%;
    }
    color: #4d6a00;
  }
}
.link-back {
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  color: #a6a6a6;
  &:hover {
    color: #808080;
  }
}
.subs {
  &__item {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }

  &__title {
    margin-bottom: 2%;
    @media (max-width: 1200px) {
      margin-bottom: 1%;
    }
  }

  &__text {
    margin-bottom: 10%;
    @media (max-width: 1200px) {
      margin-bottom: 2%;
    }
    @media (max-width: 500px) {
      margin-bottom: 10%;
    }
  }
}
</style>
