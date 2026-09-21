import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../src/views/HomeView.vue'
import ArticlesView from '../src/views/ArticlesView.vue'
import FormulaireArticle from '../src/components/FormulaireArticle.vue'


const routes = [
	{ path: '/', name: 'Home', component: HomeView },
	{ path: '/articles', name: 'Articles', component: ArticlesView },
	{ path: '/ajouter', name: 'Ajouter', component: FormulaireArticle },
	
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})


export default router
