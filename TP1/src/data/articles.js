import { ref } from 'vue'

export const articles = ref([
  { id: 1, title: 'Macbook air m5', category: 'Computer', price: '1024,90 €', description: 'All-day battery life, portability, web development, and long-term durability.' },
  { id: 2, title: 'Samsung galaxy s9', category: 'Phone', price: '529,90 €', description: 'The phone to get' },
  { id: 3, title: 'Ipad ai m2', category: 'Tablet', price: '519,90 €', description: 'Your child enrolls to a university ? Get this item.' },
  { id: 4, title: 'Ordinateur asus', category: 'Computer', price: '422,90 €', description: 'A low-cost computer' },
  { id: 5, title: 'Gaalxy watch t4', category: 'Watch', price: '231,90 €', description: 'Everything on your wrist' },
])

export function addArticle(article) {
  articles.value.push({ ...article, id: Date.now() })
}

export function removeArticle(articleId) {
  articles.value = articles.value.filter((article) => article.id !== articleId)
}