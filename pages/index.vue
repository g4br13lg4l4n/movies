<template>
  <div>
    <Banner/>
    <nav-tabs/>
  </div>
</template>

<script>
import Banner from '~/components/Banner'
import NavTabs from '~/components/NavTabs'
export default {
  name: 'HomePage',
  components: {
    Banner,
    NavTabs
  },
  async asyncData ({ $axios }) {
    const ip = await $axios.$get('api/v1/movies')
    console.log('IP', ip)
  }

}
</script>
