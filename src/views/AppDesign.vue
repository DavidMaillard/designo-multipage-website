<template>
  <section class="product-page">
    <!-- Product Header -->
    <div class="product-header">
      <div class="product-header-container">
        <div class="product-header-wrapper">
          <h1 class="header-heading">App Design</h1>
          <p class="header-text">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
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
          title: 'AIRFILTER',
          text: 'Solving the problem of poor indoor air quality by filtering the air',
          image: 'image-airfilter'
        },
        {
          title: 'EYECAM',
          text: 'Product that lets you edit your favorite photos and videos at any time',
          image: 'image-eyecam'
        },
        {
          title: 'FACEIT',
          text: 'Get to meet your favorite internet superstar with the faceit app',
          image: 'image-faceit'
        },
        {
          title: 'TODO',
          text: 'A todo app that features cloud sync with light and dark mode',
          image: 'image-todo'
        },
        {
          title: 'LOOPSTUDIOS',
          text: 'A VR experience app made for Loopstudios',
          image: 'image-loopstudios'
        }
      ],
      navigation: [
        {
          title: 'WEB DESIGN',
          class: 'web-design'
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
