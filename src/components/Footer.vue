<template>
  <footer class="footer">
    <section v-if="$route.name !== 'contact'" class="footer-contact">
      <div class="footer-contact-wrapper">
        <div class="footer-contact-container">
          <div class="left-side">
            <p class="contact-heading">Let’s talk about your project</p>
            <p class="contact-text">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
          </div>
          <router-link to="/contact" class="contact-link">Get in touch</router-link>
        </div>
      </div>
    </section>
    <section class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-top-section">
          <router-link to="/" class="header-logo">
            <img src="/assets/shared/desktop/logo-light.png" alt="Designo">
          </router-link>
          <nav class="header-nav">
            <router-link to="/about" class="nav-link">Our company</router-link>
            <router-link to="/locations" class="nav-link">Locations</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </nav>
        </div>
        <div class="footer-bottom-section">
          <p class="footer-address">
            <strong>Designo Central Office</strong><br>
            3886 Wellington Street<br>
            Toronto, Ontario M9C 3J5
          </p>
          <p class="footer-phone">
            Contact Us (Central Office)<br>
            P : +1 253-863-8967<br>
            M : contact@designo.co
          </p>
          <div class="footer-socials">
            <a v-for="(link, index) in ['facebook','youtube','twitter','pinterest','instagram']" :key="index" href="#" class="footer-social">
              <img :src="`/assets/shared/desktop/icon-${link}.svg`" :alt="link">
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>
