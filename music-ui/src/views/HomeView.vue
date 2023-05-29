<script setup>
import BaseView from '../components/BaseView.vue';
import HomeCard from '../components/HomeCard.vue';

// get random integer from 1 to n
function getRandom(n) {
  return Math.floor(Math.random() * n)+1
}
</script>

<template>
  <BaseView>
    <h3>Featured Artists:</h3>
    <div>
      <HomeCard linkTo="artists" :linkId=getRandom(6) />
      <HomeCard linkTo="artists" :linkId=getRandom(6) />
      <HomeCard linkTo="artists" :linkId=getRandom(6) />
    </div>
    <h3>Featured Albums:</h3>
    <div>
      <HomeCard linkTo="albums" :linkId=getRandom(10) />
      <HomeCard linkTo="albums" :linkId=getRandom(10) />
      <HomeCard linkTo="albums" :linkId=getRandom(10) />
    </div>
    <h3>Featured Songs:</h3>
    <div>
      <HomeCard linkTo="songs" :linkId=getRandom(10) />
      <HomeCard linkTo="songs" :linkId=getRandom(10) />
      <HomeCard linkTo="songs" :linkId=getRandom(10) />
    </div>
  </BaseView>
</template>
