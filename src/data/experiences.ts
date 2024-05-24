import type { Experience } from '@/types';
import Edf from '@/components/icons/edf.vue';
import CupOfTea from '@/components/icons/cup_of_tea.vue';
import Beom from '@/components/icons/beom.vue';

export const experiences: Experience[] = [
  {
    title: 'Stage développeur web',
    company: 'CNPE du Bugey',
    startDate: new Date(2021, 4),
    endDate: new Date(2021, 5),
    icon: Edf,
  },
  {
    title: 'Stage développeur full stack',
    company: 'Cup Of T',
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 7),
    icon: CupOfTea,
  },
  {
    title: 'Alternance développeur full stack',
    company: 'BEOM Consulting',
    startDate: new Date(2023, 8),
    endDate: new Date(2024, 7),
    icon: Beom,
  },
];
