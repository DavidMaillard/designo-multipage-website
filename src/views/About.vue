<template>
  <section class="about-page">
    <!-- About us -->
    <div class="about-us">
      <div class="about-us-container">
        <div class="about-us-wrapper">
          <div class="about-us-content">
            <h1 class="content-title">About Us</h1>
            <p class="content-text">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </div>
          <div class="about-us-image"></div>
        </div>
      </div>
    </div>
    <!-- World-class Talent -->
    <div class="talent">
      <div class="talent-container">
        <div class="talent-wrapper">
          <div class="talent-image"></div>
          <div class="talent-content">
            <h2 class="content-title">World-class talent</h2>
            <p class="content-text">
              We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
              <br><br>
              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
    </div>
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
    <!-- The Real Deal -->
    <div class="deal">
      <div class="deal-container">
        <div class="deal-wrapper">
          <div class="deal-content">
            <h2 class="content-title">The real deal</h2>
            <p class="content-text">
              As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
              <br><br>
              We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
            </p>
          </div>
          <div class="deal-image"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
