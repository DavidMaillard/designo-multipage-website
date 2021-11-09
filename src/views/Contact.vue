<template>
  <section class="contact-page">
    <!-- Contact Form -->
    <div class="contact-form-wrapper">
      <div class="contact-form-container">
        <div class="contact-content">
          <h1 class="contact-title">Contact Us</h1>
          <p class="contact-text">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        </div>
        <form action="#" class="contact-form">
          <div class="input-group" :class="{'has-error': getError('name')}">
            <input v-model="name" type="text" class="form-input" placeholder="Name">
            <p v-if="getError('name')" class="form-error">{{ getError('name').message }}</p>
          </div>
          <div class="input-group" :class="{'has-error': getError('email')}">
            <input v-model="email" type="email" class="form-input" placeholder="Email Address">
            <p v-if="getError('email')" class="form-error">{{ getError('email').message }}</p>
          </div>
          <div class="input-group" :class="{'has-error': getError('phone')}">
            <input v-model="phone" type="tel" class="form-input" placeholder="Phone">
            <p v-if="getError('phone')" class="form-error">{{ getError('phone').message }}</p>
          </div>
          <div class="input-group" :class="{'has-error': getError('message')}">
            <textarea v-model="message" class="form-textarea" placeholder="Your Message"></textarea>
            <p v-if="getError('message')" class="form-error">{{ getError('message').message }}</p>
          </div>
          <button type="submit" class="form-submit" @click.prevent="validateForm">Submit</button>
        </form>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      errors: []
    }
  },
  methods: {
    getError(name) {
      return this.errors.find(el => el.type === name)
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    validateForm() {
      this.errors = []

      if (!this.name.length) {
        this.errors.push({
          type: 'name',
          message: 'Can’t be empty'
        })
      }

      if (!this.phone.length) {
        this.errors.push({
          type: 'phone',
          message: 'Can’t be empty'
        })
      }

      if (!this.email.length) {
        this.errors.push({
          type: 'email',
          message: 'Can’t be empty'
        })
      }

      if (!this.validateEmail(this.email)) {
        this.errors.push({
          type: 'email',
          message: 'Please use a valid email address'
        })
      }

      if (!this.message.length) {
        this.errors.push({
          type: 'message',
          message: 'Can’t be empty'
        })
      }
    }
  }
}
</script>
