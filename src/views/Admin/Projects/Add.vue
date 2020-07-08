<template>
  <div class="add">
    <vView :mode="'add'" :category="'project'"></vView>
  </div>
</template>

<script>
import vView from '@/components/View'
export default {
  components: {
    vView
  }
}
</script>

<style lang="less" scoped>
</style>
