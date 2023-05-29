<script setup>
import { toRefs, ref, onMounted, computed } from 'vue'
import { apiGet } from '../api/dbapi'
import Paging from '../components/Paging.vue'

//page return limit
const limit = '5'

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
        return dbTableParent.value ? dbTable.value+'?_limit='+limit+'&_expand='+dbTableParent.value : dbTable.value+'?_limit='+limit
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
async function getItems() {
    const res = await apiGet(baseURL.value+pageURL.value+sortURL)
    if (res.ok) {
        items.value = res.body
    } else {
        items.value = null
        console.log(res)
    }
    //console.log(...res.headers)
    if (res.headers.has('Link') && (res.headers.get('Link') != '')) { 
            const links = res.headers.get('Link')
            //console.log(links)
        }
}

async function pagePrev() {
    page.value--
    getItems()
}
async function pageNext() {
    page.value++
    getItems()
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
    getItems()
}

// setup
onMounted(async () => {
    getItems()
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