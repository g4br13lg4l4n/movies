<template>
  <div>
    <nav-bar-dash/>
    <section class="columns">
      <aside-dash class="column is-4"/>
      <div class="column is-10">
        <section class="section">
          <nuxt-child />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import AsideDash from '~/components/AsideDash'
import NavBarDash from '~/components/NavBarDash'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    AsideDash,
    NavBarDash
  }
}
</script>

