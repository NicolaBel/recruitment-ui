<script setup>

defineProps({
    curPage:Number,
    lastPage:Number
})
defineEmits([
    'firstPage',
    'prevPage',
    'nextPage',
    'lastPage'
])

</script>

<template>
  <div class="paging">
    <button type="button" @click="$emit('firstPage')" :disabled="curPage<=1">&lt;&lt;First</button>
    <button type="button" @click="$emit('prevPage')" :disabled="curPage<=1">&lt;Prev</button>
    <span style="display:none">Current page: {{ curPage }}</span>
    <button type="button" @click="$emit('nextPage')" :disabled="curPage>=lastPage">Next&gt;</button>
    <button type="button" @click="$emit('lastPage')" :disabled="curPage>=lastPage">Last&gt;&gt;</button>
  </div>
</template>
