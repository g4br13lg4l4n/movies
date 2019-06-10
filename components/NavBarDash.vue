<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/"> Home </nuxt-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" @click="exit">
              Salir
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    exit() {
      this.$auth.logout()
    },
  },
  fetch ({ store, redirect }) {
    if (!store.state.authUser) {
      return redirect('/')
    }
  }
}
</script>
<style scoped>
  .navbar {
    background: white !important; 
  }
</style>

