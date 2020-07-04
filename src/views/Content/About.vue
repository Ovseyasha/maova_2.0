<template>
  <div class="about">
    <Loader v-if="loading" />
    <template v-else>
      <div class="desc">
        <img :src="img" alt="avatar" class="desc__pic" />
        <div class="desc__text">
          <div class="desc__sub" v-for="(sub,index) in about" :key="index">{{sub}}</div>
        </div>
      </div>
      <div class="skills">
        <div class="skills__header">Основные инструменты которые я использую в работе</div>
        <div class="skills__items">
          <div class="skill" v-for="skill in skills" :key="skill.title">
            <img :src="skill.img" :alt="skill.title" class="skill__pic" />
            <div class="skill__title">{{skill.title}}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  async mounted () {
    await this.$store.dispatch('about/loadAbout')
    this.loading = false
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    img () {
      return this.$store.getters['about/img']
    },
    skills () {
      return this.$store.getters['about/skills']
    },
    about () {
      return this.$store.getters['about/about']
    }
  }
}
</script>

<style lang="less" scoped>
img {
  max-width: 100%;
}
.about {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
}
.desc {
  margin-bottom: 2%;
  &__pic {
    float: left;
    margin-right: 2%;
    @media (max-width: 600px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 5%;
    }
  }

  &__text {
  }

  &__sub {
    padding-bottom: 1%;
    @media (max-width: 600px) {
      padding-bottom: 3%;
    }
  }
}
.skills {
  &__header {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: 0.09em;
    color: #4f4f4f;
    border-bottom: 2px solid #c4c4c4;
    padding-bottom: 1%;
  }

  &__items {
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.skill {
  flex-basis: 80px;
  @media (max-width: 600px) {
    flex-basis: 25%;
  }
  &__pic {
    width: 40px;
    height: 40px;
    @media (max-width: 600px) {
      width: 80px;
      height: 80px;
    }
  }

  &__title {
  }
}
</style>
