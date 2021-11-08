<template>
  <section class="product-page">
    <!-- Product Header -->
    <div class="product-header">
      <div class="product-header-container">
        <div class="product-header-wrapper">
          <h1 class="header-heading">Graphic Design</h1>
          <p class="header-text">We deliver eye-catching branding materials that are tailored to meet your business objectives.
          </p>
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
          title: 'TIM BROWN',
          text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
          image: 'image-change'
        },
        {
          title: 'BOXED WATER',
          text: 'A simple packaging concept made for Boxed Water',
          image: 'image-boxed-water'
        },
        {
          title: 'SCIENCE!',
          text: 'A poster made in collaboration with the Federal Art Project',
          image: 'image-science'
        }
      ],
      navigation: [
        {
          title: 'APP DESIGN',
          class: 'app-design'
        },
        {
          title: 'WEB DESIGN',
          class: 'web-design'
        }
      ]
    }
  }
}
</script>
