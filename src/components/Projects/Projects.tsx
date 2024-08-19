import { useTranslations } from 'next-intl';
import React from 'react';

interface Project {
  key: string;
  img: string;
}

export default function Projects() {
  const t = useTranslations('Projects');
  const projects: Project[] = [
    {
      key: 'henry',
      img: '/',
    },
    {
      key: 'musureGame',
      img: '/',
    },
    {
      key: 'musureCreator',
      img: '/',
    },
    {
      key: 'sosNails',
      img: '/',
    },
    {
      key: 'restaurant',
      img: '/',
    },
  ];
  return (
    <div>
      <h1>{t('title')}</h1>{' '}
      <ul className="grid w-full grid-cols-2">
        {projects.map((p: Project) => (
          <li key={p.key}>{t(`${p.key}.title`)}</li>
        ))}
      </ul>
    </div>
  );
}
