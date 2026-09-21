<script setup>
defineProps({ article: { type: Object, required: true } })
</script>

<template>
  <article class="article-card">
    <p>{{ article.category }}</p>
    <h2>{{ article.title }}</h2>
    <strong>{{ article.price }}</strong>
    <RouterLink :to="{ name: 'ArticleDetail', params: { id: article.id } }">Consulter</RouterLink>
  </article>
</template>

<style scoped>
.article-card { 
    border: 1px solid #d9e2ec; 
    border-radius: 6px; display: 
    flex; flex-direction: column; 
    gap: 0.6rem; 
    padding: 1.4rem; 
}
.article-card p { 
    color: #d3543f; 
    font-size: 0.85rem; 
    font-weight: 700; 
    margin: 0; 
    text-transform: uppercase; 
}
.article-card h2 { 
    margin: 0 0 1rem; 
}
.article-card a { 
    color: #d3543f; 
    font-weight: 700; 
    margin-top: auto; 
}
</style>