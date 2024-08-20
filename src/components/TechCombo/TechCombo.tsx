import { TechComboProps } from '@/types';
import React from 'react';
import { IconType } from 'react-icons';
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

const iconMapper: IconMap = {
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

export default function TechCombo({ tech }: TechComboProps) {
  const IconComponent: IconType | undefined = iconMapper[tech];
  return IconComponent ? (
    <div className="flex flex-col flex-wrap items-center justify-center gap-y-1">
      <IconComponent key={tech} className="text-xl" />
      <span>{tech}</span>
    </div>
  ) : null;
}
