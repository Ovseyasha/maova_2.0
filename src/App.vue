<template>
  <div id="app">
    <Navbar :scroll="scroll" v-if="this.$route.meta.layout !== 'admin'"></Navbar>
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
  metaInfo () {
    return {
      title: 'OMDESIGN',
      meta: [
        { description: 'Сайт портфолио графического дизайнера - Овчинниковой Марины' },
        { keywords: 'Дизайн, Дизайнер, Графический дизайнер, Сайт-портфолио, Design, Designer, Graphic designer, website portfolio ' }
      ]
    }
  },
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
@import 'assets/style.less';
html,
body {
  height: 100%;
  background: #e6e6e6;
}
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
