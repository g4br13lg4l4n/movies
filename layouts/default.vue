<template>
  <div class="home">
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Login',
          to: { name: 'login' }
        }
      ]
    }
  }
}
</script>

<style>
  html, body {
    background-color: #020516;
  }
</style>

