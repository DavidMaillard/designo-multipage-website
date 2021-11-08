<template>
  <section class="contact-page">
    <!-- Contact Form -->
    <!-- Locations -->
    <div class="locations">
      <div class="locations-container">
        <article class="location-item">
          <div class="location-illustration-container">
            <img src="/assets/shared/desktop/illustration-canada.svg" alt="Canada" class="location-illustration">
          </div>
          <p class="location-title">Canada</p>
          <router-link to="/locations" class="location-link">See location</router-link>
        </article>
        <article class="location-item">
          <div class="location-illustration-container">
            <img src="/assets/shared/desktop/illustration-australia.svg" alt="Australia" class="location-illustration">
          </div>
          <p class="location-title">Australia</p>
          <router-link to="/locations" class="location-link">See location</router-link>
        </article>
        <article class="location-item">
          <div class="location-illustration-container">
            <img src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="United Kingdom" class="location-illustration">
          </div>
          <p class="location-title">United Kingdom</p>
          <router-link to="/locations" class="location-link">See location</router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
