'use client'

import { Project } from '@/types'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useTranslations } from 'next-intl'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectButtons({ project }: { project: Project }) {
  const t = useTranslations('Projects')
  const tooltipLabel = project.onProgress ? t('onProgress') : null

  const GithubButton = project.code ? (
    <Button asChild size="sm" variant="outline" className="bg-surface/50 hover:bg-surface">
      <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-x-2">
        <Github className="size-4" />
        {t('github')}
      </a>
    </Button>
  ) : (
    <Button size="sm" variant="outline" disabled className="bg-surface/50">
      <Github className="size-4" />
      {t('github')}
    </Button>
  )

  const DemoButton = project.demo ? (
    <Button asChild size="sm" variant="default" className="hover:bg-primary/90">
      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-x-2">
        <ExternalLink className="size-4" />
        {t('demo')}
      </a>
    </Button>
  ) : (
    <Button size="sm" variant="default" disabled>
      <ExternalLink className="size-4" />
      {t('demo')}
    </Button>
  )

  return (
    <div className="flex items-center gap-x-2">
      {tooltipLabel ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-flex">{GithubButton}</span>
          </TooltipTrigger>
          <TooltipContent>{tooltipLabel}</TooltipContent>
        </Tooltip>
      ) : (
        GithubButton
      )}

      {tooltipLabel ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-flex">{DemoButton}</span>
          </TooltipTrigger>
          <TooltipContent>{tooltipLabel}</TooltipContent>
        </Tooltip>
      ) : (
        DemoButton
      )}
    </div>
  )
}
