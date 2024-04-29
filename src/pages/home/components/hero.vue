<script setup lang="ts">
import { ArrowDownToLine } from 'lucide-vue-next';
</script>

<template>
  <section class="container">
    <div class="hero">
      <div class="hero__infos">
        <h1>Mathis Dousse</h1>
        <h2>Développeur <span>Full Stack</span></h2>
        <a
          href="/Dousse_Mathis_CV.pdf"
          target="_blank"
          class="hero__cv-btn"
          aria-label="Download CV"
          title="Télécharger mon CV">
          <ArrowDownToLine :size="21" />
          <span>Download CV</span>
        </a>
      </div>
      <img
        src="../../../assets/images/dev.svg"
        alt="developer illustration"
        class="hero-img" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: var(--header);
  height: calc(100vh - var(--header));

  &__infos {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;

    h2 {
      span {
        position: relative;
      }

      span::before {
        background-color: var(--teal);
        content: '';
        height: 95%;
        margin-left: -2.5%;
        position: absolute;
        transform: rotate(-3deg);
        transition: transform 300ms ease-in-out;
        width: 105%;
        will-change: transform;
        z-index: -1;
        top: -1px;
      }
    }

    h2 span:hover::before {
      transform: rotate(0deg);
    }
  }

  &__cv-btn {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: var(--gray-800);
    border: 2px solid var(--gray-700);
    border-radius: var(--rounded-sm);
    color: white;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      background-color: var(--teal);
      border-color: var(--teal);
    }
  }

  @media (max-width: 768px) {
    &__infos {
      align-items: center;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
