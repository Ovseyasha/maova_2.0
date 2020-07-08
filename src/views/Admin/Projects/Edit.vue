<template>
  <div class="edit">
    <vView :mode="'edit'" :category="'project'"></vView>
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
