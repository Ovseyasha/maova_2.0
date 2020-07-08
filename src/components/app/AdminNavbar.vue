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
      <div class="menu__wrap">
        <i class="fas" :class="link.icon"></i>
        <div class="menu__count" v-if="link.count && cnt !== 0">{{cnt}}</div>
      </div>

      <div class="menu__text">{{link.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['cnt'],
  // async mounted () {

  // },
  data () {
    return {
      count: 0
    }
  },
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
  height: 100%;
  &__wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
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
      flex-basis: 100%;
      font-size: 30px;
    }
    &_active {
      background: darken(@green, 20%);
    }
  }
  &__count {
    margin-left: 5px;
    background: white;
    color: #000;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    font-size: 18px;
    @media (max-width: 1200px) {
      margin-top: 5px;
      font-size: 18px;
      // flex-basis: 100%;
    }
  }
  &__text {
    @media (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
