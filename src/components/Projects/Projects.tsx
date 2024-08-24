'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { projects } from '@/data/projects';
import { titleClass } from '@/data/defaultClasses';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectViewerCard from '../ProjectViewerCard/ProjectViewerCard';
import { Project } from '@/types';
import Viewer from '../Carrousel/Viewer';

export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <div className="relative flex flex-col">
      <div id="projects" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <Viewer
        items={projects}
        renderItem={(proj) => <ProjectViewerCard project={proj as Project} />}
      />
      <div className="hidden w-full grid-cols-2 gap-4 md:grid lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard project={p} />
        ))}
      </div>
    </div>
  );
}
