<template>
  <div class="list">
    <List :mode="'services'"></List>
  </div>
</template>

<script>
import List from '@/components/List.vue'
export default {
  data () {
    return {
      loading: true,
      services: []
    }
  },
  components: {
    List
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  &__header {
    align-self: center;
  }

  &__item {
  }
}
</style>
