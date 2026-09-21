<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

function login() {
  if (email.value !== 'test@test.com' || password.value !== '1234') {
    error.value = 'Adresse email ou mot de passe incorrect.'
    return
  }

  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('authenticatedUser', email.value)
  router.push({ name: 'Admin' })
}
</script>

<template>
  <form class="form" @submit.prevent="login">
    <p class="eyebrow">Private space</p>
    <h1>Connection</h1>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <label>Email <input v-model="email" type="email" required placeholder="vous@exemple.fr" /></label>
    <label>Password <input v-model="password" type="password" required /></label>
    <button type="submit">Connect</button>
  </form>
</template>

<style scoped>
.form { 
    display: grid; 
    gap: 1rem; 
    max-width: 420px; 

}
.eyebrow { 
    color: #d3543f; 
    font-weight: 700; 
    text-transform: uppercase; 

}
label { display: grid; 
    gap: 0.4rem; 
    font-weight: 700; 
}


input { 
    border: 1px solid #bcccdc; 
    border-radius: 4px; 
    font: inherit; 
    padding: 0.75rem; 
}

button { 
    background: #17202a; 
    border: 0; 
    border-radius: 4px; 
    color: white; 
    cursor: pointer; 
    font-weight: 700; 
    padding: 0.85rem; 
}

  .error {
    color: #b42318;
    font-weight: 700;
  }
</style>