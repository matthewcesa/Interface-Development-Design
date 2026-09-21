<script setup>
import { articles, removeArticle } from '../data/articles'

function deleteArticle(article) {
  if (window.confirm(`Supprimer « ${article.title} » ?`)) {
    removeArticle(article.id)
  }
}
</script>

<template>
  <section>
    <p class="eyebrow">Private space</p>
    <h1>Administration</h1>
    <p>Manages the list of articles here.</p>
    <RouterLink class="button" to="/ajouter">Add an article</RouterLink>
    <ul class="admin-list">
      <li v-for="article in articles" :key="article.id">
        <span>{{ article.title }}</span>
        <button type="button" @click="deleteArticle(article)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.eyebrow { 
    color: #d3543f; 
    font-weight: 700; 
    text-transform: uppercase; 

}
.button { 
    background: #d3543f; 
    border-radius: 4px; 
    color: white; 
    display: inline-block; 
    font-weight: 700; 
    margin-top: 1rem; 
    padding: 0.85rem 1.2rem; 
}
.admin-list { 
    list-style: none; 
    margin: 2rem 0 0; 
    max-width: 650px; 
    padding: 0; 
}

.admin-list li { 
    align-items: center; 
    border-bottom: 1px solid #d9e2ec; 
    display: flex; 
    justify-content: space-between; 
    padding: 0.9rem 0; 

}
button { 
    background: #17202a; 
    border: 0; 
    border-radius: 4px; 
    color: white; 
    cursor: pointer; 
    padding: 0.55rem 0.8rem; 
}
</style>