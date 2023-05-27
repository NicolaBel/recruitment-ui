<script setup>
import { ref, onMounted } from 'vue'
import { callAPI } from '../api/dbapi'

const url = 'albums?_limit=10'
const albums = ref(null)

onMounted(async () => {
    albums.value = await callAPI(url)
})
</script>

<template>
  <div>Albums View</div>
  <p v-for="album in albums">{{ album }}</p>
</template>
