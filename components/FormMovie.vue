<template>
  <form action="">
    <div class="modal-card">
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
            type="email"
            :value="user"
            placeholder="User"
            required
          />
          <b-input
            type="password"
            :value="password"
            placeholder="password"
            required/>
        </b-field>
      </section>
      <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Cerrar</button>
          <button class="button is-info">Guardar</button>
      </footer>
    </div>
  </form>
</template>
