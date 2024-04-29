<script setup lang="ts">
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <div class="layout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
