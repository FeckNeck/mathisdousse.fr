import type { Component } from 'vue';

export interface Language {
  name: string;
  color: string;
}

export type Category = 'Web' | 'AI';

const vue: Language = { name: 'VueJs', color: '#41b883' };
const adonis: Language = { name: 'AdonisJs', color: '#5a45fe' };
const typescript: Language = { name: 'TypeScript', color: '#3178C6' };

const python: Language = { name: 'Python', color: '#3572A5' };
const r: Language = { name: 'R', color: '#198CE7' };

export interface Project {
  title: string;
  description: string;
  link: string;
  languages: Language[];
}

export interface CategoryProjects {
  category: Category;
  projects: Project[];
}

export interface Experience {
  title: string;
  company: string;
  icon: Component;
  startDate: Date;
  endDate: Date;
}
