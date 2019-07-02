<template>
  <div>
    <Banner :movies="movies"/>
    <no-ssr>
      <InArticleAdsense
          data-ad-client="ca-pub-3493082329174049"
          data-ad-slot="1234567890">
      </InArticleAdsense>
    </no-ssr>
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
