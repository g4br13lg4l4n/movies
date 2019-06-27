<template>
  <div class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
    <article class="card">
      <nuxt-link :to="{ name: 'movie-slug', params: { slug, url, title, score, tags, poster, image }}">
        <div class="card-content">
          <div class="content poster"  :style="{ 'background-image': 'url(' + poster + ')' }">
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <div class="columns is-vertical-center">
              <div class="column is-three-quarters-mobile is-three-quarters-tablet is-four-fifths-fullhd">
                <h3>{{ title }}</h3>
                <p><span v-for="(item, index) in tags"
                    v-bind:item="item"
                    v-bind:index="index"
                    v-bind:key="item"> {{ item }} </span></p>
              </div>
              <div class="column is-one-fifth-mobile is-one-fifth-tablet is-one-fifth-fullhd">
                <span class="ranking">{{ score ? score : 0 }}</span>
              </div>
            </div>
          </div>
        </footer>
        <div class="card-hover">
          {{ sipnosis }}
        </div>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
import { base } from '../plugins/base'
export default {
  mixins: [ base ],
  props: {
    sipnosis:{
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    categories: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    poster: {
      type: String,
    },
    tags: {
      type: Array,
    },
    slug: {
      type: String,
      required: true
    },
    score: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
  .card-hover {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    font-family: Helvetica;
    font-size: 1.02em;
    letter-spacing: .1px;
    color: white;
    padding: 20px;
    opacity: 0;
  }
  .card .card-hover:hover {
    opacity: 1;
    -webkit-transition: opacity .35s ease-in-out;
    -moz-transition: opacity .35s ease-in-out;
    -ms-transition: opacity .35s ease-in-out;
    -o-transition: opacity .35s ease-in-out;
    transition: opacity .35s ease-in-out;
  }
  .card {
    border-radius: 8px;
    position: relative;
  }
  .card-footer-item {
    padding: 1em 1.4em;
    display: inline;
  }
  .card-footer-item h3 {
    font-weight: 400;
    font-size: 1.2em;
    color: #4D4D4D;
  }
  .card-footer-item p {
    font-weight: 500;
    font-size: .9em;
    color: #A6A6A6;
  }
  .card-content {
    padding: 0;
  }
  .content.poster {
    border-radius: 8px 8px 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    width: 100%;
  }
  .ranking {
    color: #FF0079;
    border: 2px solid #FF0079;
    border-radius: 6px;
    padding: .4em;
  }
  .is-vertical-center {
    display: flex;
    align-items: center;
  }

</style>
