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

