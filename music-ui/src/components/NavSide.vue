<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav-side">
    <RouterLink to="/">
      <h3>Home</h3>
    </RouterLink>
    <RouterLink to="/artists">
      <h3>Artists</h3>
    </RouterLink>
    <RouterLink to="/albums">
      <h3>Albums</h3>
    </RouterLink>
    <RouterLink to="/songs">
      <h3>Songs</h3>
    </RouterLink>
  </div>
</template>
