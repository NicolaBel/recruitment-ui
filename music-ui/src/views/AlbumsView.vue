<script setup>
import { ref, onMounted, computed } from 'vue'
import { apiGet } from '../api/dbapi'
import BaseView from '../components/BaseView.vue';
import Paging from '../components/Paging.vue';

// declarations
const albums = ref(null)
const baseUrl = 'albums?_limit=10&_expand=artist'
let sortUrl = ''
let sortBy = 'asc'
let page = ref(1)
let pageUrl = ref(computed({
    get() {
        return '&_page='+page.value
    }
    //no setter, readonly
}))
let showName= ref(false)

// functions
async function pagePrev() {
    page.value--
    albums.value = await apiGet(baseUrl+pageUrl.value+sortUrl)
}
async function pageNext() {
    page.value++
    albums.value = await apiGet(baseUrl+pageUrl.value+sortUrl)
}

async function doSort(col) {
    showName.value = false//reset, cannot sorting by this column, at this time
    sortUrl = '&_sort='+col
    if (sortBy == 'asc') {
        sortUrl = sortUrl+'&_order=asc'
        sortBy = 'desc'
    } else if (sortBy == 'desc') {
        sortUrl = sortUrl+'&_order=desc'
        sortBy = 'asc'
    } else {
        sortUrl = ''
        sortBy = 'asc'
    }
    albums.value = await apiGet(baseUrl+pageUrl.value+sortUrl)
}

// setup
onMounted(async () => {
    albums.value = await apiGet(baseUrl+pageUrl.value+sortUrl)
})
</script>

<template>
  <BaseView>
    <template #heading>Albums View</template>
    <Paging :cur-page="page" @prev-Page="pagePrev" @next-Page="pageNext"/>
    <div>
      <input type="checkbox" id="showNameArtist" value={{showName}} v-model="showName">
      <label for="showNameArtist">Show Artist name</label>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th @click="doSort(`artist_id`)">Artist Id</th>
            <th @click="doSort(`name`)">Name</th>
            <th @click="doSort(`year_released`)">Year Released</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="album in albums">
            <td v-if="showName">{{ album.artist.name }}</td>
            <td v-else>{{ album.artist_id }}</td>
            <td>{{ album.name }}</td>
            <td>{{ album.year_released }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </BaseView>
</template>
