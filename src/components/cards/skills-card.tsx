'use client'

import { LucideIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

type SkillCardProps = {
  skills: string[]
  icon: LucideIcon
  titleKey: string
}

export default function SkillsCard({ skills, icon: Icon, titleKey }: SkillCardProps) {
  const t = useTranslations('Skills')
  return (
    <Card className="border-border bg-surface border shadow-sm">
      <div className="px-6 py-4 lg:py-6">
        <h3 className="font-display text-foreground mb-4 flex items-center text-xl font-bold">
          <Icon className="text-primary mr-2 text-2xl" />
          {t(titleKey)}
        </h3>
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          {skills.map(skill => (
            <Badge variant="secondary" key={skill} className="text-sm px-4 py-4 bg-muted">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
