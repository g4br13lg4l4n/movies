<template>
  <div>
    <Coffe/>
    <Banner :movies="movies"/>
    <nav-tabs :movies="movies"/>
    <Coffe/>
  </div>
</template>

<script>
import Coffe from '~/components/Coffe'
import Banner from '~/components/Banner'
import NavTabs from '~/components/NavTabs'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  name: 'HomePage',
  components: {
    Banner,
    NavTabs,
    Coffe
  },
  computed: {
    ...mapGetters(['movies'])
  },
  async asyncData ({ req, store }) {
    if(store.getters['movies'].length === 0){
      await store.dispatch('get_movies')
      const ip = req.connection.remoteAddress || req.socket.remoteAddress
      await store.dispatch('register_view', {ip: ip})
    }
  }
}
</script>
