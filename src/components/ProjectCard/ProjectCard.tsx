import { Project } from '@/types';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Tag } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { LuGithub } from 'react-icons/lu';

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations('Projects');
  return (
    <Card className="group border border-gray-800 bg-gray-900 transition-all duration-300 ease-in-out hover:border-gray-700">
      <CardBody>
        <Image
          src={project.img}
          alt={project.alt}
          width={500}
          height={500}
          className="h-40 bg-white grayscale-[80%] transition-all duration-300 ease-in-out group-hover:grayscale-0"
        />
        <div className="flex w-full flex-col gap-y-4 pt-4">
          <h2 className="text-xl text-white">{t(`${project.key}.title`)}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {project.techs.map((tech) => (
              <Tag className="bg-gray-800 text-gray-300">{tech}</Tag>
            ))}
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex items-center gap-x-4">
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
      </CardFooter>
    </Card>
  );
}
