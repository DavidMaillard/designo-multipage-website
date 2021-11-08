<template>
  <section class="home-page">
    <!-- Home Hero -->
    <section class="home-hero-wrapper">
      <div class="home-hero">
        <div class="home-hero-container">
          <h1 class="hero-heading">Award-winning custom designs and digital branding solutions</h1>
          <p class="hero-text">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <router-link to="/about" class="hero-button">Learn more</router-link>
        </div>
      </div>
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
    <!-- Home Arguments -->
    <section class="home-arguments">
      <div class="home-arguments-container">
        <article class="home-argument">
          <div class="argument-image-container">
            <img src="/assets/home/desktop/illustration-passionate.svg" alt="Passionate" class="argument-image">
          </div>
          <div class="argument-info">
            <p class="argument-title">PASSIONATE</p>
            <p class="argument-text">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          </div>
        </article>
        <article class="home-argument">
          <div class="argument-image-container">
            <img src="/assets/home/desktop/illustration-resourceful.svg" alt="Passionate" class="argument-image">
          </div>
          <div class="argument-info">
            <p class="argument-title">RESOURCEFUL</p>
            <p class="argument-text">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
          </div>
        </article>
        <article class="home-argument">
          <div class="argument-image-container">
            <img src="/assets/home/desktop/illustration-friendly.svg" alt="Passionate" class="argument-image">
          </div>
          <div class="argument-info">
            <p class="argument-title">FRIENDLY</p>
            <p class="argument-text"> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
          </div>
        </article>
      </div>
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
