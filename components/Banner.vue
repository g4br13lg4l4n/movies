<template>
  <section class="hero banner" style="background-image:url(https://picsum.photos/600/800?random=1)">
    <nav-bar/>
    <div class="container-fluid">
      <h1 class="title">Wrath of the titans</h1>
      <div class="list-categories">
        <p>Fantasy</p>
        <p>Animation</p>
        <p>Family</p>
        <p>Duration: 1h 52m</p>
      </div>
      <div class="section">
        <a class="btn see-movie">Ver película</a>
        <a class="btn info">Ver Información</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'banner'
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
</style>

<script>
import NavBar from './NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
  h1 {
    text-shadow: 3px 2px 3px rgb(72, 72, 72);
  }
</style>


