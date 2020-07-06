<template>
  <div class="projects">
    <Loader v-if="loading" />
    <transition-group
      class="projects__items"
      enter-active-class="animate__fadeIn animate__animated animate__faster"
    >
      <router-link
        class="projects__item project-block"
        v-for="(project) in projects"
        :key="project.id"
        tag="a"
        :to="`/projects/${project.id}`"
        :style="getBg(project.img)"
      >
        <div class="project-block__wrapper">
          <div class="project-block__title">{{project.title}}</div>
          <div class="project-block__sub-title">{{project.subTitle}}</div>
        </div>
        <div class="project-block__blur"></div>
      </router-link>
    </transition-group>
  </div>
</template>

<script>
export default {
  async mounted () {
    await this.$store.dispatch('projects/LoadProjects')
    this.loading = false
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    projects () {
      return this.$store.getters['projects/projects']
    }
  },
  methods: {
    getBg (img) {
      return {
        background: `url(${img}), url(${require('@/assets/loading.gif')}) no-repeat`,
        backgroundSize: '100% 100%'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.projects {
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__item {
    position: relative;
    flex-basis: 23%;
    height: 35vh;
    margin: auto;
    background: white;
    overflow: hidden; /* clearfix */
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    &:hover .project-block__title {
      top: -50px;
    }
    &:hover .project-block__sub-title {
      opacity: 1;
    }
    @media (max-width: 1200px) {
      flex-basis: 30%;
      height: 35vh;
    }
    @media (max-width: 992px) {
      flex-basis: 48%;
      height: 35vh;
    }
    @media (max-width: 768px) {
      flex-basis: 98%;
      height: 55vh;
    }
    @media (max-width: 576px) {
      flex-basis: 98%;
      height: 50vh;
    }
  }
}
.project-block {
  &__wrapper {
    width: 100%;
    z-index: 1;
  }

  &__title {
    width: 100%;
    color: white;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 19.8px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    position: relative;
    transition: all 0.3s;
    top: 2em;
    /* top: -4em; */
  }

  &__sub-title {
    width: 100%;
    color: white;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
    opacity: 0;
    transition: opacity 0.5s;
  }
  &__blur {
    position: absolute;
    transition: 0.5s;
    background: #000;
    opacity: 0.4;
    height: 100%;
    width: 100%;
  }
}
</style>
