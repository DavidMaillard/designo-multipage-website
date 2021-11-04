<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />

    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    >
    </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr.vue'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal.vue'

export default {
  components: { NewContentAvailableToastr, AppleAddToHomeScreenModal, Header, Footer },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: {
    ...mapActions('app', [
      'closeAddToHomeScreenModalForApple',
      'serviceWorkerSkipWaiting'
    ])
  }
}
</script>

<style lang="scss">
@import '@/theme/app.scss';
body {
  margin: 0;

  * {
    box-sizing: border-box;
  }

  #app {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
