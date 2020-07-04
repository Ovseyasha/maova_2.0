<template>
  <div class="main">
    <!-- <Loader v-if="loading" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // loading: true
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
</style>
