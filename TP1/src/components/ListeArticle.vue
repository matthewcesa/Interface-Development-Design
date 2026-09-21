<script setup>

import { computed } from 'vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
  articles: { type: Array, required: true },
  currentPage: { type: Number, default: 1 },
  pageSize: { type: Number, default: 2 },
})

const emit = defineEmits(['page-change'])
const totalPages = computed(() => Math.max(1, Math.ceil(props.articles.length / props.pageSize)))
const visibleArticles = computed(() => props.articles.slice((props.currentPage - 1) * props.pageSize, props.currentPage * props.pageSize))

</script>

<template>
  <p v-if="!articles.length">No article found.</p>

  <div v-else class="article-grid">
    <ArticleItem v-for="article in visibleArticles" :key="article.id" :article="article" />
  </div>

  <div v-if="totalPages > 1" class="pagination">
    <button type="button" :disabled="currentPage === 1" @click="emit('page-change', currentPage - 1)">Previous</button>
    <span>Page {{ currentPage }} / {{ totalPages }}</span>
    <button type="button" :disabled="currentPage === totalPages" @click="emit('page-change', currentPage + 1)">Next</button>
  </div>
</template>

<style scoped>
.article-grid { 
    display: grid; gap: 1rem; 
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 

}
.pagination { 
    align-items: center; 
    display: flex; 
    gap: 1rem; 
    justify-content:
     center; margin-top: 2rem; 
}
button { 
    background: #17202a; 
    border: 0; 
    border-radius: 4px; 
    color: white; 
    cursor: pointer; 
    padding: 0.6rem 0.8rem; 
}
button:disabled { cursor: not-allowed; opacity: 0.45; }

</style>