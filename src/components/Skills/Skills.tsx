import { titleClass } from '@/data/defaultClasses';
import { techSkills, softSkills } from '@/data/skills';
import { useTranslations } from 'next-intl';
import React from 'react';
import SkillsCard from '../SkillsCard/SkillsCard';
import { LiaBrainSolid } from 'react-icons/lia';
import { IoIosCode } from 'react-icons/io';

export default function Skills() {
  const t = useTranslations('Skills');
  return (
    <div className="relative flex w-full flex-col">
      <div id="skills" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <p className="mb-8 text-lg text-gray-300 lg:text-xl">{t('description')}</p>
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
        <SkillsCard icon={IoIosCode} titleKey="hard" skills={techSkills} />
        <SkillsCard icon={LiaBrainSolid} titleKey="soft" skills={softSkills} />
      </div>
    </div>
  );
}
