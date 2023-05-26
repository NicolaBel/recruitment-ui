<script setup>
import { ref, onMounted } from 'vue'

const songs = ref(null)
onMounted(async () => {
    try {
        const res = await fetch('http://localhost:5000/songs?_limit=10')
        songs.value = (await res.json())
    } catch(err) {
        songs.value = null
        console.log('Error! could not reach the API')
    }
})
</script>

<template>
  <div>Songs View</div>
  <p v-for="song in songs">{{ song }}</p>
</template>
