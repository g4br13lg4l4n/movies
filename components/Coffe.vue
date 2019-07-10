<template>
  <section class="hero is-warning">
    <div class="hero-body is-paddingless">
      <div class="container">
        <a class="image is-40x120" @click='isCoffe = !isCoffe' >
          <img src="../assets/buymeacoffe.png" alt="Buy me a coffe">
        </a>
          <no-ssr v-if="isCoffe">
            <paypal-checkout
            env="production"
            amount="20"
            currency="MXN"
            locale="en_US"
            :client="paypal">
            </paypal-checkout>
          </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'coffe',
    data() {
      return {
        isCoffe: false,
        paypal: {
          sandbox: 'Af7KywbFngNk4YhiidXuBMIi4MYstVYBHIvjif9T27KhaDwJD3_AC99HH-n3LByUuUfdTIS-zw-_A9r_',
          production: 'AY-VP1HfPrYPTtHXwZUUvk7lUX-XQawPnod15mxDJere1wdSa_oZibeezQdS1rtt72E2ZtQR_n0OeQhF'
        }
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

