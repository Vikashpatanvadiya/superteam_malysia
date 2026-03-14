'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1000, suffix: '+', label: 'Community Members' },
  { value: 50, suffix: '+', label: 'Events Hosted' },
  { value: 500, suffix: '+', label: 'Projects Submitted' },
  { value: 10, prefix: '$', suffix: 'M+', label: 'Ecosystem Value Created' },
]

function useCounter(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

function StatItem({ value, suffix, prefix, label }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCounter(value, 2000, active)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center flex flex-col gap-1.5 items-center">
      <div className="font-archivo text-[56px] md:text-[80px] font-normal text-[#FFF6D9] tracking-[-1.6px] leading-[1.3]"
        style={{ fontVariationSettings: "'wdth' 100" }}>
        {prefix}{count}{suffix}
      </div>
      <div className="text-white/80 text-lg leading-[1.5]" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-20 border-y border-white/5 overflow-hidden">
      {/* Figma gradient — three overlapping ellipses on the left */}
      <div className="absolute pointer-events-none"
        style={{ left: '-167px', top: '50%', transform: 'translateY(-50%)', width: '993px', height: '354px' }}>
        {/* Ellipse 4 — leftmost purple */}
        <div className="absolute rounded-full"
          style={{ left: 0, top: 0, width: '425px', height: '352px', background: 'radial-gradient(ellipse, rgba(85,34,223,0.45) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        {/* Ellipse 5 — center blue-purple */}
        <div className="absolute rounded-full"
          style={{ left: '253px', top: 0, width: '427px', height: '354px', background: 'radial-gradient(ellipse, rgba(72,185,134,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        {/* Ellipse 6 — right teal */}
        <div className="absolute rounded-full"
          style={{ left: '566px', top: 0, width: '426px', height: '352px', background: 'radial-gradient(ellipse, rgba(85,34,223,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="flex flex-col gap-10 items-center text-center md:text-left md:flex-row md:items-center">
          {/* Left text */}
          <div className="md:w-[416px] shrink-0">
            <h2 className="font-archivo font-semibold text-[24px] md:text-[32px] text-[#F7EACB] tracking-[-0.64px] mb-4">
              Our Growing Ecosystem
            </h2>
            <p className="text-[#CCCBC5] text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              A vibrant community of builders working together to grow the Solana ecosystem in Malaysia.
            </p>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden md:block w-px self-stretch bg-white/10 mx-4" />

          {/* Stats grid */}
          <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-10 md:gap-x-16 md:gap-y-[117px] w-full">
            {stats.map(s => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
