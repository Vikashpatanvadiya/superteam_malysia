'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

function RippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    canvas.width = width
    canvas.height = height

    const CELL = 8
    const COLS = Math.floor(width / CELL) + 2
    const ROWS = Math.floor(height / CELL) + 2

    let cur = new Float32Array(COLS * ROWS)
    let prev = new Float32Array(COLS * ROWS)
    const idx = (x: number, y: number) => y * COLS + x

    let animId: number

    const disturb = (mx: number, my: number) => {
      const cx = Math.floor(mx / CELL)
      const cy = Math.floor(my / CELL)
      if (cx > 0 && cx < COLS - 1 && cy > 0 && cy < ROWS - 1) {
        cur[idx(cx, cy)] += 18
        cur[idx(cx+1, cy)] += 9
        cur[idx(cx-1, cy)] += 9
        cur[idx(cx, cy+1)] += 9
        cur[idx(cx, cy-1)] += 9
      }
    }

    const loop = () => {
      // propagate
      for (let y = 1; y < ROWS - 1; y++) {
        for (let x = 1; x < COLS - 1; x++) {
          const i = idx(x, y)
          cur[i] = (prev[idx(x-1,y)] + prev[idx(x+1,y)] + prev[idx(x,y-1)] + prev[idx(x,y+1)]) / 2 - cur[i]
          cur[i] *= 0.96
        }
      }
      ;[cur, prev] = [prev, cur]

      // draw — only edges (gradient of wave = light refraction)
      ctx.clearRect(0, 0, width, height)
      for (let y = 1; y < ROWS - 1; y++) {
        for (let x = 1; x < COLS - 1; x++) {
          const gx = prev[idx(x+1,y)] - prev[idx(x-1,y)]
          const gy = prev[idx(x,y+1)] - prev[idx(x,y-1)]
          const mag = Math.min(Math.abs(gx + gy) * 0.15, 1)
          if (mag < 0.04) continue
          ctx.fillStyle = `rgba(143,232,192,${mag * 0.07})`
          ctx.fillRect(x * CELL, y * CELL, CELL, CELL)
        }
      }

      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      disturb(e.clientX - r.left, e.clientY - r.top)
    }
    const onTouch = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect()
      for (const t of Array.from(e.touches)) disturb(t.clientX - r.left, t.clientY - r.top)
    }
    const onResize = () => {
      width = canvas.offsetWidth; height = canvas.offsetHeight
      canvas.width = width; canvas.height = height
      cur = new Float32Array(COLS * ROWS); prev = new Float32Array(COLS * ROWS)
    }

    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('touchmove', onTouch)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 pointer-events-auto" style={{ mixBlendMode: 'screen' }} />
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000E08]">
      {/* Gradient blobs */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '-150px', left: '-200px', width: '900px', height: '900px', background: 'radial-gradient(ellipse, rgba(85,34,223,0.45) 0%, transparent 60%)', filter: 'blur(100px)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '0%', right: '-150px', width: '700px', height: '700px', background: 'radial-gradient(ellipse, rgba(72,185,134,0.35) 0%, transparent 60%)', filter: 'blur(100px)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '-100px', left: '25%', width: '900px', height: '500px', background: 'radial-gradient(ellipse, rgba(72,185,134,0.2) 0%, transparent 65%)', filter: 'blur(80px)' }} />

      {/* Ripple canvas */}
      <RippleCanvas />

      {/* Content */}
      <div className="relative z-20 text-center max-w-[727px] mx-auto px-5 pt-20 md:pt-24 w-full">
        <div className="inline-flex items-center gap-2 bg-[#002917]/80 border border-[#48B986]/30 text-[#8FE8C0] px-4 py-1.5 rounded-full text-sm font-semibold font-archivo mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#48B986] animate-pulse" />
          Solana Ecosystem · Malaysia
        </div>

        <h1 className="font-archivo font-semibold text-[32px] md:text-[60px] leading-[1.3] tracking-[-0.64px] md:tracking-[-1.2px] text-[#FFF6D9] mb-4">
          Building the Future of{' '}
          <span className="gradient-text">Solana</span>{' '}
          in Malaysia.
        </h1>

        <p className="text-[#E2D9EE] text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[623px] mx-auto">
          A thriving community for developers, creators, and founders building the next generation of Web3 on Solana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://discord.gg/superteam" target="_blank"
            className="bg-[#E2D9EE] text-[#00532E] px-6 py-3 rounded-full text-sm font-semibold font-archivo hover:bg-white transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center">
            Join the Community
          </Link>
          <Link href="/#events"
            className="border border-white/50 text-[#FFFBEC] px-6 py-3 rounded-full text-sm font-semibold font-archivo hover:bg-white/10 transition-all hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto text-center">
            Explore Bounties
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8 text-center">
          {[['1000+', 'Members'], ['50+', 'Events'], ['500+', 'Projects'], ['$10M+', 'Value Created']].map(([num, label]) => (
            <div key={label}>
              <div className="font-archivo text-xl md:text-2xl font-semibold text-[#FFF6D9]">{num}</div>
              <div className="text-[#807C6F] text-xs md:text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
