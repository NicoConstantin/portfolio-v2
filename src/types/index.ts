import { IconType } from 'react-icons';

export type Tech =
  | 'Javascript'
  | 'Typescript'
  | 'MongoDB'
  | 'React'
  | 'React Native'
  | 'NextJS'
  | 'NodeJS'
  | 'TailwindCSS'
  | 'PostgreSQL'
  | 'Azure'
  | 'Firebase'
  | 'Redux'
  | 'ExpressJS'
  | 'CSS'
  | 'HTML';

export type TechComboProps = {
  tech: Tech;
};

export type IconMap = {
  [key in Tech]: IconType;
};

export interface Project {
  key: string;
  img: string;
  alt: string;
  type: 'mobile' | 'desktop';
  techs: Tech[];
  mission: boolean;
}

export interface Referrer {
  key: string;
  name: string;
  img: string;
}
