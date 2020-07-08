<template>
  <div class="slides">
    <div class="slides__inputs">
      <input type="text" class="slides__input slides__item" placeholder="Название" v-model="title" />
      <input
        type="file"
        style="display: none"
        accept="image/*"
        ref="fileInput"
        @change="onfilePicked"
      />
      <button class="slides__choose-img slides__item" @click="onPickFile">Выбрать фото</button>
      <div class="slides__filename slides__item">{{filename}}</div>
      <button class="slides__btn slides__item" @click="add">Добавить</button>
      <button class="slides__btn slides__item" @click="save">Сохранить изменения</button>
    </div>
    <div class="slides__items">
      <div class="slide" v-for="(slide,index) in newSlides" :key="index">
        <template v-if="slide.img !== ''">
          <img :src="slide.url || slide.img" class="slide__img" />
          <div class="slide__text">{{slide.title}}</div>
          <div class="slide__delete" @click="remove(index)">
            <i class="fas fa-trash-alt"></i>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slides'],
  mounted () {
    if (this.slides.length) {
      this.newSlides = this.slides
    }
  },
  data () {
    return {
      title: '',
      image: null,
      imageUrl: '',
      filename: '',
      newSlides: [],
      deleted: []
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
    },
    add () {
      this.newSlides.push({
        title: this.title,
        url: this.imageUrl,
        img: this.image,
        fileName: this.filename
      })
      this.title = ''
      this.imageUrl = ''
      this.filename = ''
    },
    remove (i) {
      this.deleted.push(this.newSlides[i].fileName)
      this.newSlides.splice(i, 1)
    },
    save () {
      this.$emit('changed', this.newSlides, this.deleted)
    }
  }
}
</script>

<style lang="less" scoped>
.slides {
  display: flex;
  flex-direction: column;
  &__inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  &__input {
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
    @media (max-width: 960px) {
      margin: 2% 0;
    }
  }
  &__item {
    @media (max-width: 960px) {
      flex-basis: 100%;
    }
  }
  &__choose-img {
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

  &__filename {
    text-align: center;
  }

  &__btn {
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
    flex-wrap: wrap;
  }
}

.slide {
  display: flex;
  // width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  &__img {
    width: 400px;
    @media (max-width: 960px) {
      width: 100%;
    }
    margin-bottom: 20px;
  }

  &__text {
    margin-bottom: 20px;
  }

  &__delete {
    outline: none;
    cursor: pointer;
    &:active {
      color: grey;
    }
  }
}
.fas {
}
.fa-trash-alt {
}
</style>
