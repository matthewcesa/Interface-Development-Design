<template>
  <section class="hero">
    <p class="eyebrow">La bibliothèque de votre équipe</p>
    <h1>Découvrez des articles qui font avancer vos idées.</h1>
    <p>Parcourez notre sélection, consultez les détails et ajoutez vos favoris au panier.</p>
    <RouterLink class="button" to="/articles">Voir les articles</RouterLink>
  </section>
</template>

<style scoped>
.hero { max-width: 700px; padding: 5rem 0; }
.eyebrow { color: #d3543f; font-weight: 700; text-transform: uppercase; }
h1 { font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1; margin: 1rem 0; }
.hero p:not(.eyebrow) { color: #52606d; font-size: 1.2rem; line-height: 1.6; }
.button { background: #d3543f; border-radius: 4px; color: white; display: inline-block; font-weight: 700; margin-top: 1.5rem; padding: 0.85rem 1.2rem; }
</style>