<script setup>
import { ref } from 'vue'
import BaseView from '../components/BaseView.vue';
import ApiView from '../components/ApiView.vue';

let showName= ref(false)

async function doSortReset() {
    showName.value = false//reset, cannot sort by this column, at this time
}
const titles = [
    {
        sortBy: 'artist_id',
        col: 'Artist Id'
    },
    {
        sortBy: 'name',
        col: 'Album Name'
    },
    {
        sortBy: 'year_released',
        col: 'Year Released'
    }
]
</script>

<template>
  <BaseView>
    <template #heading>Albums View</template>
    <ApiView db-table="albums" db-table-parent="artist" :db-table-headings="titles" @do-sort-reset="doSortReset">
        <template #extras-top>
            <input type="checkbox" id="showNameArtist" value={{showName}} v-model="showName">
            <label for="showNameArtist">Show Artist name</label>
        </template>
        <template #table-details="{id, name, artist_id, year_released, artist}">
            <td v-if="showName">{{ artist.name }}</td>
            <td v-else>{{ artist_id }}</td>
            <td>{{ name }}</td>
            <td>{{ year_released }}</td>
        </template>
    </ApiView>
  </BaseView>
</template>
