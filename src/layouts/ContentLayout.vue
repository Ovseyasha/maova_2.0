<template>
  <div class="content">
    <div class="wrapper" ref="wrapper" @scroll="src($event)">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__slideInRight animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <div class="content__header" :key="titleOfPage">{{titleOfPage}}</div>
      </transition>

      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__slideInRight animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.screen = this.$refs.wrapper.offsetWidth
  },
  metaInfo () {
    return {
      title: this.titleOfPage.toUpperCase() + ' | OMDESIGN'
    }
  },
  data () {
    return {
      screen: null
    }
  },
  computed: {
    titleOfPage () {
      let title = ''
      const list = this.$store.getters['menu/list']
      for (let i = 0; i < list.length; i++) {
        if (this.$route.path === list[i].link) {
          title = list[i].title
        }
      }
      return title
    }
  },
  methods: {
    src (e) {
      this.$emit('scrollVal', e.srcElement.scrollTop)
    }
  }
}
</script>

<style lang="less" >
.wrapper {
  padding: 0 10%;
  overflow-y: auto;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 0px;
  }
  @media (max-width: 1160px) {
    padding: 30px 10%;
    height: 80vh;
  }
  @media (max-width: 800px) {
    padding: 30px 5%;
  }
  @media (max-width: 600px) {
    padding: 60px 5%;
    height: 72vh;
  }
  @media (max-width: 500px) {
    padding: 60px 5%;
    height: 70vh;
  }
}
.content {
  background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0.3) 0%,
      rgba(196, 196, 196, 0.3) 100%
    ),
    url('../assets/bg2.jpg') no-repeat center center fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &__header {
    margin-top: 5%;
    margin-bottom: 2%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 37px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.09em;
    text-transform: uppercase;

    color: #000000;
    @media (max-width: 600px) {
      margin-bottom: 5%;
    }
  }
}
</style>
