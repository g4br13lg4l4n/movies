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
import axios from 'axios'
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
    }
    await axios.get('http://www.geoplugin.net/json.gp')
    .then(resp => {
      if(resp.status === 200){
        store.dispatch('register_view', { ip: resp.data.geoplugin_request, data: resp.data })
      }
    })
  }
}
</script>
