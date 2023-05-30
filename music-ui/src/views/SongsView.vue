<script setup>
import { ref } from 'vue'
import BaseView from '../components/BaseView.vue';
import ApiView from '../components/ApiView.vue';

let showName = ref(false)

async function doSortReset() {
    showName.value = false//reset, cannot sort  by this column, at this time
}
const titles = [
    {
        sortBy: 'album_id',
        col: 'Album Id'
    },
    {
        sortBy: 'track',
        col: 'Track #'
    },
    {
        sortBy: 'name',
        col: 'Song Name'
    }
]
</script>

<template>
  <BaseView>
    <template #heading>Songs View</template>
    <ApiView db-table="songs" db-table-parent="album" :db-table-headings="titles" @do-sort-reset="doSortReset">
      <template #extras-top>
        <input type="checkbox"  id="showNameAlbum" value={{showName}} v-model="showName">
        <label for="showNameAlbum">Show Album Name</label>
      </template>
      <template #table-details="{album_id, track, id, name, album}">
        <td v-if="showName">{{ album.name }}</td>
        <td v-else>{{ album_id }}</td>
        <td>{{ track }}</td>
        <td>{{ name }}</td>
      </template>  
    </ApiView>
  </BaseView>
</template>
