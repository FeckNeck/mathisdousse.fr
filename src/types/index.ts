import type { Component } from 'vue';

export type Category = 'Web' | 'AI';

export interface Language {
  name: string;
  color: string;
}

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
  startDate: string;
  endDate: string;
}
