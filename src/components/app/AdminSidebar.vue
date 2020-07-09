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
  .btn {
    align-self: center;
    padding: 10px;
  }
}
</style>
