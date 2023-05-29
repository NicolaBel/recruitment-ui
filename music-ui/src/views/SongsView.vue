<script setup>
import BaseView from '../components/BaseView.vue';
import ApiView from '../components/ApiView.vue';

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
    <ApiView db-table="songs" :db-table-headings="titles">
      <template #table-details="{album_id, track, id, name}">
        <td>{{ album_id }}</td>
        <td>{{ track }}</td>
        <td>{{ name }}</td>
      </template>  
    </ApiView>
  </BaseView>
</template>
