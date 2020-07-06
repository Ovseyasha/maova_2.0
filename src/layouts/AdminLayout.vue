<template>
  <div class="admin">
    <AdminNavbar v-if="this.$route.name !== 'Login'"></AdminNavbar>
    <AdminSidebar v-if="this.$route.name !== 'Login'"></AdminSidebar>
    <div class="admin__wrapper">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__faster animate__fadeIn "
        leave-active-class="animate__animated animate__faster animate__fadeOut "
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import AdminNavbar from '@/components/app/AdminNavbar'
import AdminSidebar from '@/components/app/AdminSidebar'
export default {
  metaInfo () {
    return {
      title: this.titleOfPage.toUpperCase() + ' | OMDESIGN'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    titleOfPage () {
      let title = ''
      const list = this.$store.getters['menu/adminList']
      for (let i = 0; i < list.length; i++) {
        if (this.$route.path === list[i].link) {
          title = list[i].title
        }
      }
      return title
    }
  },
  components: {
    AdminNavbar,
    AdminSidebar
  }
}
</script>

<style lang="less" scoped>
.admin {
  position: relative;
  &__wrapper {
    position: absolute;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    margin-top: 6%;
    margin-left: 15%;
    @media (max-width: 600px) {
      margin-top: 20%;
    }
    // padding: 0 10%;
  }
}
</style>
