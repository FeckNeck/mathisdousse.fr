<script setup lang="ts">
import { Linkedin, Github } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="container">
      <div class="d-flex items-center justify-between py-6">
        <p>&copy; {{ currentYear }} - Mathis Dousse</p>
        <div class="d-flex items-center g-4">
          <a
            href="https://www.linkedin.com/in/mathis-dousse/"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin :size="20" />
          </a>
          <a
            href="https://github.com/FeckNeck"
            target="_blank"
            rel="noopener noreferrer">
            <Github :size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: var(--secondary);
  border: 2px solid var(--border);
  color: inherit;

  a {
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--teal);
  }
}
</style>
