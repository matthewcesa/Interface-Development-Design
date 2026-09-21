<script setup>

import { computed, ref } from 'vue'
import BarreRecherche from '../components/barreRecherche.vue'
import ListeArticles from '../components/ListeArticle.vue'
import { articles } from '../data/articles'

const search = ref('')

const category = ref('Toutes')

const currentPage = ref(1)

const pageSize = 2

const categories = computed(() => ['Toutes', ...new Set(articles.value.map((article) => article.category))])

const filteredArticles = computed(() => articles.value.filter((article) => {
    
  const query = search.value.trim().toLowerCase()
  const matchesSearch = !query || `${article.title} ${article.category}`.toLowerCase().includes(query)
  return matchesSearch && (category.value === 'Toutes' || article.category === category.value)

}))

function updateSearch(value) {
  search.value = value
  currentPage.value = 1
}

function updateCategory(value) {
  category.value = value
  currentPage.value = 1
}

</script>

<template>
  <section>
    <p class="eyebrow">Catalogue</p>

    <h1>Les articles</h1>

    <div class="filters">
      <BarreRecherche :model-value="search" @update:model-value="updateSearch" />
      <label>Catégorie
        <select :value="category" @change="updateCategory($event.target.value)">
          <option v-for="item in categories" :key="item">{{ item }}</option>
        </select>
      </label>
    </div>

    <ListeArticles :articles="filteredArticles" :current-page="currentPage" :page-size="pageSize" @page-change="currentPage = $event" />
  </section>
</template>

<style scoped>

.eyebrow { 
    color: #d3543f; 
    font-weight: 700; 
    text-transform: uppercase; 
}
.filters { 
    align-items: end; 
    display: flex; 
    flex-wrap: wrap; 
    gap: 1rem; 
    margin: 1.5rem 0; 
}
label { 
    display: grid; 
    gap: 0.35rem; 
}
select { 
    border: 1px solid #bcccdc; 
    border-radius: 4px; 
    font: inherit; 
    padding: 0.7rem; 
}
</style>