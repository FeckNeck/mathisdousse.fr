<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Language, CategoryProjects } from '@/types';
import { BookMarked } from 'lucide-vue-next';

const GITHUB_URL = 'https://github.com/FeckNeck/';

const vue: Language = { name: 'Vuejs', color: '#41b883' };
const adonis: Language = { name: 'Adonisjs', color: '#5a45fe' };

const python: Language = { name: 'Python', color: '#3572A5' };
const r: Language = { name: 'R', color: '#198CE7' };

const categoriesProjects: CategoryProjects[] = [
  {
    category: 'Web',
    projects: [
      {
        title: 'mathisdousse.fr',
        description: 'My personal website.',
        link: 'mathisdousse.fr',
        languages: [vue],
      },
      {
        title: 'Scoop GUI',
        description:
          'A Graphical User Interface for Scoop, the Windows command-line installer.',
        link: 'scoop-gui',
        languages: [adonis, vue],
      },
      {
        title: 'MHGU weapon transmog tool',
        description: 'A mghu weapon transmog tool for Yuzu/Ryujinx.',
        link: 'mhgu-weapon-transmog-tool',
        languages: [vue],
      },
      {
        title: 'Wordle',
        description: 'French wordle in Vue 3 Composition API.',
        link: 'wordle',
        languages: [vue],
      },
      {
        title: 'Tic Tac Toe',
        description:
          'The first project I made using vue3 to get familiar with composition API.',
        link: 'tic-tac-toe',
        languages: [vue],
      },
      {
        title: 'Memory Game',
        description:
          'A memory game made with Vue 3 Composition API and Pinia, using monster hunter icons.',
        link: 'memory-game',
        languages: [vue],
      },
    ],
  },
  {
    category: 'AI',
    projects: [
      {
        title: 'Deep Cox mixtures with L1 penalization',
        description:
          'Research topic on survival analysis incorporating an L1 penalty on Cox mixture models in deep learning.',
        link: 'auton-survival-l1-penalization',
        languages: [python],
      },
      {
        title: 'Landmarks and Boosting for the approximation of Kernel Methods',
        description:
          'Research topic on landmarks and boosting for the approximation of Kernel Methods.',
        link: 'Landmarks-and-Boosting-for-the-approximation-of-Kernel-Methods',
        languages: [python],
      },
      {
        title: 'Network Analysis for Information Retrieval',
        description:
          'Network analysis for information retrieval (networks, search engine, classification, clustering).',
        link: 'auton-survival-l1-penalization',
        languages: [python],
      },
      {
        title: 'Multivariate Poisson mixture model',
        description:
          'Implementation of the EM algorithm with multivariate Poisson mixture model for group detection.',
        link: 'multivariate-poisson-mixture-model',
        languages: [r],
      },
    ],
  },
];

const projectsRefs = ref<HTMLInputElement[] | null[]>([]);

const categories = computed(() => categoriesProjects.map((c) => c.category));
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
            :class="{
              'projects__categories-btn--active': index === activeCategory,
            }"
            class="projects__categories-btn"
            @click="changeCategory(index)">
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

      &--active {
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
