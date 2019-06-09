<template>
  <b-tabs position="is-left" class="tabs-nav" v-model="activeTab">
    <b-tab-item label="Home">
      <div v-if="movies.length" class="columns is-mobile is-multiline">
        <card
          v-for="(item, index) in movies"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="item.id"
          :title="item.title"
          :sipnosis="item.sipnosis"
          :categories="item.category"
          :image="item.image"
          :slug="item.slug"
          :url="item.url"
          :tags="item.tags"
          :score="item.score"
          :poster="item.poster">
        </card>
      </div>
      <h1 v-else class="has-text-centered is-size-4">Oh no 😢. No encontramos contenido </h1>
    </b-tab-item>
    <b-tab-item label="Peliculas">
      <div v-if="movies.length" class="columns is-mobile is-multiline">
        <card
          v-for="(item, index) in movies"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="item.id"
          :title="item.title"
          :sipnosis="item.sipnosis"
          :categories="item.category"
          :image="item.image"
          :poster="item.poster"
          :slug="item.slug"
          :url="item.url"
          :score="item.score">
        </card>
      </div>
      <h1 v-else class="has-text-centered is-size-4">Oh no 😢. No encontramos contenido </h1>
    </b-tab-item>
<!--
    <b-tab-item label="Series">
      <div v-if="movies.length" class="columns is-mobile is-multiline">
        <card
          v-for="(item, index) in movies"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="item.id"
          :title="item.title"
          :categories="item.category"
          :image="item.image"
          :poster="item.poster"
          :slug="item.slug"
          :url="item.url"
          :score="item.score">
        </card>
      </div>
      <h1 v-else class="has-text-centered is-size-4">Oh no 😢. No encontramos contenido </h1>
    </b-tab-item>
  -->
  </b-tabs>
</template>

<script>
import Card from '~/components/Card'
  export default {
    props: ['movies'],
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

