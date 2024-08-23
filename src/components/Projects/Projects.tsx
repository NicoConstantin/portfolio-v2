'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { Modal, ModalOverlay, ModalContent, useDisclosure } from '@chakra-ui/react';
import { Project, Tech } from '@/types';
import { projects } from '@/data/projects';
import TechCombo from '../TechCombo/TechCombo';
import { titleClass } from '@/data/defaultClasses';

export default function Projects() {
  const t = useTranslations('Projects');
  const [openProject, setOpenProject] = useState<Project | null>();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const getSizeClass = (indexRow: number, indexColumn: number): string => {
    const isOddRow = indexRow % 2 === 0;
    const isFirstColumn = indexColumn === 0;

    // Asigna clases dependiendo de la fila (impar/par) y la columna (primera/segunda)
    if (isOddRow) {
      return isFirstColumn ? 'basis-7/12 hover:basis-9/12' : 'basis-5/12 hover:basis-7/12 ';
    } else {
      return isFirstColumn ? 'basis-5/12 hover:basis-7/12 ' : 'basis-7/12 hover:basis-9/12';
    }
  };

  const projectsSliced = chunkArray(projects, 2);

  return (
    <div className="relative flex flex-col gap-y-8">
      <div id="projects" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>

      <ul className="flex w-full flex-wrap gap-2">
        {projectsSliced.map((ps: Project[], indexRow: number) => (
          <div className="flex w-full gap-2 overflow-hidden" key={ps[0].key}>
            {ps.map((p: Project, indexColumn: number) => {
              const sizeClass = getSizeClass(indexRow, indexColumn);

              return (
                <div
                  key={p.key}
                  className={`h-40 flex-1 ${sizeClass} cursor-pointer bg-white/50 grayscale-[90%] transition-all duration-500 ease-in-out hover:bg-white/90 hover:grayscale-0`}
                >
                  <Image
                    src={p.img}
                    width={600}
                    height={600}
                    alt={p.alt}
                    className="h-full w-full object-contain object-center"
                    onClick={() => onClickProject(p)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </ul>

      {openProject && (
        <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalOverlay />
          <ModalContent className="flex flex-col gap-y-16 bg-neutral-950/95 px-6 py-12 text-white">
            <CgClose className="absolute right-6 top-4 cursor-pointer" onClick={() => onClose()} />
            <div className="flex flex-col gap-y-4">
              <h3 className="text-3xl">{t(`${openProject.key}.title`)}</h3>
              <span>{t(`${openProject.key}.description`)}</span>
            </div>
            <div className="flex flex-col gap-y-8">
              <h4 className="text-xl">{t('techs')}</h4>
              <div className="grid w-full grid-cols-4 place-items-center gap-x-4 gap-y-4">
                {openProject.techs.map((tech: Tech) => (
                  <TechCombo tech={tech} key={tech} />
                ))}
              </div>
              {openProject.mission && (
                <div className="flex flex-col gap-y-4">
                  <h5 className="text-xl">{t('mission')}</h5>
                  <span>{t(`${openProject?.key}.mission`)}</span>
                </div>
              )}
            </div>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
