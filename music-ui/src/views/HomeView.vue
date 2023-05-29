<script setup>
import BaseView from '../components/BaseView.vue';
import HomeRow from '../components/HomeRow.vue';
import HomeCard from '../components/HomeCard.vue';

// get random integer from 1 to n
function getRandom(n) {
  return Math.floor(Math.random() * n)+1
}
</script>

<template>
  <BaseView>
    <HomeRow>
      <template #heading>Featured Artists:</template>
      <HomeCard linkTo="artists" :linkId=getRandom(6) />
      <HomeCard linkTo="artists" :linkId=getRandom(6) />
      <HomeCard linkTo="artists" :linkId=getRandom(6) />
    </HomeRow>
    <HomeRow>
      <template #heading>Featured Albums:</template>
      <HomeCard linkTo="albums" :linkId=getRandom(10) />
      <HomeCard linkTo="albums" :linkId=getRandom(10) />
      <HomeCard linkTo="albums" :linkId=getRandom(10) />
    </HomeRow>
    <HomeRow>
      <template #heading>Featured Songs:</template>
      <HomeCard linkTo="songs" :linkId=getRandom(10) />
      <HomeCard linkTo="songs" :linkId=getRandom(10) />
      <HomeCard linkTo="songs" :linkId=getRandom(10) />
    </HomeRow>
  </BaseView>
</template>
