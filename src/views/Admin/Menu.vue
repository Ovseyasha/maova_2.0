<template>
  <div class="stat">
    <Loader v-if="loading" />
    <template v-else>
      <div class="stat__item">
        <div class="stat__header">Услуги:</div>
        <div class="stat__info">{{services}}</div>
      </div>
      <div class="stat__item">
        <div class="stat__header">Проекты:</div>
        <div class="stat__info">{{projects}}</div>
      </div>
      <div class="stat__item">
        <div class="stat__header">Письма:</div>
        <div class="stat__info">{{mails}}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  async mounted () {
    await this.$store.dispatch('services/loadServices')
    await this.$store.dispatch('projects/LoadProjects')
    await this.$store.dispatch('contacts/loadMails')
    this.services = this.$store.getters['services/services'].length
    this.projects = this.$store.getters['projects/projects'].length
    this.mails = this.$store.getters['contacts/mails'].length
    this.loading = false
  },
  data () {
    return {
      loading: true,
      services: 0,
      projects: 0,
      mails: 0
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
.stat {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20%;
  @media (max-width: 1200px) {
    margin-top: 45%;
  }

  flex-wrap: wrap;
  &__item {
    @media (max-width: 1000px) {
      flex-basis: 100%;
      margin: 5%;
    }
    display: flex;
    font-family: Montserrat;
    font-style: normal;
    font-size: 36px;
    line-height: 44px;
    text-transform: uppercase;
  }

  &__header {
    margin-right: 10px;
    color: #4d6a00;
  }

  &__info {
    font-weight: bold;
    background: #a0c601;
    color: white;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
</style>
