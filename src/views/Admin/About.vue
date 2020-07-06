<template>
  <form class="about" @submit.prevent="save">
    <Loader v-if="loading" />
    <template v-else>
      <div class="about__desc">
        <div class="about__img">
          <ChangeImg :img="img" @changed-img="newImg"></ChangeImg>
        </div>
        <div class="about__text">
          <SubsEditor :subs="about"></SubsEditor>
        </div>
      </div>
      <div class="about__hr"></div>
      <div class="about__skills">
        <SkillsEditor :skills="skills" @changed-skills="deletedSkill"></SkillsEditor>
      </div>
      <button type="submit" class="about__btn">Сохранить</button>
    </template>
  </form>
</template>

<script>
import ChangeImg from '@/components/ChangeImg'
import SubsEditor from '@/components/SubsEditor'
import SkillsEditor from '@/components/SkillsEditor'
export default {
  async mounted () {
    await this.$store.dispatch('about/loadAbout')
    this.img = this.$store.getters['about/img']
    this.about = this.$store.getters['about/about']
    this.skills = this.$store.getters['about/skills']
    this.loading = false
  },
  data () {
    return {
      loading: true,
      nameOfDeleteSkills: [],
      img: null,
      skills: [],
      about: []
    }
  },
  methods: {
    newImg (img) {
      this.img = img
    },
    deletedSkill (val) {
      this.nameOfDeleteSkills = val
    },
    async save () {
      for (let i = 0; i < this.skills.length; i++) {
        this.skills[i].url = ''
      }
      try {
        this.loading = true
        await this.$store.dispatch('about/update', {
          img: this.img,
          about: this.about,
          skills: this.skills,
          names: this.nameOfDeleteSkills
        })
        await this.$store.dispatch('about/loadAbout')
        this.img = this.$store.getters['about/img']
        this.loading = false
      } catch (error) {
        alert(error)
      }
    }
  },
  components: {
    ChangeImg,
    SubsEditor,
    SkillsEditor
  }
}
</script>

<style lang="less" scoped>
.about {
  display: flex;
  flex-direction: column;
  &__desc {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1000px) {
      flex-basis: auto;
    }
  }

  &__img {
    flex-basis: 30%;
    @media (max-width: 1000px) {
      flex-basis: auto;
      padding-bottom: 5px;
      margin-bottom: 10px;
      border-bottom: 2px solid grey;
    }
  }

  &__text {
    flex-basis: 60%;

    @media (max-width: 1000px) {
      flex-basis: 100%;
    }
  }

  &__hr {
    margin: 20px 0;
    width: 100%;
    height: 2px;
    background: grey;
    opacity: 0.7;
  }

  &__skills {
  }

  &__btn {
    margin: 20px 0;
    align-self: center;
    background: #4d6a00;
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #f2f2f2;
    cursor: pointer;
    padding: 10px;
  }
}
</style>
