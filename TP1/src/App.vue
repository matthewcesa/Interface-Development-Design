<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCart } from './composables/useCart'

const { count } = useCart()
</script>

<template>
  <header class="app-header">
    <RouterLink class="brand" to="/">Fnac</RouterLink>
    <nav aria-label="Navigation principale">
      <RouterLink to="/articles">Articles</RouterLink>
      <RouterLink to="/panier">Cart ({{ count }})</RouterLink>
      <RouterLink to="/admin">Administratiozxn</RouterLink>
    </nav>
  </header>

  <main class="page-container">
    <RouterView />
  </main>
</template>

<style scoped>
.app-header {
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.brand {
  color: #17202a;
  font-size: 1.3rem;
  font-weight: 800;
  padding: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: #52606d;
  padding: 0.4rem 0.6rem;
}

nav a.router-link-active {
  color: #d3543f;
  font-weight: 700;
}

.page-container {
  padding: 2rem;
}

</style>