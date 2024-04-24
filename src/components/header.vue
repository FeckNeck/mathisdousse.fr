<script setup lang="ts">
import { Mail, Moon, Sun } from 'lucide-vue-next';
import { useDark, useToggle } from '@vueuse/core';
import { computed } from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const nextTheme = computed(() => (isDark.value ? 'clair' : 'sombre'));
</script>

<template>
  <header>
    <div class="container">
      <div class="d-flex items-center justify-between py-8">
        <img src="../assets/images/logo.png" alt="MD logo" />
        <div class="d-flex items-center g-2">
          <a class="mail-btn rounded" href="mailto:mathis.dousse@outlook.fr">
            <Mail :size="16" />
            <span>Me contacter</span>
          </a>
          <button
            class="theme-switch"
            @click="toggleDark()"
            :title="`Passer en mode ${nextTheme}`">
            <Moon :size="21" v-if="isDark" />
            <Sun :size="21" v-else />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.mail-btn {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--teal);
  border-radius: var(--rounded-sm);
  color: white;
  border: none;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
}

.theme-switch {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
}
</style>
