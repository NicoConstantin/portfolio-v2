'use client'

import { Referrer } from '@/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Card } from '../ui/card'
import { Quote } from 'lucide-react'

export default function RecommendCard({ referrer }: { referrer: Referrer }) {
  const t = useTranslations('Recommendations')

  return (
    <Card key={referrer.name} className="h-full border transition-colors hover:border-primary/40">
      <div className="relative flex flex-col gap-4 p-6 h-full justify-between">
        <Quote className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 text-9xl select-none" />
        <p className="z-10 text-base md:text-lg leading-relaxed italic">"{t(`received.${referrer.key}.text`)}"</p>

        <div className="flex items-center gap-4">
          <Image
            alt={`Recommender ${referrer.name}`}
            className="rounded-full"
            height="48"
            src={referrer.img}
            style={{
              aspectRatio: '48/48',
              objectFit: 'cover',
            }}
            width="48"
          />
          <div>
            <h3 className="font-bold dark:text-white">{referrer.name}</h3>
            <p className="text-sm text-muted-foreground">{t(`received.${referrer.key}.headline`)}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
