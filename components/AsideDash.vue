<template>
  <aside class="sidebar">
    <div class="sidebar-menu">
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li>
          <router-link :to="{ name: 'dashboard-statistics', params: { userId: 123 }}">Estadisticas</router-link>
        </li>
        <li>
          <NuxtLink :to="'/dashboard/movies'">Peliculas</NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 16rem;
    padding: 3rem 1rem;
    background: #f5f5f5;
  }
</style>

