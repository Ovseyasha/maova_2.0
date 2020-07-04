<template>
  <div id="app">
    <Navbar :scroll="scroll"></Navbar>
    <!-- для переключения компонентов по слоям -->
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__faster  animate__fadeIn"
      leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <component :is="layout" @scrollVal="scrolls">
        <router-view class="page"></router-view>
      </component>
    </transition>
    <Links v-if="$route.path === '/'"></Links>
  </div>
</template>
<script>
import MainLayout from '@/layouts/MainLayout'
import ContentLayout from '@/layouts/ContentLayout'
import AdminLayout from '@/layouts/AdminLayout'
import Navbar from '@/components/app/Navbar'
import Links from '@/components/app/Links'

export default {
  data () {
    return {
      scroll: false
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  methods: {
    scrolls (val) {
      if (val >= 1) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    }
  },
  components: {
    MainLayout,
    ContentLayout,
    AdminLayout,
    Navbar,
    Links
  }
}
</script>
<style lang="less">
@import '~animate.css/animate.min.css';
html,
body {
  height: 100%;
}
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
// .page {
//   @media (max-width: 500px) {
//     margin-top: 10%;
//   }
// }
</style>
