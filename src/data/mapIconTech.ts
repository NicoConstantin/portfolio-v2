import { IconMap } from '@/types';
import {
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiMicrosoftazure,
  SiRedux,
  SiExpress,
  SiCss3,
  SiHtml5,
} from 'react-icons/si';
import {
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandFirebase,
} from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';

export const iconMap: IconMap = {
  Javascript: RiJavascriptLine,
  Typescript: TbBrandTypescript,
  MongoDB: TbBrandMongodb,
  React: SiReact,
  'React Native': SiReact,
  NextJS: TbBrandNextjs,
  NodeJS: TbBrandNodejs,
  TailwindCSS: SiTailwindcss,
  PostgreSQL: SiPostgresql,
  Azure: SiMicrosoftazure,
  Firebase: TbBrandFirebase,
  Redux: SiRedux,
  ExpressJS: SiExpress,
  CSS: SiCss3,
  HTML: SiHtml5,
};
