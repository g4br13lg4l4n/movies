<template>
  <section class="hero banner" :style="{'background-image': 'url('+'http://localhost:3001'+ movie.image +')'}">
    <nav-bar/>
    <div class="container-fluid">
      <h1 class="title">{{ movie.title }}</h1>
      <div class="list-categories">
        <p v-for="item in movie.tags" v-bind:key="item.id" > {{ item }} </p>
      </div>
      <div class="section">
        <nuxt-link class="btn see-movie" :to="{ name: 'movie-slug', params}">
          Ver película
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'banner',
  props: ['movies'],
  computed: {
    data() {
      return {
        params: {}
      }
    },
    movie: function () {
      let last = Object.keys(this.$props.movies).length - 1
      return this.params = {...this.$props.movies[last]}
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .banner {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 30em;
    width: 100%;
    -webkit-box-shadow: inset 0px -90px 60px 0px rgba(0,0,0,0.9);
    -moz-box-shadow: inset 0px -90px 60px 0px rgba(0,0,0,0.9);
    box-shadow: inset 0px -90px 60px 0px rgba(0,0,0,0.9);
  }
  .title {
    color: white;
    text-transform: uppercase;
  }
  .container-fluid {
    padding: 0 5% 2em;
  }
  .list-categories {
    display: flex;
  }
  .list-categories p {
    text-transform: uppercase;
    margin: 0 .8em;
    color: white;
    font-weight: 500;
  }
  .title {
    font-size: 3em;
    font-weight: 400;
  }
  .btn.see-movie {
    background-color: #FF0079;
    border: none;
    color: white;
    font-size: 1em;
    font-weight: 600;
    padding: .8em 1.8em;
  }
  .btn.info {
    background-color: transparent;
    border: 2px solid white;
    font-size: 1em;
    font-weight: 600;
    padding: .7em 1.7em;
    color: white;
  }
  .section {
    padding: 2rem 1.5rem;
  }
  h1 {
    text-shadow: 3px 2px 3px rgb(72, 72, 72);
  }
</style>


