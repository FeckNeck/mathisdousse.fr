<script setup lang="ts">
import { experiences } from '@/data/experiences';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { computed, ref } from 'vue';

const breakpoints = useBreakpoints(breakpointsTailwind);

const indicators = ref<HTMLElement[]>([]);
const progressBar = ref<number>(0);

const updateProgressBar = (index: number) => {
  const indicator = indicators.value[index];
  progressBar.value = breakpoints.greater('sm').value
    ? indicator.offsetLeft + 8
    : indicator.offsetTop;
};

const progressBarStyle = computed(() => {
  if (breakpoints.greater('sm').value) {
    return { width: `${progressBar.value}px` };
  }
  return { height: `${progressBar.value}px` };
});
</script>

<template>
  <section>
    <div class="container">
      <h2>Expériences</h2>
      <div class="experiences">
        <div class="experiences__grid">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            @mouseover="updateProgressBar(index)"
            @mouseleave="progressBar = 0"
            class="experiences__grid__item">
            <div class="experiences__grid__item__content">
              <component :is="experience.icon" />
              <h3>{{ experience.title }}</h3>
              <p>{{ experience.company }}</p>
              <p>{{ experience.startDate }} - {{ experience.endDate }}</p>
            </div>
            <span ref="indicators"></span>
          </div>
        </div>
        <div class="experiences__progress-bar">
          <span></span>
          <span :style="progressBarStyle"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experiences {
  position: relative;
  height: 448px;

  &__grid {
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    height: 100%;
    width: 100%;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: flex-start;
      gap: 1rem;
      width: 100%;

      &:nth-child(odd) {
        align-self: flex-end;
        flex-direction: column-reverse;

        > div::before {
          bottom: 0;
          top: -9px;
          border-width: 2px 0 0 2px;
        }
      }

      &__content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        height: 200px;
        width: 100%;
        gap: 0.5rem;
        padding: 1rem;
        border: 2px solid var(--border);
        background-color: var(--primary);
        border-radius: 0.25rem;
        transition: border-color 0.3s ease-in-out;

        &::before {
          content: '';
          position: absolute;
          width: 15px;
          height: 15px;
          border: 0 solid var(--border);
          border-width: 0 2px 2px 0;
          transition: border-color 0.3s ease-in-out;
          background: var(--primary);
          bottom: -9px;
          left: 0;
          right: 0;
          margin-inline: auto;
          rotate: 45deg;
        }

        > svg {
          height: 2rem;
        }
      }

      &:hover {
        > div {
          border-color: var(--teal);

          &::before {
            border-color: var(--teal);
          }
        }

        > span {
          border-color: var(--teal);
        }
      }

      > span {
        display: block;
        width: 1rem;
        height: 1rem;
        background-color: var(--primary);
        border-radius: 50%;
        border: 2px solid var(--border);
        transition: border-color 0.3s ease-in-out;
      }
    }
  }

  &__progress-bar {
    width: 100%;
    height: 4px;
    position: absolute;
    z-index: -1;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);

    span {
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--border);
      border-radius: 1rem;
    }

    span:last-child {
      background-color: var(--teal);
      transition: all 0.5s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

@media (max-width: 768px) {
  .experiences {
    height: 1200px;

    &__grid {
      display: flex;
      flex-direction: column;

      &__item {
        align-self: auto;
        flex-direction: column-reverse;

        &__content {
          width: 100%;

          &::before {
            bottom: 0;
            top: -9px;
            border-width: 2px 0 0 2px;
          }
        }
      }
    }

    &__progress-bar {
      width: 4px;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
