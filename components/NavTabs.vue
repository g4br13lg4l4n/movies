<template>
  <b-tabs position="is-left" class="tabs-nav" v-model="activeTab">
    <b-tab-item label="Home">
      <div class="columns is-mobile is-multiline">
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-1"
          points="8.1">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-2"
          points="9.7">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-3"
          points="8.5">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-4"
          points="7.1">
        </card>
      </div>
    </b-tab-item>

    <b-tab-item label="Peliculas ">
      <div class="columns is-mobile is-multiline">
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-1"
          points="8.1">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-2"
          points="9.7">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-3"
          points="8.5">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-4"
          points="7.1">
        </card>
      </div>

    </b-tab-item>
    <b-tab-item label="Series">
      <div class="columns is-mobile is-multiline">
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-1"
          points="8.1">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-2"
          points="9.7">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-3"
          points="8.5">
        </card>
        <card
          title="Fantastic beasts and where find"
          categories="Adventure, Fantasy, Action"
          image="https://picsum.photos/600/800?random=1"
          to="mi-movie-4"
          points="7.1">
        </card>
      </div>

    </b-tab-item>
  </b-tabs>
</template>

<script>
import Card from '~/components/Card'
  export default {
    components: {
      Card,
    },
    data() {
      return {
        activeTab: 0,
        showBooks: false
      }
    }
  }
</script>

<style>
  .tabs a {
    color: white;
    font-size: 1em;
    font-weight: 600;
  }
  .tabs li.is-active a {
    color: #ff5d5d;
    border-bottom: 2px solid #ec3f78;
  }
  .b-tabs {
    margin-top: 2em;
    margin-bottom: 0 !important;
  }
  .tabs-nav {
    padding: 0 5%;
  }
</style>

