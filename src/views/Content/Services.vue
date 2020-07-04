<template>
  <div class="services">
    <div class="services__items">
      <Loader v-if="loading" />
      <transition-group
        class="services__items"
        enter-active-class="animate__fadeIn animate__animated animate__faster"
        v-else
      >
        <Service
          class="services__item"
          v-for="(service) in services"
          :key="service.id"
          :service="service"
        ></Service>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Service from '@/components/Service'
export default {
  async mounted () {
    await this.$store.dispatch('services/loadServices')
    this.loading = false
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    services () {
      return this.$store.getters['services/services']
    }
  },
  components: {
    Service
  }
}
</script>

<style lang="less" scoped>
.services__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.services__item {
  margin: 1%;
  @media (max-width: 500px) {
    margin: 0;
    margin-bottom: 5%;
  }
}

// @media (max-width: 1200px) {
//   .services__item {
//     flex-basis: 30%;
//   }
// }
// @media (max-width: 992px) {
//   .services__item {
//     flex-basis: 45%;
//   }
// }
// @media (max-width: 768px) {
//   .services__item {
//     flex-basis: 48%;
//   }
// }
// @media (max-width: 576px) {
//   .services__item {
//     flex-basis: 98%;
//   }
// }
</style>
