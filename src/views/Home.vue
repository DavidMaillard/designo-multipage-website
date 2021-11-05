<template>
  <section class="home-page">
    <!-- Home Hero -->
    <section class="home-hero">
      <section class="home-hero-container">
        <h1 class="hero-heading">Award-winning custom designs and digital branding solutions</h1>
        <p class="hero-text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <router-link to="/about" class="hero-button">Learn more</router-link>
      </section>
    </section>
    <!-- Home Links -->
    <section class="home-links">
      <section class="home-links-container">
        <router-link to="/web-design" class="home-link">
          <p class="home-link-heading">WEB DESIGN</p>
          <p class="home-link-text">VIEW PROJECTS</p>
        </router-link>
        <div class="right-side">
          <router-link to="/app-design" class="home-link">
            <p class="home-link-heading">APP DESIGN</p>
            <p class="home-link-text">VIEW PROJECTS</p>
          </router-link>
          <router-link to="/graphic-design" class="home-link">
            <p class="home-link-heading">GRAPHIC DESIGN</p>
            <p class="home-link-text">VIEW PROJECTS</p>
          </router-link>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-page {

}
</style>
