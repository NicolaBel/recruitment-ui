<script setup>
import { ref, onMounted } from 'vue'

const artists = ref(null)
onMounted(async () => {
    try {
        const res = await fetch('http://localhost:5000/artists?_limit=10')
        artists.value = (await res.json())
    } catch(err) {
        artists.value = null
        console.log('Error! could not reach the API')
    }
})
</script>

<template>
  <div>Artists View</div>
  <p v-for="artist in artists">{{ artist }}</p>
</template>
