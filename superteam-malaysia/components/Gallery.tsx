'use client'
import { useEffect, useRef } from 'react'

// Community photos from public/community
const photos = [
  { src: '/community/HANf8JnakAAhk8Q.jpeg', w: 298, h: 427 },
  { src: '/community/HC8voTAbwAAFlpN.jpeg', w: 437, h: 338 },
  { src: '/community/HCoXHsoawAMH-wK.jpeg', w: 376, h: 427 },
  { src: '/community/HCoXtTUawAEwJSS.jpeg', w: 376, h: 381 },
  { src: '/community/HANf8JnakAAhk8Q.jpeg', w: 437, h: 338 },
  { src: '/community/HC8voTAbwAAFlpN.jpeg', w: 376, h: 381 },
]

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let paused = false
    let animId: number

    const step = () => {
      if (!paused) {
        el.scrollLeft += 0.6
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    el.addEventListener('mouseenter', () => { paused = true })
    el.addEventListener('mouseleave', () => { paused = false })
    return () => cancelAnimationFrame(animId)
  }, [])

  // Duplicate for seamless loop
  const looped = [...photos, ...photos]

  return (
    <section className="py-20 max-w-[1440px] mx-auto">
      <div className="text-center mb-10 px-5 md:px-20">
        <h2 className="font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.24px] md:tracking-[-0.64px] leading-[1.3] mb-4"
          style={{ fontFamily: 'Archivo, sans-serif' }}>Moments from Our Community</h2>
        <p className="text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[567px] mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}>
          A glimpse into the builders, events, and collaborations shaping the Solana ecosystem in Malaysia.
        </p>
      </div>

      {/* Auto-scrolling photo strip */}
      <div
        ref={scrollRef}
        className="flex gap-5 items-end overflow-x-hidden pl-5 md:pl-20 pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {looped.map((p, i) => (
          <div
            key={i}
            className="relative rounded-[6px] overflow-hidden shrink-0"
            style={{ width: p.w, height: p.h }}
          >
            <img
              src={p.src}
              alt={`Community moment ${(i % photos.length) + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-[6px]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
