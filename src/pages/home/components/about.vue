<script setup lang="ts">
import Link from '@/components/Link.vue';
</script>

<template>
  <section>
    <div class="container">
      <h2>À propos</h2>
      <div class="about">
        <div>
          <p>
            Diplomé depuis 2024 d'un master en informatique spécialisé dans le
            machine learning et l'IA, j'ai souhaité étendre ces compétences tout
            en me spécialisant dans le développement full stack. Ce domaine me
            permet de m'exprimer pleinement et de mettre à profit mon
            savoir-faire en tant que développeur, dans les écosystèmes node.js
            et java.
          </p>
        </div>
        <div>
          <img
            src="../../../assets/images/MDO.png"
            alt="Picture of me"
            class="about__picture" />
        </div>
        <div>
          <p>
            <span>Actuellement en CDI depuis Septembre 2024 chez </span>
            <Link
              text="CGI"
              href="https://www.linkedin.com/company/cgi/"
              aria-label="link to CGI linkedin" />
            <span
              >. J'interviens en tant que développeur full stack sur un projet
              de grande envergure pour le compte d'</span
            >
            <Link
              text="EDF"
              href="https://www.linkedin.com/company/edf/"
              aria-label="link to EDF linkedin" />
            <span
              >. Je suis toutefois ouvert aux opportunités qui s'offrent à moi,
              en particulier pour travailler sur la mise en place d'un design
              system. Si vous êtes intéressés par mon profil, n'hésitez-pas à me
              contacter par
            </span>
            <Link
              text="mail"
              href="mailto:mathis.dousse@outlook.fr"
              aria-label="link to my mail" />
            <span> ou sur </span>
            <Link
              text="Linkedin"
              href="https://www.linkedin.com/in/mathis-dousse"
              aria-label="link to my linkedin" />
            <span>.</span>
          </p>
        </div>
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
    border-radius: 0.5rem;
    transition: all 300ms ease;
    background-color: var(--border);

    &:hover {
      transform: translateY(-0.5rem);
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
