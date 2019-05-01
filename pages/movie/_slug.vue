<template>
  <div>
    <no-ssr>
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
  export default {
    data() {
      return {
        playerOptions: {
          width: '1200px',
          height: '700px',
          // videojs options
          muted: false,
          language: 'es',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://pgli8k.oloadcdn.net/dl/l/AGYlo-TtYQ13aFfp/Ds2WfjAMT2g/How.to.train.your.dragon.the.hidden.world.2019.1080p-dual-lat-cinecalidad.is.mp4"
          }],
          poster: "https://picsum.photos/600/800?random=1",
        }
      }
    },
    mounted() {
      this.playerOptions.width = window.innerWidth
      this.playerOptions.height = window.innerHeight
      //console.log('this is current player instance object', this.myVideoPlayer)
    },
    async asyncData ({ params }) {
      console.log(params.slug)
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
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
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example 01: the player is readied', player)
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
</style>
