import { ref } from 'vue'

export const articles = ref([
  { id: 1, title: 'Macbook air m5', category: 'Ordinateur', price: '1024,90 €', description: 'Le meilleur ordinateur niveau qualité prix' },
  { id: 2, title: 'Samsung galaxy s9', category: 'Portable', price: '529,90 €', description: 'LE portable dernière génération' },
  { id: 3, title: 'Ipad ai m2', category: 'Tablette', price: '519,90 €', description: 'Votre enfant rentre en supérieur ? Voila pour vous' },
  { id: 4, title: 'Ordinateur asus', category: 'Ordinateur', price: '422,90 €', description: 'Un ordinateur peu cher' },
  { id: 5, title: 'Gaalxy watch t4', category: 'Montre', price: '231,90 €', description: 'Tout pour le sport' },
])

export function addArticle(article) {
  articles.value.push({ ...article, id: Date.now() })
}

export function removeArticle(articleId) {
  articles.value = articles.value.filter((article) => article.id !== articleId)
}