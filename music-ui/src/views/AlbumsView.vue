<script setup>
import { ref, onMounted } from 'vue'

const albums = ref(null)
onMounted(async () => {
    try {
        const res = await fetch('http://localhost:5000/albums?_limit=10')
        albums.value = (await res.json())
    } catch(err) {
        albums.value = null
        console.log('Error! could not reach the API')
    }
})
</script>

<template>
  <div>Albums View</div>
  <p v-for="album in albums">{{ album }}</p>
</template>
