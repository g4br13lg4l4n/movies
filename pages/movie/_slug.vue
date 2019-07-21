<template>
  <div>
    <no-ssr>
      <nuxt-link class="back" to="/" v-if="!play"><img src="../../assets/back.png" alt="Regresar"></nuxt-link>
      <video-player  class="video-player-box vjs-hd"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied">
      </video-player>
    </no-ssr>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        play: false,
        title: 'Movie ...'
      }
    },
    computed: {
    ...mapGetters(['playerOptions', 'movieSelected'])
    },
    async asyncData ({ params, store }) {
      await store.dispatch('get_movie', params)
      let movie  = await store.getters['movieSelected']

      let url = params.url ? params.url : movie[0].url
      let image = params.image ? params.image : movie[0].image

      let options = {
          muted: false,
          language: 'es',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: '//' + url
          }],
          poster: image,
      }
      await store.commit('set_playerOptions', options)
      await store.dispatch('register_view_movie', { _id: movie[0]._id})
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        this.play = true
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        this.play = false
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {

      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // console.log('example 01: the player is readied', player)
      }
    },
    head () {
      return {
        title: this.movieSelected[0].title ? this.movieSelected[0].title : this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.movieSelected[0].sipnosis }
        ]
      }
    }
  }
</script>

<style>
  .video-player-box, .vjs-big-play-button {
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .video-player-box > div {
    width: 100vw;
    height: 100vh;
  }
  .back {
    cursor: pointer;
  }
  .back img{
    max-width: 100%;
    position: absolute;
    z-index: 1;
    width: 3em;
    height: auto;
    top: 3em;
    left: 3em;
  }
</style>
