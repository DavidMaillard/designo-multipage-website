<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="header-logo">
        <img src="/assets/shared/desktop/logo-dark.png" alt="Designo">
      </router-link>
      <nav class="header-nav" :class="{'is-active': isMenuOpened}">
        <router-link to="/about" class="nav-link" @click.native="isMenuOpened = false">Our company</router-link>
        <router-link to="/locations" class="nav-link" @click.native="isMenuOpened = false">Locations</router-link>
        <router-link to="/contact" class="nav-link" @click.native="isMenuOpened = false">Contact</router-link>
      </nav>
      <div class="header-menu-trigger" @click="isMenuOpened = !isMenuOpened">
        <svg v-if="!isMenuOpened" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20"><path fill="#1D1C1E" d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></svg>
        <svg v-if="isMenuOpened" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.172 2.93.1.101 2.929 7.17 10l-7.07 7.071L2.929 19.9 10 12.829l7.071 7.07 2.829-2.828-7.071-7.07 7.07-7.072L17.072.101l-7.07 7.07Z" fill="#1D1C1E"/></svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
