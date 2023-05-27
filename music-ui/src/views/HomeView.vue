<script setup>
import HomeCard from '../components/HomeCard.vue';

// get random integer from 1 to n
function getRandom(n) {
  return Math.floor(Math.random() * n)+1
}
</script>

<template>
  <h3>Featured Artists:</h3>
  <div>
    <HomeCard linkto="artists" :linkid=getRandom(6) />
    <HomeCard linkto="artists" :linkid=getRandom(6) />
    <HomeCard linkto="artists" :linkid=getRandom(6) />
  </div>
  <h3>Featured Albums:</h3>
  <div>
    <HomeCard linkto="albums" :linkid=getRandom(10) />
    <HomeCard linkto="albums" :linkid=getRandom(10) />
    <HomeCard linkto="albums" :linkid=getRandom(10) />
  </div>
  <h3>Featured Songs:</h3>
  <div>
    <HomeCard linkto="songs" :linkid=getRandom(10) />
    <HomeCard linkto="songs" :linkid=getRandom(10) />
    <HomeCard linkto="songs" :linkid=getRandom(10) />
  </div>
</template>
