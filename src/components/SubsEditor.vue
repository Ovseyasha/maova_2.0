<template>
  <div class="subs">
    <button type="button" class="subs__btn btn" @click="add">
      <i class="fas fa-plus-square"></i> Добавить
    </button>

    <transition-group
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div class="sub" v-for="(sub,index) in newSubs" :key="index">
        <div class="sub__i">{{index + 1 }}</div>
        <textarea class="sub__text input" v-model="newSubs[index]"></textarea>
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
    padding: 10px;
    margin-bottom: 10px;
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
