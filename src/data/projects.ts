import { Project } from '@/types';

export const projects: Project[] = [
  {
    key: 'sosNails',
    img: '/bellasos.svg',
    alt: 'nails photo',
    type: 'desktop',
    onProgress: true,
    blockedByContract: false,
    techs: ['Typescript', 'NextJS', 'TailwindCSS', 'MongoDB', 'NodeJS'],
  },
  {
    key: 'henry',
    img: '/henry.svg',
    alt: 'henry logo',
    type: 'desktop',
    onProgress: false,
    blockedByContract: false,
    techs: ['Javascript', 'HTML', 'CSS', 'React', 'Redux', 'PostgreSQL', 'NodeJS', 'ExpressJS'],
    demo: 'https://youtu.be/armv7gxWrvs?si=ZKwo92UbMfI_A9yA',
    code: 'https://github.com/MaxiSanchez600/Henry-Store-PF',
  },
];
