<template>
  <div class="sidebar">
    <button type="button" class="sidebar__item btn" @click="signOut">Выйти</button>
  </div>
</template>

<script>
export default {
  methods: {
    async signOut () {
      try {
        await this.$store.dispatch('admin/logOut')
        this.$router.push('/admin?message=logout')
        console.log('вы вышли')
      } catch (error) {
      }
    }
  }
}
</script>

<style lang="less" scoped>
@green: #4d6a00;
.sidebar {
  position: absolute;
  top: 30px;
  right: 10%;
  display: flex;
  @media (max-width: 600px) {
    top: 20px;
    right: 5%;
  }
  &__item {
  }
  .btn {
    background: #4d6a00;
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.09em;
    color: #f2f2f2;
    cursor: pointer;
    align-self: center;
    padding: 10px;
    &:active {
      background: darken(#4d6a00, 5%);
    }
  }
}
</style>
