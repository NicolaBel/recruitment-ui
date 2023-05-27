<script setup>
import { ref, onMounted } from 'vue'
import { callAPI } from '../api/dbapi'

const url = 'songs?_limit=10'
const songs = ref(null)

onMounted(async () => {
    songs.value = await callAPI(url)
})
</script>

<template>
  <div>Songs View</div>
  <p v-for="song in songs">{{ song }}</p>
</template>
