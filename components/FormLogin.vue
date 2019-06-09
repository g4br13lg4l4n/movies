<template>
  <form v-on:submit.prevent="login">
    <div class="modal-card">
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
            type="email"
            v-model="form.email"
            placeholder="User"
            required
          />
        </b-field>
        <b-field label="Password" >
          <b-input
            type="password"
            v-model="form.password"
            placeholder="password"
            password-reveal
            required/>
        </b-field>
      </section>
      <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Cerrar</button>
          <button class="button is-info">Ingresar</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })
        this.$router.push('/dashboard')
      } catch (error) {
        this.$toastr('error', 'Su usuario o contraseña son incorrectos', 'Error')
      }
    }
  },
}
</script>
