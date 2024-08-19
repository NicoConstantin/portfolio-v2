'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { Modal, ModalOverlay, ModalContent, useDisclosure } from '@chakra-ui/react';
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
import { IconType } from 'react-icons'; // Import IconType from react-icons

interface Project {
  key: string;
  img: string;
  alt: string;
  type: 'mobile' | 'desktop';
  techs: string[];
  mission: boolean;
}

type IconMap = {
  [key: string]: IconType;
};

const iconMap: IconMap = {
  Javascript: RiJavascriptLine,
  Typescript: TbBrandTypescript,
  MongoDB: TbBrandMongodb,
  React: SiReact,
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

export default function Projects() {
  const t = useTranslations('Projects');
  const [openProject, setOpenProject] = useState<Project | null>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const projects: Project[] = [
    {
      key: 'henry',
      img: '/henry.png',
      alt: 'henry logo',
      type: 'desktop',
      mission: true,
      techs: ['Javascript', 'HTML', 'CSS', 'React', 'Redux', 'PostgreSQL', 'NodeJS', 'ExpressJS'],
    },
    {
      key: 'crLotes',
      img: '/lotes.png',
      alt: 'crlotes logo',
      type: 'desktop',
      mission: true,
      techs: ['Javascript', 'HTML', 'CSS', 'React', 'TailwindCSS'],
    },
    {
      key: 'musureGame',
      img: '/musure1.jpg',
      alt: 'musure game screen',
      type: 'desktop',
      mission: true,
      techs: ['Javascript', 'React', 'Redux', 'TailwindCSS', 'Firebase'],
    },
    {
      key: 'musureCreator',
      img: '/musure2.png',
      alt: 'musure creator screen',
      type: 'desktop',
      mission: true,
      techs: [
        'Javascript',
        'React',
        'Redux',
        'TailwindCSS',
        'MongoDB',
        'Azure',
        'Firebase',
        'ExpressJS',
        'NodeJS',
      ],
    },
    {
      key: 'provincia',
      img: '/provincia.png',
      alt: 'provinciaART logo',
      type: 'desktop',
      mission: true,
      techs: [
        'Javascript',
        'React',
        'NextJS',
        'Redux',
        'TailwindCSS',
        'Azure',
        'ExpressJS',
        'NodeJS',
      ],
    },
    {
      key: 'sosNails',
      img: '/nails.jpg',
      alt: 'nails photo',
      type: 'desktop',
      mission: true,
      techs: ['Typescript', 'React', 'MongoDB'],
    },
    {
      key: 'restaurant',
      img: '/restaurant.jpg',
      alt: 'restaurant photo',
      type: 'desktop',
      mission: true,
      techs: [
        'Typescript',
        'React',
        'NextJS',
        'Redux',
        'TailwindCSS',
        'Azure',
        'ExpressJS',
        'NodeJS',
      ],
    },
  ];

  const onClickProject = (p: Project): void => {
    onOpen();
    setOpenProject(p);
  };

  const chunkArray = (array: Project[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };

  const projectsSliced = chunkArray(projects, 2);

  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="text-2xl font-black">{t('title')}</h1>

      <ul className="flex w-full flex-wrap gap-2">
        {projectsSliced.map((ps: Project[]) => (
          <div className="flex w-full gap-2 overflow-hidden">
            {ps.map((p: Project) => (
              <div className="h-40 flex-1 basis-5/12 cursor-pointer grayscale-[90%] transition-all duration-500 ease-in-out hover:basis-7/12 hover:grayscale-0">
                <Image
                  src={p.img}
                  width={600}
                  height={600}
                  alt={p.alt}
                  className="h-full w-full object-cover object-center"
                  onClick={() => onClickProject(p)}
                />
              </div>
            ))}
          </div>
        ))}
      </ul>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent className="flex flex-col gap-y-16 bg-neutral-950/95 px-6 py-12 text-white">
          <CgClose className="absolute right-6 top-4 cursor-pointer" onClick={() => onClose()} />
          <div className="flex flex-col gap-y-4">
            <h3 className="text-3xl">{t(`${openProject?.key}.title`)}</h3>
            <span>{t(`${openProject?.key}.description`)}</span>
          </div>
          <div className="flex flex-col gap-y-8">
            <h4 className="text-xl">{t('techs')}</h4>
            <div className="grid w-full grid-cols-4 place-items-center gap-x-4 gap-y-4">
              {openProject?.techs.map((tech: string) => {
                const IconComponent: IconType | undefined = iconMap[tech];
                return IconComponent ? (
                  <div className="flex flex-col flex-wrap items-center justify-center gap-y-1">
                    <IconComponent key={tech} className="text-xl" />
                    <span>{tech}</span>
                  </div>
                ) : null;
              })}
            </div>
            {openProject?.mission && (
              <div className="flex flex-col gap-y-4">
                <h5 className="text-xl">{t('mission')}</h5>
                <span>{t(`${openProject?.key}.mission`)}</span>
              </div>
            )}
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
