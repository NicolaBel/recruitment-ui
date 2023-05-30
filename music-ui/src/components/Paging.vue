<script setup>

defineProps({
    curPage:Number,
    lastPage:Number
})
defineEmits([
    'prevPage',
    'nextPage'
])

</script>

<template>
  <div class="paging">
    <button type="button" @click="$emit('prevPage')" :disabled="curPage<=1">&lt;Prev</button>
    <span style="display:none">Current page: {{ curPage }}</span>
    <button type="button" @click="$emit('nextPage')" :disabled="curPage>=lastPage">Next&gt;</button>
  </div>
</template>
