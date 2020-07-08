<template>
  <div class="subs">
    <button type="button" class="subs__btn" @click="add">
      <i class="fas fa-plus-square"></i> Добавить
    </button>

    <transition-group
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div class="sub" v-for="(sub,index) in newSubs" :key="index">
        <div class="sub__i">{{index + 1 }}</div>
        <textarea class="sub__text" v-model="newSubs[index]"></textarea>
        <button type="button" class="sub__delete" @click="remove(index)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['subs'],
  mounted () {
    this.newSubs = this.subs || ['']
  },
  data () {
    return {
      newSubs: ['']
    }
  },
  methods: {
    add () {
      this.newSubs.push('')
    },
    remove (i) {
      this.newSubs.splice(i, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.subs {
  display: flex;
  flex-direction: column;
  &__btn {
    background: #4d6a00;
    outline: none;
    border: none;
    font-size: 18px;
    text-align: center;
    color: #f2f2f2;
    cursor: pointer;
    padding: 10px;
    margin-bottom: 10px;
    &:active {
      background: darken(#4d6a00, 5%);
    }
  }
}
.sub {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  &__i {
    font-weight: bold;
  }
  &__text {
    width: 80%;
    height: 50px;
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

  &__delete {
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
</style>
