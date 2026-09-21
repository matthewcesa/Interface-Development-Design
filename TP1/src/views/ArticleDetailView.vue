<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '../composables/useCart'
import { articles } from '../data/articles'

const route = useRoute()
const { addItem } = useCart()
const confirmation = ref('')
const article = articles.value.find((item) => item.id === Number(route.params.id)) || articles.value[0]

function addToCart() {
  addItem(article)
  confirmation.value = `${article.title} a été ajouté au panier.`
}
</script>

<template>
  <article>
    <p class="eyebrow">Article #{{ article.id }}</p>
    <h1>{{ article.title }}</h1>
    <p class="lead">An article selected to help you design clearer, more enjoyable experiences.</p>
    <p class="price">{{ article.price }}</p>
    <button type="button" @click="addToCart">Add to cart</button>
    <p v-if="confirmation" class="confirmation" role="status">{{ confirmation }}</p>
  </article>
</template>

<style scoped>
article { max-width: 680px; padding: 3rem 0; }
.eyebrow { color: #d3543f; font-weight: 700; text-transform: uppercase; }
.lead { color: #52606d; font-size: 1.2rem; line-height: 1.6; }
button { background: #17202a; border: 0; border-radius: 4px; color: white; cursor: pointer; font-weight: 700; margin-top: 1rem; padding: 0.85rem 1.2rem; }
.confirmation { color: #238636; font-weight: 700; margin-top: 1rem; }
</style>