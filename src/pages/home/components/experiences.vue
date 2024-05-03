<script setup lang="ts">
import { ref } from 'vue';
const experiences: string[] = ['appapapa', 'appapapa', 'appapapa'];

const titou = ref<string>('');
</script>

<template>
  <section @mouseleave="titou = ''">
    <div class="container">
      <h2>Expériences</h2>
      <div class="experiences">
        <div class="experiences__grid">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            @mouseover="titou = `${(index + 1) * 25}%`"
            class="experiences__grid__item">
            <div>
              <h3>Titou</h3>
              <p>Titou</p>
              <p>x</p>
            </div>
            <span class="lmao"></span>
          </div>
        </div>
        <div class="experiences__progress-bar">
          <span></span>
          <span :style="{ width: titou }"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  height: 40rem;
  display: flex;
  align-items: center;
}

.experiences {
  position: relative;
  height: 300px;

  &__grid {
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: flex-start;
      width: 50%;
      gap: 1rem;

      > div {
        width: fit-content;
        position: relative;
        padding: 1rem;
        border: 2px solid var(--gray-700);
        border-radius: 0.25rem;

        &::before {
          content: '';
          position: absolute;
          width: 15px;
          height: 15px;
          border-bottom: 2px solid var(--gray-700);
          border-right: 2px solid var(--gray-700);
          background: var(--gray-900);
          bottom: -9px;
          left: 0;
          right: 0;
          margin-inline: auto;
          rotate: 45deg;
        }
      }

      > span {
        display: block;
        width: 1rem;
        height: 1rem;
        background-color: var(--gray-900);
        border-radius: 50%;
        border: 2px solid var(--gray-700);
        border-radius: 50%;
        transition: border-color 0.3s ease-in-out;
      }
    }
  }

  &__progress-bar {
    width: 100%;
    position: absolute;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);

    span {
      display: block;
      width: 100%;
      height: 4px;
      background-color: var(--gray-700);
      border-radius: 1rem;
    }

    span:last-child {
      background-color: var(--teal);
      width: 0%;
      transition: width 0.5s ease-in-out;
      margin-top: -4px;
    }
  }
}

// .progress-bar {
//   display: block;
//   width: 100%;
//   height: 4px;
//   background-color: var(--gray-700);
//   border-radius: 1rem;
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     width: 0;
//     height: 4px;
//     background-color: var(--teal);
//     border-radius: 1rem;
//     border-radius: 1rem;
//     transition: width 0.3s ease-in-out;
//   }
// }
</style>
