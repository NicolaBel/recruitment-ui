<script setup>
import BaseView from '../components/BaseView.vue';
import ApiView from '../components/ApiView.vue';

const titles = [
    {
        sortBy: 'name',
        col: 'Artist Name'
    }
]
</script>

<template>
  <BaseView>
    <template #heading>Artists View</template>
    <ApiView db-table="artists" :db-table-headings="titles">
      <template #table-details="{id, name}">
        <td>{{ name }}</td>
      </template>
    </ApiView>
  </BaseView>
</template>
