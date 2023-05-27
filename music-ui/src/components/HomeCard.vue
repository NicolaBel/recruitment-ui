<script setup>
import { toRefs, ref, onMounted } from 'vue';
import { callAPI } from '../api/dbapi'

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
    <p>{{ (link === null) ? '' : link.name }}</p>
</template>
