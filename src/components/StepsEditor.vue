<template>
  <div class="steps">
    <button class="steps__add" @click="add">
      <i class="fas fa-plus-square"></i> Добавить
    </button>
    <div class="steps__items">
      <div class="step" v-for="(step,index) in newSteps" :key="index">
        <div class="step__item step__item_i">{{++index}}</div>
        <textarea class="step__item step__item_input" placeholder="Заголовок" v-model="step.title"></textarea>
        <textarea
          class="step__item step__item_input"
          placeholder="Описание"
          v-model="step.description"
        ></textarea>
        <button type="button" class="step__item step__item_delete" @click="remove(index)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['steps'],
  mounted () {
    if (this.steps) {
      this.newSteps = this.steps
    }
  },
  data () {
    return {
      newSteps: [
        {
          title: '',
          description: ''
        }
      ]
    }
  },
  methods: {
    add () {
      this.newSteps.push({
        title: '',
        description: ''
      })
    },
    remove (i) {
      this.newSteps.splice(i, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.steps {
  display: flex;
  flex-direction: column;
  &__add {
    background: #4d6a00;
    outline: none;
    border: none;
    font-size: 18px;
    text-align: center;
    color: #f2f2f2;
    cursor: pointer;
    padding: 10px;
    margin-bottom: 20px;
    &:active {
      background: darken(#4d6a00, 5%);
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
  }
}
.step {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  &__item {
    &_i {
      flex-basis: 5%;
      font-weight: bold;
    }

    &_input {
      flex-basis: 40%;
      height: 100px;
      resize: vertical;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      background: #f5f5f5;
      border: 1px solid #959595;
      box-sizing: border-box;
      font-family: Montserrat;
      font-style: italic;
      font-weight: normal;
      font-size: 18px;
      padding: 1%;
      border-radius: 0;
    }

    &_delete {
      flex-basis: 5%;
      cursor: pointer;
      outline: none;
      border: none;
      background: none;
      font-size: 20px;
      padding: 0;
      margin: 0;
      &:active {
        color: grey;
      }
    }
  }
}
</style>
