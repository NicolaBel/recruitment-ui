<script setup>
import { toRefs, ref, onMounted } from 'vue';
import { apiGet } from '../api/dbapi'
import { RouterLink } from 'vue-router';

const props = defineProps({
    linkTo: String,
    linkId: Number
})
const { linkTo, linkId } = toRefs(props)

const url = linkTo.value+'/'+linkId.value
const link = ref(null)
onMounted(async () => {
    const res = await apiGet(url)
    if (res.ok) {
        link.value = res.body
    } else {
        link.value = null
        console.log(res)
    }
})
</script>

<template>
  <RouterLink :to="linkTo">
    <p>{{ (link === null) ? '' : link.name }}</p>
  </RouterLink>
</template>
