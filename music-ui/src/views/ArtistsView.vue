<script setup>
import { ref, onMounted } from 'vue'
import { apiGet } from '../api/dbapi'
import BaseView from '../components/BaseView.vue';

const url = 'artists?_limit=10'
const artists = ref(null)

onMounted(async () => {
    artists.value = await apiGet(url)
})
</script>

<template>
  <BaseView>
    <template #heading>Artists View</template>
    <p v-for="artist in artists">{{ artist }}</p>
  </BaseView>
</template>
