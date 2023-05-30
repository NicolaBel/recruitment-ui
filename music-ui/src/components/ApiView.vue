<script setup>
import { toRefs, ref, onMounted, computed } from 'vue'
import { apiGet } from '../api/dbapi'
import Paging from '../components/Paging.vue'

//page return limit
const limit = '10'

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
let lastPage = ref(1)

//functions
async function getItems() {
    const res = await apiGet(baseURL.value+pageURL.value+sortURL)
    if (res.ok) {
        items.value = res.body
    } else {
        items.value = null
        console.log(res)//log the error
    }
    // set the last page number
    if (res.headers.has('Link') && (res.headers.get('Link') != '')) { 
        // parse out the last link from 
        //<http://localhost:5000/songs?_limit=5&_page=1>; rel="first", <http://localhost:5000/songs?_limit=5&_page=1>; rel="prev", <http://localhost:5000/songs?_limit=5&_page=3>; rel="next", <http://localhost:5000/songs?_limit=5&_page=19>; rel="last"
        const links = res.headers.get('Link').split(',').pop().split(';')[0]
        // get the page param from the link
        let urlparam = new URLSearchParams(links)
        lastPage.value = Number(urlparam.get('_page').replace('>',''))
    } else {
        lastPage.value = 1
    }
}

async function pageFirst() {
    page.value = 1
    getItems()
}
async function pagePrev() {
    page.value--
    getItems()
}
async function pageNext() {
    page.value++
    getItems()
}
async function pageLast() {
    page.value = lastPage.value
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
    <Paging :cur-page="page" :last-page="lastPage" @first-Page="pageFirst" @prev-Page="pagePrev" @next-Page="pageNext" @last-page="pageLast" />
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