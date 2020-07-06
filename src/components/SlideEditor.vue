<template>
  <div class="slides">
    <div class="slides__add">
      <input type="text" class="slides__input" />
      <button class="slides__choose-img">Вобрать фото</button>
      <button class="slides__btn">Добавить</button>
      <div class="slides__item">
        <div class="slide">
          <img src alt class="slide__img" />
          <div class="slide__text"></div>
          <div class="slide__delete">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
