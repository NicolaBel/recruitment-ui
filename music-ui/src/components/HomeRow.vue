<script setup>
</script>

<template>
  <div class="home-row">
    <div class="home-row-header">
      <h3><slot name="heading"></slot></h3>
    </div>
    <div class="home-row-details">
      <slot></slot>
    </div>
  </div>
</template>
