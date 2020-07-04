<template>
  <div class="footer">
    <a
      href="https://www.facebook.com/omdesign.su"
      class="footer__link"
      target="_blank"
      :class="{'footer__link_green' : notMain}"
    >
      <i class="fab fa-facebook-f"></i>
    </a>
    <a
      href="https://www.behance.net/maova"
      target="_blank"
      class="footer__link"
      :class="{'footer__link_green' : notMain}"
    >
      <i class="fab fa-behance"></i>
    </a>
    <a
      href="https://www.instagram.com/ovchinnikova_m_design/"
      class="footer__link"
      target="_blank"
      :class="{'footer__link_green' : notMain}"
    >
      <i class="fab fa-instagram"></i>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    notMain () {
      return this.$route.name !== 'Main'
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  right: 5%;
  bottom: 4%;
  font-size: 25px;
}
.footer__link {
  margin-left: 60px;
  color: #fff;
  transition: color 0.3s;
}
.footer__link_green {
  color: #4d6a00;
}
</style>
