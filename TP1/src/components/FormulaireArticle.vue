<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'


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
    <h1>Ajouter un article</h1>
    <p v-if="confirmation" class="confirmation">{{ confirmation }}</p>
    <label>Titre <input v-model="form.title" required type="text" placeholder="Titre de l’article" /></label>
    <label>Catégorie <select v-model="form.category"><option>Design</option><option>Développement</option><option>Produit</option></select></label>
    <label>Prix <input v-model="form.price" required type="text" placeholder="24,90 €" /></label>
    <label>Description <textarea v-model="form.description" required rows="5" placeholder="Présentez l’article" /></label>
    <button type="submit">Enregistrer</button>
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