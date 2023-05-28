<script setup>
import { ref, onMounted } from 'vue'
import { apiGet } from '../api/dbapi'

const url = 'artists?_limit=10'
const artists = ref(null)

onMounted(async () => {
    artists.value = await apiGet(url)
})
</script>

<template>
  <div>Artists View</div>
  <p v-for="artist in artists">{{ artist }}</p>
</template>
