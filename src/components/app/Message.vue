<template>
  <div class="msg">{{error}}</div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="less" scoped>
.msg {
  z-index: 999999;
  top: 10%;
  right: 20%;
  position: fixed;
  padding: 20px;
  background: #e6e6e6;
  border: 2px solid #a0c601;
}
</style>
