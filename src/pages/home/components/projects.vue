<script setup lang="ts">
import { categoriesProjects } from '@/data/projects';
import { BookMarked } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import type { Category } from '@/types';

const GITHUB_URL = 'https://github.com/FeckNeck/';

const projectsRefs = ref<HTMLInputElement[] | null[]>([]);

const categories = computed<Category[]>(() =>
  categoriesProjects.map((c) => c.category),
);
const activeCategory = ref<number>(0);

const changeCategory = (index: number) => {
  activeCategory.value = index;
  projectsRefs.value[index]?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <section>
    <div class="container">
      <h2>Projets</h2>
      <div class="projects">
        <div class="projects__categories">
          <button
            v-for="(category, index) in categories"
            :key="category + index"
            @click="changeCategory(index)"
            :class="{
              '--active': index === activeCategory,
            }"
            class="projects__categories-btn">
            {{ category }}
          </button>
          <span
            :style="{
              transform: `translateX(${activeCategory * 100}%)`,
            }"></span>
        </div>
        <div class="projects__wrapper">
          <div
            v-for="(cp, index) in categoriesProjects"
            :key="cp.category + index"
            ref="projectsRefs"
            class="projects__wrapper__content">
            <a
              v-for="project in cp.projects"
              :key="project.title"
              :href="GITHUB_URL + project.link"
              target="_blank"
              class="projects__wrapper__content__item">
              <div class="d-flex items-center g-2">
                <BookMarked :size="16" />
                <p>{{ project.title }}</p>
              </div>
              <p>{{ project.description }}</p>
              <div class="d-flex items-center g-4">
                <div
                  v-for="(language, index) in project.languages"
                  :key="language.name + index"
                  class="d-flex items-center g-2">
                  <span :style="{ backgroundColor: language.color }"></span>
                  <p>{{ language.name }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__categories {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;

    &-btn {
      background: none;
      border: none;
      cursor: pointer;
      position: relative;
      color: var(--border);
      font-size: 1.5rem;
      padding: 0.25rem 0.5rem;
      transition: color 0.3s ease-in-out;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 8px;
        background: var(--border);
        z-index: 10;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &:hover {
        color: var(--teal);
      }

      &.--active {
        color: var(--teal);
      }
    }

    > span {
      position: absolute;
      width: 50%;
      height: 4px;
      border-radius: 8px;
      background: var(--teal);
      z-index: 15;
      bottom: 0;
      left: 0;
      right: 0;
      transition: transform 0.5s ease;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    position: relative;
    overflow-x: hidden;
    width: 100%;

    &__content {
      display: grid;
      gap: 1rem;
      grid-auto-flow: column;
      grid-template-rows: repeat(2, minmax(150px, 1fr));
      grid-auto-columns: calc((100% - 1rem) / 2);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-block: 1rem;
      flex-shrink: 0;
      width: 100%;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.5rem;
        justify-content: space-between;
        border-radius: 0.25rem;
        border: 2px solid var(--border);
        background-color: var(--secondary);
        scroll-snap-align: start;
        transition: transform 0.3s ease-in-out;

        span {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
        }

        &:hover {
          transform: translateY(-0.5rem);
        }
      }
    }

    @media (max-width: 768px) {
      &__content {
        grid-auto-columns: calc((100% - 1rem) / 1);
      }
    }
  }
}
</style>
