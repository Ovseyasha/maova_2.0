<template>
  <div class="change">
    <img :src="img" alt="avatar" class="change__img" v-if="imageUrl == '' && img !== '' " />
    <img
      :src="require('@/assets/default.jpg')"
      alt="avatar"
      class="change__img"
      v-else-if="imageUrl == '' && img === ''"
    />
    <img :src="imageUrl" alt="avatar" class="change__img" v-else />
    <div class="change__item">
      <div class="change__file">{{filename}}</div>
      <input
        type="file"
        style="display: none"
        accept="image/*"
        ref="fileInput"
        @change="onfilePicked"
      />
      <button type="button" @click="onPickFile" class="change__btn">
        <i class="fas fa-arrow-up"></i> Изменить фото
      </button>
      <button type="button" class="change__btn change__btn_reset" @click="resetImg">
        <i class="fas fa-trash-restore"></i> Сброс
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img'],
  data () {
    return {
      imageUrl: '',
      image: null,
      filename: '',
      oldPath: this.img
    }
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onfilePicked (event) {
      const files = event.target.files
      const fileName = files[0].name
      this.filename = fileName
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('please add a avild file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      this.$emit('changed-img', this.image)
    },
    resetImg () {
      this.image = this.oldPath
      this.imageUrl = this.oldPath
      this.filename = ''
      this.$emit('changed-img', this.oldPath)
    }
  }
}
</script>

<style lang="less" scoped>
@green: #4d6a00;
.change {
  display: flex;
  flex-direction: column;
  &__img {
    max-width: 100%;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__file {
    text-align: center;
    margin-top: 2%;
    flex-basis: 100%;
  }

  &__btn {
    // flex-basis: 45%;
    @media (max-width: 600px) {
      flex-basis: 100%;
      margin: 5px 0;
    }
    margin: 20px 0;
    background: @green;
    outline: none;
    border: none;
    font-size: 18px;
    text-align: center;
    color: #f2f2f2;
    cursor: pointer;
    padding: 10px;
  }
}
</style>
