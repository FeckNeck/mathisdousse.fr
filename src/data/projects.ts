import type { CategoryProjects } from '@/types';
import { vue, adonis, python, r } from './languages';

export const categoriesProjects: CategoryProjects[] = [
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
