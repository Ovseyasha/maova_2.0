<template >
  <div class="main" ref="screen" @mousemove="mouseMove">
    <div
      class="main__logo animate__animated animate__fadeIn"
      :style="{'transform': `translate(${x * 15}px, ${y * 15}px)` }"
    >OM DESIGN</div>
    <div class="main__header" :style="{'transform': `translate(-${x * 20}px, -${y * 20}px)`}">
      <header class="header">Марина Овчинникова</header>
      <footer class="footer">графический дизайнер</footer>
      {{orientation}}
    </div>

    <img
      :src="require('@/assets/fon_site.png')"
      alt
      class="main__bg"
      :style="{'transform': `translate(-${x * 15}px, -${y * 15}px)`}"
    />
  </div>
</template>

<script>
// window.addEventListener('orientationchange', function () {
//   // Выводим числовое значение ориентации
//   this.orientation = this.$refs.screen.orientation
// }, false)
export default {

  metaInfo () {
    return {
      title: 'OMDESIGN'
    }
  },
  data () {
    return {
      orientation: null,
      x: 0,
      y: 0
    }
  },
  computed: {
  },
  methods: {
    mouseMove (e) {
      this.x = e.pageX / this.$refs.screen.offsetWidth
      this.y = e.pageY / this.$refs.screen.offsetHeight
      // window.addEventListener('orientationchange', function () {
      //   // Выводим числовое значение ориентации
      //   this.orientation = window.orientation
      // }, false)
    }
  }
}
</script>

<style lang="less" scoped >
.main {
  position: relative;
  background: rgb(161, 199, 0);
  background: radial-gradient(
    circle,
    rgba(161, 199, 0, 1) 0%,
    rgba(120, 153, 0, 1) 30%,
    rgba(89, 123, 0, 1) 93%
  );
  overflow: hidden;
  // for block full window
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main__logo {
  white-space: nowrap;
  font-size: calc(1em + 10vw);
  position: absolute;
  color: white;
  text-shadow: -42px 41px 21px rgba(0, 0, 0, 0.28);
  margin-top: 5%;
  margin-left: 5%;
  z-index: 1;
  font-weight: lighter;
}
.main__header {
  position: absolute;
  margin-top: 30%;
  margin-left: 5%;
}
.main__bg {
  right: 0;
  position: relative;
}
.header {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 37px;
  /* identical to box height */

  letter-spacing: 0.09em;
  text-transform: uppercase;

  color: #000000;
}
.footer {
  /* podzagolovok */

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 19.8px;
  line-height: 24px;
  letter-spacing: 0.09em;
  text-transform: lowercase;

  color: #000000;
}
@media (max-width: 500px) {
  .main {
    background: linear-gradient(
      180deg,
      rgba(77, 106, 0, 1) 0%,
      rgba(161, 199, 0, 1) 100%
    );
  }
  .main__bg {
    top: -50%;
    right: 90%;
  }
  .main__header {
    margin-top: 80%;
  }
  .main__logo {
    margin-top: 30%;
    text-shadow: -15px 41px 10px rgba(0, 0, 0, 0.28);
    // font-size: 10em;
  }
}
</style>
