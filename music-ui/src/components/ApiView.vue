<script setup>
import { toRefs, ref, onMounted, computed } from 'vue'
import { apiGet } from '../api/dbapi'
import Paging from '../components/Paging.vue';

const props = defineProps({
    dbTable: String,
    dbTableParent: String,
    dbTableHeadings: Array
// dbTableHeadings must contain sortBy,col eg:[{sortBy: 'name',col: 'Artist Name'}]
})
const emit = defineEmits([
    'doSortReset'
])
const { dbTable, dbTableParent, dbTableHeadings } = toRefs(props)

//local declarations
const items = ref(null)
let baseURL = ref(computed({
    get() {
        return dbTableParent.value ? dbTable.value+'?_limit=10&_expand='+dbTableParent.value : dbTable.value+'?_limit=10'
    }
}))
let sortURL = ''
let sortBy = 'asc'
let page = ref(1)
let pageURL = ref(computed({
    get() {
        return '&_page='+page.value
    }
}))

//functions
async function pagePrev() {
    page.value--
    items.value = await apiGet(baseURL.value+pageURL.value+sortURL)
}
async function pageNext() {
    page.value++
    items.value = await apiGet(baseURL.value+pageURL.value+sortURL)
}
async function doSort(col) {
    emit('doSortReset')
    sortURL = '&_sort='+col
    if (sortBy == 'asc') {
        sortURL = sortURL+'&_order=asc'
        sortBy = 'desc'
    } else if (sortBy == 'desc') {
        sortURL = sortURL+'&_order=desc'
        sortBy = 'asc'
    } else {
        sortURL = ''
        sortBy = 'asc'
    }
    items.value = await apiGet(baseURL.value+pageURL.value+sortURL)
}

// setup
onMounted(async () => {
    items.value = await apiGet(baseURL.value+pageURL.value+sortURL)
})
</script>

<template>
  <div class="api-view">
    <Paging :cur-page="page" @prev-Page="pagePrev" @next-Page="pageNext" />
    <slot name="extras-top"></slot>
    <table>
      <thead>
        <tr>
          <th v-for="title in dbTableHeadings" @click="doSort(title.sortBy)">{{ title.col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <slot name="table-details" v-bind="item"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>