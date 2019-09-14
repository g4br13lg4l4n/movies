<template>
  <section class="hero is-warning">
    <div class="hero-body is-paddingless">
      <div class="container">
        <a class="image is-40x120" @click='isCoffe = true' >
          <img src="../assets/buymeacoffe.png" alt="Buy me a coffe">
        </a>
      </div>
      <b-modal :active.sync="isCoffe" has-modal-card>
        <form-payment/>
      </b-modal>
    </div>
  </section>
</template>

<script>
  import FormPayment from './FormPayment'
  export default {
    components: {
      FormPayment
    },
    name: 'coffe',
    data() {
      return {
        isCoffe: false,
      }
    }
  }
</script>

<style>
  .hero-body {
    background: #020516;
  }
  .image.is-40x120 > img {
    height: 32px;
    width: 160px;
    margin: .3em auto;
    border: 1px solid;
    border-radius: 4px;
    background: white;
    padding: 2px;
  }

  .paypal-button {
    margin-top: 1em;
    margin-bottom: .5em;
    text-align: center;
  }
</style>

