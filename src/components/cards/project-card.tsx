'use client'

import { Project } from '@/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProjectButtons from './project-buttons'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations('Projects')
  return (
    <Card className="group border border-border bg-surface transition-all duration-300 ease-in-out hover:border-primary/40">
      <CardContent>
        <Image
          src={project.img}
          alt={project.alt}
          width={500}
          height={500}
          className="h-40 rounded-xl bg-white/70 grayscale-[80%] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:grayscale-0"
        />
        <div className="flex w-full flex-col gap-y-4 pt-4">
          <h2 className="font-display text-lg font-bold text-foreground">{t(`${project.key}.title`)}</h2>
          <span className="text-sm">{t(`${project.key}.description`)}</span>
          <div className="flex flex-wrap items-center gap-2">
            {project.techs.map(tech => (
              <Badge className="bg-primary/10 text-primary text-xs font-medium" key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-x-4 mt-auto">
        <ProjectButtons project={project} />
      </CardFooter>
    </Card>
  )
}
