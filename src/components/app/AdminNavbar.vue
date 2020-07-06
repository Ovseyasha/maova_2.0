<template>
  <div class="menu">
    <router-link
      class="menu__item animate__animated animate__fadeIn"
      active-class="menu__item_active"
      :exact="link.exact"
      v-for="link in list"
      :key="link.title"
      :to="link.link"
    >
      <i class="fas" :class="link.icon"></i>
      <div class="menu__text">{{link.title}}</div>
    </router-link>
  </div>
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
@green: #a0c601;
.menu {
  width: 10%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 17%;
    padding: 10%;
    text-decoration: none;
    color: white;
    font-size: 20px;
    background: @green;
    @media (max-width: 1200px) {
      font-size: 30px;
    }
    &_active {
      background: darken(@green, 20%);
    }
  }
  &__text {
    @media (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
