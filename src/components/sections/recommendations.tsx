'use client'

import { Referrer } from '@/types'
import { useTranslations } from 'next-intl'
import { titleClass } from '@/data/defaultClasses'
import RecommendCard from '../cards/recommend-card'
import { referrers } from '@/data/recommendations'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselTrack,
} from '@/components/ui/carousel'

export default function Recommendations() {
  const t = useTranslations('Recommendations')

  return (
    <div className="relative flex flex-col overflow-hidden">
      <div id="recommendations" className="absolute -top-[100px]" />
      <h1 className={titleClass}>{t('title')}</h1>
      <p className="mb-8 text-md lg:text-lg">{t('description')}</p>

      <Carousel className="w-full">
        <CarouselContent>
          <CarouselTrack className="space-x-2">
            {referrers.map(ref => (
              <CarouselItem key={ref.key} className="basis-full md:basis-1/2">
                <RecommendCard referrer={ref} />
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
  )
}
