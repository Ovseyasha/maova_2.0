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
        <div class="project__slider">
          <slick ref="slick" :options="slickOptions">
            <img
              class="project__slide"
              v-for="img in project.imgs"
              :key="img.img"
              :data-lazy="img.img"
            />
          </slick>
        </div>
        <div class="project__text">
          <div class="project__name">{{project.subTitle}}</div>
          <div class="subs">
            <div class="subs__item">
              <div class="subs__title">Деятельность компании:</div>
              <div
                class="subs__text"
                v-for="(sub,index) in project.aboutCompany"
                :key="index"
              >{{sub}}</div>
            </div>
            <div class="subs__item">
              <div class="subs__title">Задача:</div>
              <div class="subs__text" v-for="(sub,index) in project.task" :key="index">{{sub}}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
  <!-- :src="require('@/assets/loading.gif')" -->
</template>

<script>
import Slick from 'vue-slick'
export default {
  async mounted () {
    const id = this.$route.params.id
    await this.$store.dispatch('projects/loadProjectById', id)
    this.project = await this.$store.getters['projects/project']
    this.loading = false
  },
  beforeUpdate () {
    if (this.$refs.slick) {
      this.$refs.slick.destroy()
    }
  },
  metaInfo () {
    return {
      title: `${this.project.title} | OMDESIGN`
    }
  },
  data () {
    return {
      loading: true,
      project: {},
      slickOptions: {
        // centerMode: true,
        // slidesToShow: 1,
        dots: true,
        mobileFirst: true
        // variableWidth: true,
        // adaptiveHeight: true
        // Any other options that can be got from plugin documentation
      }
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
// .wrapper {
//   // padding: 0 5%;
//   // @media (max-width: 1160px) {
//   //   padding: 30px 5%;
//   //   height: 90vh;
//   // }
// }
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
  margin-top: 8%;
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
    width: 75%;
    // height: 80%;
    position: relative;
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
  &__slide {
    // max-height: 650px;
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
