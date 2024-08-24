import { Project } from '@/types';
import { Box, Button, ButtonGroup, Card, Tag } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { LuGithub } from 'react-icons/lu';

export default function ProjectViewerCard({ project }: { project: Project }) {
  const t = useTranslations('Projects');
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-lg">
      <Image
        src={project.img}
        alt={project.alt}
        width={500}
        height={500}
        className="bg-white grayscale-[80%] transition-all duration-300 ease-in-out group-hover:grayscale-0"
      />
      <div className="h-6/12 absolute bottom-0 left-0 right-0 z-20 border border-pink-500 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]" />

      {/*INFO */}
      <div className="flex flex-col p-6">
        <h3 className="mb-2 text-lg">{t(`${project.key}.title`)}</h3>
        <span className="mb-4 text-gray-600">{t(`${project.key}.description`)}</span>
        <div className="flex flex-wrap items-center gap-2">
          {project.techs.map((tech) => (
            <Tag className="bg-gray-800 text-gray-300">{tech}</Tag>
          ))}
        </div>
        <ButtonGroup>
          <Button
            size={'sm'}
            disabled={!project.code}
            leftIcon={<LuGithub size={'1rem'} />}
            className="border border-white/50 bg-white/20 text-xs text-white transition duration-300 ease-in-out hover:bg-white/40 xs:text-sm"
          >
            <a href={project.code}>{t('github')}</a>
          </Button>
          <Button
            size={'sm'}
            disabled={!project.demo}
            leftIcon={<FiExternalLink size={'1rem'} />}
            className="bg-light-purple text-xs text-white transition duration-300 ease-in-out hover:bg-dark-purple xs:text-sm"
          >
            <a href={project.demo}>{t('demo')}</a>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
