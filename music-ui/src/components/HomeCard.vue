<script setup>
import { toRefs, ref, onMounted } from 'vue';
import { callAPI } from '../api/dbapi'
import { RouterLink } from 'vue-router';

const props = defineProps({
    linkto: String,
    linkid: Number
})
const { linkto, linkid } = toRefs(props)

const url = linkto.value+'/'+linkid.value
const link = ref(null)
onMounted(async () => {
    link.value = await callAPI(url)
})
</script>

<template>
  <RouterLink :to="linkto">
    <p>{{ (link === null) ? '' : link.name }}</p>
  </RouterLink>
</template>
