<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { addArticle } from '../data/articles'

const router = useRouter()
const confirmation = ref('')
const form = reactive({ title: '', category: 'Design', price: '', description: '' })

function submitArticle() {
  addArticle({ ...form })
  confirmation.value = 'Article ajouté avec succès.'
  form.title = ''
  form.price = ''
  form.description = ''
  setTimeout(() => router.push('/articles'), 700)
}
</script>

<template>
  <form class="form" @submit.prevent="submitArticle">
    <p class="eyebrow">Administration</p>
    <h1>Add an article</h1>
    <p v-if="confirmation" class="confirmation">{{ confirmation }}</p>
    <label>Title <input v-model="form.title" required type="text" placeholder="Titre de l’article" /></label>
    <label>Category <select v-model="form.category"><option>Computer</option><option>Phone</option><option>Tablet</option><option>Watch</option></select></label>
    <label>Price <input v-model="form.price" required type="text" placeholder="24,90 €" /></label>
    <label>Description <textarea v-model="form.description" required rows="5" placeholder="Présentez l’article" /></label>
    <button type="submit">Register</button>
  </form>
</template>

<style scoped>
.form { 
    display: grid; 
    gap: 1rem; 
    max-width: 600px; 
}
.eyebrow { 
    color: #d3543f; 
    font-weight: 700; 
    text-transform: uppercase; 
}
label { 
    display: grid; 
    gap: 0.4rem; 
    font-weight: 700; 
}
input, textarea { 
    border: 1px solid #bcccdc; 
    border-radius: 4px; 
    font: inherit; 
    padding: 0.75rem; 
}
select { 
    border: 1px solid #bcccdc; 
    border-radius: 4px; 
    font: inherit; 
    padding: 0.75rem; 
}
.confirmation { 
    color: #238636; 
    font-weight: 700; 
}
button { 
    background: #d3543f; 
    border: 0; 
    border-radius: 4px; 
    color: white; 
    cursor: pointer; 
    font-weight: 700; 
    padding: 0.85rem; 
}
</style>