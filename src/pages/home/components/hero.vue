<script setup lang="ts">
import { ArrowDownToLine } from 'lucide-vue-next';
</script>

<template>
  <section class="container">
    <div class="hero">
      <div class="hero__infos">
        <h1>Mathis Dousse</h1>
        <p>
          Ingénieur
          <span>Full Stack</span>
        </p>
        <a
          href="/Mathis_DOUSSE_CV.pdf"
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
section {
  padding-block: 0 !important;
}

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

    p {
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: 400;

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

    p span:hover::before {
      transform: rotate(0deg);
    }
  }

  &__cv-btn {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: var(--secondary);
    border: 2px solid var(--border);
    border-radius: var(--rounded-sm);
    color: inherit;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      background-color: var(--teal);
      border-color: var(--teal);
    }
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    justify-content: space-evenly;

    &__infos {
      align-items: center;
      text-align: center;
    }
  }
}
</style>
