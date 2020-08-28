<template>
  <div class="projects">
    <Loader v-show="loading" />
    <transition-group
      v-show="!loading"
      class="projects__items"
      enter-active-class="animate__fadeIn animate__animated animate__faster"
    >
      <div
        class="projects__item project-block"
        v-for="(project) in projects"
        :key="project.id"
        :style="getBg(project.img)"
        @click="link(project.id)"
      >
        <div class="project-block__wrapper">
          <div class="project-block__title" :ref="`title_${project.id}`">{{project.title}}</div>
          <div class="project-block__sub-title" :ref="`sub_${project.id}`">{{project.subTitle}}</div>
        </div>
        <div class="project-block__blur"></div>
      </div>
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
    },
    link (id) {
      if (window.outerWidth <= 600) {
        if (this.$refs[`title_${id}`][0].style.top !== '20%') {
          this.$refs[`title_${id}`][0].style.top = '20%'
          this.$refs[`sub_${id}`][0].style.opacity = '1'
        } else {
          this.$router.push(`/projects/${id}`)
        }
      } else {
        this.$router.push(`/projects/${id}`)
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
    width: 350px;
    height: 350px;
    overflow: hidden; /* clearfix */
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media (min-width: 600px) {
      &:hover .project-block__title {
        top: 20%;
      }
      &:hover .project-block__sub-title {
        opacity: 1;
      }
    }
  }
}
.project-block {
  cursor: pointer;
  &__wrapper {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
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
    position: absolute;
    top: 45%;
    height: 50%;
    transition: all 0.3s;
  }

  &__sub-title {
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
    height: 15%;
    margin: 0 5%;
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
