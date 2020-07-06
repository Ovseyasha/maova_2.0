<template>
  <div class="analitics">сюда добавить аналитику</div>
</template>

<script>
export default {
  computed: {
    list () {
      return this.$store.getters['menu/adminList']
    }
  }
}
</script>

<style lang="less" scoped>
</style>
