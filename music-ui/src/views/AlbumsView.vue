<script setup>
import { ref, onMounted } from 'vue'
import { callAPI } from '../api/dbapi'

const baseUrl = 'albums?_limit=10'
const albums = ref(null)

onMounted(async () => {
    albums.value = await callAPI(baseUrl)
})

let sortUrl = ''
let sortBy = 'asc'
async function doSort(col) {
    sortUrl = baseUrl+'&_sort='+col
    if (sortBy == 'asc') {
        sortUrl = sortUrl+'&_order=asc'
        sortBy = 'desc'
    } else {
        sortUrl = sortUrl+'&_order=desc'
        sortBy = 'asc'
    }
    console.log(sortUrl)
    albums.value = await callAPI(sortUrl)
}

</script>

<template>
  <div>Albums View</div>
  <div><table>
    <thead><tr>
        <th @click="doSort(`artist_id`)">Artist Id</th>
        <th @click="doSort(`name`)">Name</th>
        <th @click="doSort(`year_released`)">Year Released</th>
    </tr></thead>
    <tbody>
        <tr v-for="album in albums"><td>{{ album.artist_id }}</td><td>{{ album.name }}</td><td>{{ album.year_released }}</td></tr>
    </tbody>
  </table></div>
  <!--<p v-for="album in albums">{{ album }}</p>-->
</template>
