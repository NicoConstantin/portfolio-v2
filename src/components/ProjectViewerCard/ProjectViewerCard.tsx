import { Project } from '@/types';
import { Tag } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import ProjectButtons from '../ProjectButtons/ProjectButtons';

export default function ProjectViewerCard({ project }: { project: Project }) {
  const t = useTranslations('Projects');
  return (
    <div className="group relative flex min-h-[450px] items-end overflow-hidden rounded-lg border border-gray-800 shadow-lg xs:min-h-[500px]">
      <Image
        src={project.img}
        alt={project.alt}
        width={500}
        height={500}
        className="absolute top-0 z-10 h-3/6 w-full bg-white object-top grayscale-[80%] transition-all duration-300 ease-in-out hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute bottom-0 z-20 h-5/6 w-full rounded-lg bg-gradient-to-t from-gray-900 via-gray-900 via-60% to-transparent" />

      {/*INFO */}
      <div className="relative z-20 flex flex-col bg-transparent p-4 text-gray-300">
        <h3 className="mb-2 text-lg">{t(`${project.key}.title`)}</h3>
        <span className="mb-4 text-sm">{t(`${project.key}.description`)}</span>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {project.techs.map((tech) => (
            <Tag className="bg-gray-800 text-xs text-gray-300" key={tech}>
              {tech}
            </Tag>
          ))}
        </div>

        <ProjectButtons project={project} />
      </div>
    </div>
  );
}
