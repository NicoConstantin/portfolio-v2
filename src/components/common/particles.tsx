'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

type ParticlesProps = {
  className?: string
  count?: number
  style?: React.CSSProperties
}

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  a: number
}

export default function Particles({ className, count = 28, style }: ParticlesProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(parent)

    const createParticle = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.0 + Math.random() * 2.2,
      vx: (-0.08 + Math.random() * 0.16),
      vy: (-0.05 + Math.random() * 0.1),
      a: 0.09 + Math.random() * 0.13,
    })

    const particles: Particle[] = Array.from({ length: count }, () => createParticle(parent.clientWidth, parent.clientHeight))

    const draw = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight

      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      for (const p of particles) {
        ctx.beginPath()
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(255,255,255,${Math.min(1, p.a * 3)})`
        ctx.fillStyle = `rgba(255,255,255,${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.shadowBlur = 0
      ctx.globalCompositeOperation = 'source-over'
    }

    if (prefersReducedMotion) {
      draw()
      return () => {
        ro.disconnect()
      }
    }

    let raf = 0
    const tick = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }

      draw()
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [count])

  return <canvas ref={canvasRef} aria-hidden="true" style={style} className={cn('pointer-events-none', className)} />
}
