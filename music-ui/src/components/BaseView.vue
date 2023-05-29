<script setup>
</script>

<template>
  <div class="basev-view">
    <div class="base-view-header">
      <h3><slot name="heading"></slot></h3>
    </div>
    <div class="base-view-details">
      <slot></slot>
    </div>
  </div>
</template>
