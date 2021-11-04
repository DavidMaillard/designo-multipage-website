<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="header-logo">
        <img src="/assets/shared/desktop/logo-dark.png" alt="Designo">
      </router-link>
      <nav class="header-nav">
        <router-link to="/about" class="nav-link">Our company</router-link>
        <router-link to="/locations" class="nav-link">Locations</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>
