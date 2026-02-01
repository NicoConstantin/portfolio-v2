'use client'
import { useTranslations } from 'next-intl'
import { projects } from '@/data/projects'
import { titleClass } from '@/data/defaultClasses'
import ProjectCard from '../cards/project-card'
import ProjectViewerCard from '../cards/project-carrousel-card'
import FeaturedNexus from './featured-nexus'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselTrack,
} from '@/components/ui/carousel'

export default function Projects() {
  const t = useTranslations('Projects')

  return (
    <section className="relative flex flex-col">
      <div id="projects" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <p className="mb-8 text-md lg:text-lg">{t('description')}</p>
      <FeaturedNexus />
      <div className="flex md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselTrack className="space-x-2">
              {projects.map(proj => (
                <CarouselItem key={proj.key}>
                  <ProjectViewerCard project={proj} />
                </CarouselItem>
              ))}
            </CarouselTrack>
          </CarouselContent>
          <div className="mt-4 flex w-full items-center justify-center gap-x-12">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div className="hidden w-full grid-cols-2 gap-4 md:grid lg:grid-cols-3">
        {projects.map(p => (
          <ProjectCard project={p} key={p.key} />
        ))}
      </div>
    </section>
  )
}
