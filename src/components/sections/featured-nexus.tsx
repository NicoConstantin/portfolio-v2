'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ExternalLink, Github, Lock, Sparkles, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselTrack,
} from '@/components/ui/carousel'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import NexusThumbnails from './nexus-thumbnails'

const NEXUS_DEMO_URL = 'https://demo.nexus-appointments.com'

export default function FeaturedNexus() {
  const t = useTranslations('Projects')

  return (
    <div className="mb-14">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {t('featured.title')}
        </h2>
        <Badge variant="outline" className="border-primary/30 text-primary">
          <Sparkles data-icon="inline-start" />
          {t('featured.eyebrow')}
        </Badge>
        <Badge className="bg-primary/10 text-primary">{t('onProgress')}</Badge>
      </div>

      <Card className="relative overflow-hidden border-primary/25 bg-card/70 backdrop-blur supports-backdrop-filter:bg-card/60">
        <CardContent className="gap-8 flex flex-col">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 rounded-[2rem] hero-glow blur-3xl"
            />

            <Carousel className="relative w-full">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-xl">
                <div className="flex items-center gap-2 border-b border-border/60 bg-background/40 px-4 py-3">
                  <span aria-hidden="true" className="size-2 rounded-full bg-red-400/70" />
                  <span aria-hidden="true" className="size-2 rounded-full bg-yellow-400/70" />
                  <span aria-hidden="true" className="size-2 rounded-full bg-green-400/70" />
                  <span className="ml-auto text-xs font-medium tracking-wide text-muted-foreground">NEXUS</span>
                </div>

                <CarouselContent className="py-4">
                  <CarouselTrack className="space-x-0 px-0">
                    {Array.from({ length: 10 }, (_, index) => {
                      const imgIndex = index + 1
                      return {
                        src: `/nexus/nexus-${imgIndex}.webp`,
                        alt: t('featured.nexus.imagesAlt', { index: imgIndex }),
                        priority: imgIndex === 1,
                      }
                    }).map(img => (
                      <CarouselItem key={img.src} className="px-0">
                        <div className="relative overflow-hidden rounded-xl border border-border/60 bg-background/30">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={1200}
                            height={800}
                            priority={img.priority}
                            className="aspect-video w-full object-cover object-top"
                          />
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/35 via-transparent"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselTrack>
                </CarouselContent>
              </div>

              <div className="mt-4 flex items-center justify-center gap-x-10">
                <CarouselPrevious />
                <CarouselNext />
              </div>

              <NexusThumbnails count={10} />
            </Carousel>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
              <div className="flex flex-col lg:w-5/12">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {t('featured.nexus.name')}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">{t('featured.nexus.oneLiner')}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="border-border text-muted-foreground">
                    {t('featured.nexus.badges.multilingual')}
                  </Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground">
                    {t('featured.nexus.badges.twoSided')}
                  </Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground">
                    {t('featured.nexus.badges.darkFirst')}
                  </Badge>
                </div>
              </div>

              <div className="space-y-6 lg:w-7/12">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">{t('featured.nexus.problemTitle')}</h4>
                  <p className="text-sm text-muted-foreground">{t('featured.nexus.problem')}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">{t('featured.nexus.featuresTitle')}</h4>
                  <ul className="space-y-2 text-sm">
                    {(['twoSided', 'internationalFirst', 'hours', 'roles', 'foundation'] as const).map(key => (
                      <li key={key} className="flex gap-2 text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-foreground/90">{t(`featured.nexus.features.${key}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="min-w-40">
                <a href={NEXUS_DEMO_URL} target="_blank" rel="noreferrer">
                  <ExternalLink data-icon="inline-start" />
                  {t('featured.nexus.cta.demo')}
                </a>
              </Button>

              <Tooltip>
                <TooltipTrigger asChild>
                  <span tabIndex={0} className="inline-flex">
                    <Button variant="outline" size="lg" className="min-w-40" disabled>
                      <Github data-icon="inline-start" />
                      {t('featured.nexus.cta.codePrivate')}
                      <Lock data-icon="inline-end" />
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent sideOffset={8}>{t('featured.nexus.cta.codeHint')}</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
