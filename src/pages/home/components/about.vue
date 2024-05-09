<script setup lang="ts"></script>

<template>
  <section>
    <div class="container">
      <h2>À propos</h2>
      <div class="about">
        <p>
          Actuellement en seconde année de master MALIA (Machine Learning
          appliqué à l'Intelligence Artificielle) à l'université Lyon 2, je me
          passionne pour le développement et en particulier dans l'ecosystème
          Node.js et Java. J'ai pour ambition de devenir développeur full stack
          et mettre à profit mes connaissances et compétences en entreprise.
        </p>
        <img
          src="../../../assets/images/MDO.png"
          alt="Picture of me"
          class="about__picture" />
        <p>
          Une fois mon diplôme obtenu cet été, je serai à la recherche d'un CDI
          dès septembre 2024. Je suis ouvert aux opportunités qui s'offrent à
          moi. Si vous êtes intéressés par mon profil, n'hésitez-pas à me
          contacter par
          <a
            href="mailto:mathis.dousse@outlook.fr"
            class="about__social-link"
            aria-label="link to my mail"
            >mail</a
          >
          ou sur
          <a
            href="https://www.linkedin.com/in/mathis-dousse"
            target="_blank"
            class="about__social-link"
            aria-label="link to my linkedin"
            >linkedin</a
          >.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  > * {
    flex-basis: 25%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &__picture {
    width: 100%;
    border-radius: 0.5rem;
    transition: all 300ms ease;

    &:hover {
      transform: translateY(-0.5rem);
    }
  }

  &__social-link {
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
}

@media (max-width: 768px) {
  .about {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
