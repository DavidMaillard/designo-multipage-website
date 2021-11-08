<template>
  <section class="product-page">
    <!-- Product Header -->
    <div class="product-header">
      <div class="product-header-container">
        <div class="product-header-wrapper">
          <h1 class="header-heading">Web Design</h1>
          <p class="header-text">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        </div>
      </div>
    </div>
    <!-- Products List -->
    <div class="products-list">
      <div class="products-list-container">
        <a v-for="(product, index) in products" :key="index" href="#" class="product-item">
          <img :src="`/assets/${$route.name}/desktop/${product.image}.jpg`" :alt="product.title" class="product-image">
          <div class="product-info">
            <p class="product-title">{{ product.title }}</p>
            <p class="product-text">{{ product.text }}</p>
          </div>
        </a>
      </div>
    </div>
    <!-- Product Navigation -->
    <div class="product-navigation">
      <div class="product-navigation-container">
        <router-link v-for="(link, index) in navigation" :key="index" :to="`/${link.class}`" class="product-link" :class="link.class">
          <p class="home-link-heading">{{ link.title }}</p>
          <p class="home-link-text">VIEW PROJECTS</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          title: 'EXPRESS',
          text: 'A multi-carrier shipping website for ecommerce businesses',
          image: 'image-express'
        },
        {
          title: 'TRANSFER',
          text: 'Site for low-cost money transfers and sending money within seconds',
          image: 'image-transfer'
        },
        {
          title: 'PHOTON',
          text: 'A state-of-the-art music player with high-resolution audio and DSP effects',
          image: 'image-photon'
        },
        {
          title: 'BUILDER',
          text: 'Connects users with local contractors based on their location',
          image: 'image-builder'
        },
        {
          title: 'BLOGR',
          text: 'Blogr is a platform for creating an online blog or publication',
          image: 'image-blogr'
        },
        {
          title: 'CAMP',
          text: 'Get expert training in coding, data, design, and digital marketing',
          image: 'image-camp'
        }
      ],
      navigation: [
        {
          title: 'APP DESIGN',
          class: 'app-design'
        },
        {
          title: 'GRAPHIC DESIGN',
          class: 'graphic-design'
        }
      ]
    }
  }
}
</script>
