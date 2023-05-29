<script setup>
import { ref, onMounted } from 'vue'
import { apiGet } from '../api/dbapi'
import BaseView from '../components/BaseView.vue';

const url = 'songs?_limit=10'
const songs = ref(null)

onMounted(async () => {
    songs.value = await apiGet(url)
})
</script>

<template>
  <BaseView>
    <template #heading>Songs View</template>
    <p v-for="song in songs">{{ song }}</p>
  </BaseView>
</template>
