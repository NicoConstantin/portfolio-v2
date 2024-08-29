import { Project } from '@/types';
import { Button, ButtonGroup, Tooltip } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { LuGithub } from 'react-icons/lu';

export default function ProjectButtons({ project }: { project: Project }) {
  const t = useTranslations('Projects');
  return (
    <ButtonGroup>
      <Tooltip label={project.onProgress ? t('onProgress') : null}>
        <Button
          size={'sm'}
          isDisabled={!project.code}
          leftIcon={<LuGithub size={'1rem'} />}
          className="border border-white/30 bg-white/20 text-xs font-normal text-white transition duration-300 ease-in-out hover:bg-white/40 xs:text-sm"
        >
          <a href={project.code} target="_blank">
            {t('github')}
          </a>
        </Button>
      </Tooltip>
      <Tooltip label={project.onProgress ? t('onProgress') : null}>
        <Button
          size={'sm'}
          isDisabled={!project.demo}
          leftIcon={<FiExternalLink size={'1rem'} />}
          className="bg-primary text-xs font-normal text-white transition duration-300 ease-in-out hover:bg-secondary xs:text-sm"
        >
          <a href={project.demo} target="_blank">
            {t('demo')}
          </a>
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
}
