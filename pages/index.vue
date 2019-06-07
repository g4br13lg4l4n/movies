<template>
  <div>
    <Banner/>
    <nav-tabs :movies="movies"/>
  </div>
</template>

<script>
import Banner from '~/components/Banner'
import NavTabs from '~/components/NavTabs'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  name: 'HomePage',
  components: {
    Banner,
    NavTabs
  },
  computed: {
    ...mapGetters(['movies'])
  },
  async asyncData ({ store }) {
    if(store.getters['movies'].length === 0){
      await store.dispatch('get_movies')
    }
  }
}
</script>
