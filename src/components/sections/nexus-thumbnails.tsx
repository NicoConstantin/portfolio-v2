'use client'

import * as React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { useCarousel } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export default function NexusThumbnails({ count }: { count: number }) {
  const t = useTranslations('Projects')
  const { viewportRef } = useCarousel()
  const thumbsRef = React.useRef<HTMLDivElement | null>(null)
  const skipInitialAutoScrollRef = React.useRef(true)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const getSlides = React.useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return []
    return Array.from(viewport.querySelectorAll<HTMLElement>('[data-slot="carousel-item"]'))
  }, [viewportRef])

  const scrollToIndex = React.useCallback(
    (index: number) => {
      const viewport = viewportRef.current
      if (!viewport) return

      const slides = getSlides()
      const slide = slides[index]
      if (!slide) return

      const targetLeft = slide.offsetLeft - (viewport.clientWidth - slide.clientWidth) / 2
      viewport.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' })
    },
    [getSlides, viewportRef]
  )

  React.useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const updateActive = () => {
      const slides = getSlides()
      if (!slides.length) return

      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2
      let bestIndex = 0
      let bestDistance = Number.POSITIVE_INFINITY

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i]
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2
        const distance = Math.abs(slideCenter - viewportCenter)
        if (distance < bestDistance) {
          bestDistance = distance
          bestIndex = i
        }
      }

      setActiveIndex(bestIndex)
    }

    updateActive()
    viewport.addEventListener('scroll', updateActive, { passive: true })

    const resizeObserver = new ResizeObserver(updateActive)
    resizeObserver.observe(viewport)

    return () => {
      viewport.removeEventListener('scroll', updateActive)
      resizeObserver.disconnect()
    }
  }, [getSlides, viewportRef])

  React.useEffect(() => {
    const viewport = thumbsRef.current
    if (!viewport) return

    if (skipInitialAutoScrollRef.current) {
      skipInitialAutoScrollRef.current = false
      return
    }

    const activeThumb = viewport.querySelector<HTMLElement>(`[data-thumb-index="${activeIndex}"]`)
    if (!activeThumb) return

    const targetLeft = activeThumb.offsetLeft - (viewport.clientWidth - activeThumb.clientWidth) / 2
    viewport.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' })
  }, [activeIndex])

  return (
    <div ref={thumbsRef} className="no-scrollbar flex w-full gap-2 overflow-x-auto pt-3">
      {Array.from({ length: count }, (_, index) => {
        const imgIndex = index + 1
        const isActive = index === activeIndex

        return (
          <button
            key={imgIndex}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={t('featured.nexus.imagesAlt', { index: imgIndex })}
            aria-current={isActive ? 'true' : undefined}
            data-thumb-index={index}
            className={cn(
              'relative shrink-0 overflow-hidden rounded-lg border bg-muted/20 transition-all',
              'h-14 w-24 sm:h-16 sm:w-28',
              isActive ? 'border-primary/60 ring-2 ring-primary/30' : 'border-border/60 opacity-70 hover:opacity-100'
            )}
          >
            <Image
              src={`/nexus/nexus-${imgIndex}.webp`}
              alt={t('featured.nexus.imagesAlt', { index: imgIndex })}
              width={320}
              height={200}
              className="h-full w-full object-cover cursor-pointer"
            />
          </button>
        )
      })}
    </div>
  )
}
