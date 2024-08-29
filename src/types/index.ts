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
  | 'GIT'
  | 'Docker'
  | 'ExpressJS'
  | 'CSS'
  | 'Web3'
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
  onProgress: boolean;
  demo?: string;
  code?: string;
}

export interface Referrer {
  key: string;
  name: string;
  img: string;
}
