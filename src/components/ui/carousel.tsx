'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type CarouselApi = {
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: () => boolean
  canScrollNext: () => boolean
}

type CarouselProps = {
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
} & React.HTMLAttributes<HTMLDivElement>

type CarouselContextProps = {
  orientation: 'horizontal' | 'vertical'
  viewportRef: React.RefObject<HTMLDivElement | null>
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error('useCarousel must be used within a <Carousel />')
  return context
}

function Carousel({ orientation = 'horizontal', setApi, className, children, ...props }: CarouselProps) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const updateCanScroll = React.useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const epsilon = 2
    if (orientation === 'horizontal') {
      setCanScrollPrev(viewport.scrollLeft > epsilon)
      setCanScrollNext(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - epsilon)
      return
    }

    setCanScrollPrev(viewport.scrollTop > epsilon)
    setCanScrollNext(viewport.scrollTop + viewport.clientHeight < viewport.scrollHeight - epsilon)
  }, [orientation])

  const scrollPrev = React.useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const delta = orientation === 'horizontal' ? viewport.clientWidth : viewport.clientHeight
    viewport.scrollBy({
      left: orientation === 'horizontal' ? -delta : 0,
      top: orientation === 'vertical' ? -delta : 0,
      behavior: 'smooth',
    })
  }, [orientation])

  const scrollNext = React.useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const delta = orientation === 'horizontal' ? viewport.clientWidth : viewport.clientHeight
    viewport.scrollBy({
      left: orientation === 'horizontal' ? delta : 0,
      top: orientation === 'vertical' ? delta : 0,
      behavior: 'smooth',
    })
  }, [orientation])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (orientation === 'horizontal') {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        scrollNext()
      }
    },
    [orientation, scrollNext, scrollPrev]
  )

  React.useEffect(() => {
    updateCanScroll()
  }, [updateCanScroll])

  React.useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const onScroll = () => updateCanScroll()
    viewport.addEventListener('scroll', onScroll, { passive: true })

    const resizeObserver = new ResizeObserver(() => updateCanScroll())
    resizeObserver.observe(viewport)

    return () => {
      viewport.removeEventListener('scroll', onScroll)
      resizeObserver.disconnect()
    }
  }, [updateCanScroll])

  React.useEffect(() => {
    if (!setApi) return
    setApi({
      scrollPrev,
      scrollNext,
      canScrollPrev: () => canScrollPrev,
      canScrollNext: () => canScrollNext,
    })
  }, [canScrollNext, canScrollPrev, scrollNext, scrollPrev, setApi])

  return (
    <CarouselContext.Provider value={{ orientation, viewportRef, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation, viewportRef } = useCarousel()

  return (
    <div
      ref={viewportRef}
      data-slot="carousel-content"
      className={cn(
        'no-scrollbar scroll-smooth',
        orientation === 'horizontal'
          ? 'overflow-x-auto overflow-y-hidden snap-x snap-mandatory'
          : 'overflow-y-auto overflow-x-hidden snap-y snap-mandatory',
        className
      )}
      {...props}
    />
  )
}

function CarouselTrack({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel()

  return (
    <div
      data-slot="carousel-track"
      className={cn('flex', orientation === 'horizontal' ? 'px-1' : 'flex-col py-1', className)}
      {...props}
    />
  )
}

function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'snap-start min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'px-1' : 'py-1',
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({ className, variant = 'outline', size = 'icon-sm', ...props }: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn('rounded-full', className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({ className, variant = 'outline', size = 'icon-sm', ...props }: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn('rounded-full', className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="size-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export { type CarouselApi, Carousel, CarouselContent, CarouselTrack, CarouselItem, CarouselPrevious, CarouselNext, useCarousel }
