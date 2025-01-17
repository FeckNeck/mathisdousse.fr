<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <a v-bind="$attrs" target="_blank">{{ text }}</a>
</template>

<style scoped>
a {
  position: relative;
  transition: all 300ms ease;

  &::after {
    background-color: var(--teal);
    height: 6%;
    bottom: 0;
    content: '';
    left: 0;
    min-height: 2px;
    position: absolute;
    width: 100%;
    z-index: -1;
    transition: height 300ms ease;
  }

  &:hover {
    color: var(--gray-100);
  }

  &:hover::after {
    height: 100%;
  }
}
</style>
