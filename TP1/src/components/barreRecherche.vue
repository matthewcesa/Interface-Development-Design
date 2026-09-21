<script setup>
defineProps(
    { 
    modelValue: { 
        type: String, 
        default: '' } 
    }
)
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="search">
    Rechercher
    <input :value="modelValue" type="search" placeholder="Titre ou catégorie" @input="$emit('update:modelValue', $event.target.value)" />
  </label>
</template>

<style scoped>
.search { display: grid; gap: 0.35rem; max-width: 420px; }
input { border: 1px solid #bcccdc; border-radius: 4px; font: inherit; padding: 0.7rem; }
</style>