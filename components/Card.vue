<template>
  <div class="column">
    <article class="card">
      <nuxt-link :to="{ name: 'movie-slug', params: { slug: to }}">
        <div class="card-content">
          <div class="content poster"  :style="{ 'background-image': 'url(' + image + ')' }">
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <div class="columns is-vertical-center">
              <div class="column is-10">
                <h3>{{ title }}</h3>
                <p><span>{{ categories }}</span></p>
              </div>
              <div class="column is-2">
                <span class="ranking">{{ points }}</span>
              </div>
            </div>
          </div>
        </footer>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  props: {
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
    to: {
      type: String,
      required: true
    },
    points: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
  .card {
    border-radius: 8px;
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
