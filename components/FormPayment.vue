<template>
  <form id="form" v-on:submit.prevent="pay">
    
    <div class="modal-card">
      <section class="modal-card-body">
        
        <div class="card-content">
          <div slot="trigger" class="card-header">
            <p class="card-header-title">Hacer una donación</p>
          </div>
          <br/>
          <div class="content">                  
            <div class="columns is-3-desktop is-8-widescreen is-2-fullhd">
              <div class="column">
                  <b-input 
                  value="Gabriel Galan" 
                  required
                  v-model="form.name"
                  placeholder="Nombre completo del usuario de la tarjeta"
                  icon-pack="fas"
                  data-conekta="card[name]"
                  icon="user"/>
              </div>
            </div>
            <div class="columns is-3-desktop is-8-widescreen is-2-fullhd">

              <div class="column">
                  <b-input 
                  value="dragonite_98@hotmail.com" 
                  required
                  v-model="form.email"
                  placeholder="Correo"/>
              </div>
              <div class="column">
                  <b-input 
                  value="9933067732" 
                  required
                  v-model="form.phone"
                  placeholder="Teléfono"/>
              </div>


            </div>         
            <div class="columns is-3-desktop is-8-widescreen is-2-fullhd">
              <div class="column">
                <b-input  
                  required
                  value="4242424242424242"
                  placeholder="Num. Tarjeta"
                  icon-pack="fas"
                  icon="credit-card"
                  data-conekta="card[number]"/>
              </div>
              <div class="column">
                <div class="columns is-3-desktop is-8-widescreen is-2-fullhd">

                  <div class="column">
                    <b-input 
                      required
                      value="12"
                      placeholder="MM"
                      data-conekta="card[exp_month]"/>
                  </div>  
                  <div class="column">
                    <b-input 
                      required
                      value="2020"
                      placeholder="YY"
                      data-conekta="card[exp_year]"/>
                  </div>
                  <div class="column">
                    <b-input 
                      required
                      value="123"
                      placeholder="CVC"
                      data-conekta="card[cvc]"/>
                  </div>      
                </div>
                <input type="hidden" name="conektaTokenId" id="conektaTokenId">
              </div>    
            </div>
             <div class="columns">
               <div class="column is-6">
                <p class="subtitle is-6 has-text-danger">*Ningún dato de su tarjeta será guardado o genera un cobro adicional, <br/> si deseas seguir apoyando el proyecto puedes hacerlo y ayudarás a pagar servicios de la plataforma digitalfilms.us</p>
              </div>
              <div class="column is-6">
                <b-input 
                  required
                  v-model="form.monto"
                  type="number"
                  min="20"
                  placeholder="Monto a donar $ MXN"
                  icon-pack="fas"
                  />
                  <br/>
                <button class="button is-info is-fullwidth is-pulled-right">Donar</button>
              </div>
            </div>   
          </div>
        </div>
      </section>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'Gabriel Galan',
        monto: '',
        email: 'gabriel.galan92@gmail.com',
        phone: '9933067732'
      }
    }
  },
  mounted() {
    Conekta.setLanguage("es")
    Conekta.setPublicKey("key_MEMyaCShsg3U1UsLoypXmZw")
  },
  methods: {
    async pay() {
      let form = document.getElementById('form')
      await Conekta.Token.create(form, this.successResponseHandler, this.errorResponseHandler)
    },
    async successResponseHandler(token) {
      this.form.card_token = token.id
      await this.$store.dispatch('pay', this.form)
    },
    errorResponseHandler (error) {
      console.log('error', error)
    }
  },
}
</script>
