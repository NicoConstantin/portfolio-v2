'use client'

import { Project } from '@/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProjectButtons from './project-buttons'
import { Badge } from '../ui/badge'

export default function ProjectCarrouselCard({ project }: { project: Project }) {
  const t = useTranslations('Projects')

  return (
    <div className="group relative flex min-h-[450px] items-end overflow-hidden rounded-xl border border-border shadow-sm xs:min-h-[500px]">
      <Image
        src={project.img}
        alt={project.alt}
        width={500}
        height={500}
        className="absolute top-0 z-10 h-3/6 w-full bg-white object-top grayscale-80 transition-all duration-300 ease-in-out hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute bottom-0 z-20 h-5/6 w-full rounded-2xl bg-linear-to-t from-background via-background via-60% to-transparent" />

      {/*INFO */}
      <div className="relative z-20 flex flex-col bg-transparent p-4">
        <h3 className="mb-2 font-display text-lg font-bold dark:text-white">{t(`${project.key}.title`)}</h3>
        <span className="mb-4 text-sm">{t(`${project.key}.description`)}</span>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {project.techs.map(tech => (
            <Badge className="bg-primary/10 text-primary text-xs font-medium" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        <ProjectButtons project={project} />
      </div>
    </div>
  )
}
