export interface TechStack {
  name: string;
  technologies: string[];
}

export const techData: TechStack[] = [
  {
    name: "Фронтенд",
    technologies: [
      'JavaScript',
      'Typescript',
      'React',
      'HTML',
      'CSS',
      'Zustand',
      'Vite',
      'npm'
    ]
  },
  {
    name: "Бекенд",
    technologies: [
      'NodeJS',
      'Express',
      'Axios',
      'MongoDB',
    ]
  },
  {
    name: "Інше",
    technologies: [
      'Git',
      'Github',
      'Python',
      'Bash',
    ]
  },
]