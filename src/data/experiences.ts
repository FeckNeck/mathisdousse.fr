import Beom from '@/components/icons/beom.vue';
import Cgi from '@/components/icons/cgi.vue';
import CupOfTea from '@/components/icons/cup_of_tea.vue';
import Edf from '@/components/icons/edf.vue';
import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: 'Stage développeur web',
    company: 'CNPE du Bugey',
    startDate: 'mai 2021',
    endDate: 'juin 2021',
    icon: Edf,
  },
  {
    title: 'Stage développeur full stack',
    company: 'Cup Of Tea',
    startDate: 'mai 2023',
    endDate: 'août 2023',
    icon: CupOfTea,
  },
  {
    title: 'Alternance développeur full stack',
    company: 'BEOM Consulting',
    startDate: 'septembre 2023',
    endDate: 'août 2024',
    icon: Beom,
  },
  {
    title: 'Ingénieur full stack',
    company: 'CGI',
    startDate: 'septembre 2024',
    endDate: 'présent',
    icon: Cgi,
  },
];
