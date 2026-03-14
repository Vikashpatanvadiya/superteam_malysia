'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

// Inline SVG components replacing localhost assets
const DotIcon = () => <span className="w-[3px] h-[3px] rounded-full bg-[#9E9E9E] inline-block shrink-0" />
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3.5z" fill="#B3B0A9"/>
  </svg>
)
const DotNavIcon = () => <span className="w-3 h-3 rounded-full border border-[#48B986] inline-block shrink-0" />

const lumaEventImg1 = '/events/A6BZf-Zq.jpeg'
const lumaEventImg2 = '/events/HBkTgHMbUAAr_L1.jpeg'
const lumaEventUrl = 'https://luma.com/30ihvi8b'

const events = [
  { img: lumaEventImg1, timeStart: '11:00 AM', timeEnd: '12:00 PM', timezone: 'GMT+8', title: 'Superteam Malaysia', organizer: 'Superteam Malaysia', location: 'Malaysia', date: 'Mar 14', day: 'Saturday', lumaUrl: lumaEventUrl },
  { img: lumaEventImg2, timeStart: '11:00 AM', timeEnd: '12:00 PM', timezone: 'GMT+8', title: 'Superteam Malaysia', organizer: 'Superteam Malaysia', location: 'Malaysia', date: 'Mar 14', day: 'Saturday', lumaUrl: lumaEventUrl },
  { img: lumaEventImg1, timeStart: '11:00 AM', timeEnd: '12:00 PM', timezone: 'GMT+8', title: 'Superteam Malaysia', organizer: 'Superteam Malaysia', location: 'Malaysia', date: 'Mar 14', day: 'Saturday', lumaUrl: lumaEventUrl },
  { img: lumaEventImg2, timeStart: '11:00 AM', timeEnd: '12:00 PM', timezone: 'GMT+8', title: 'Superteam Malaysia', organizer: 'Superteam Malaysia', location: 'Malaysia', date: 'Mar 14', day: 'Saturday', lumaUrl: lumaEventUrl },
]

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <a href={event.lumaUrl} target="_blank" rel="noopener noreferrer"
      className="flex flex-col gap-4 shrink-0 w-[320px] md:w-[530px] group">
      <div className="backdrop-blur-[12px] border-[0.5px] border-[rgba(128,123,111,0.2)] flex gap-5 h-[190px] items-center pl-3 pr-5 py-3 rounded-xl w-full group-hover:-translate-y-1 transition-transform"
        style={{ background: 'linear-gradient(158.523deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)' }}>
        <div className="h-[166px] rounded-[6px] shrink-0 w-[206px] overflow-hidden relative">
          <img src={event.img} alt={event.title} className="absolute inset-0 w-full h-full object-cover rounded-[6px]" />
        </div>
        <div className="flex flex-1 flex-col gap-4 items-start justify-center min-w-0">
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex gap-3 items-center">
              <span className="font-medium text-[#9E9E9E] text-sm leading-[1.3] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>{event.timeStart}</span>
              <DotIcon />
              <span className="font-medium text-[#48B986] text-sm leading-[1.3] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>{event.timeEnd} {event.timezone}</span>
            </div>
            <p className="font-semibold text-lg text-white leading-[1.5] overflow-hidden text-ellipsis w-full whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>{event.title}</p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="font-medium text-[#B3B0A9] text-sm leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>By {event.organizer}</span>
            <div className="flex gap-1.5 items-center">
              <LocationIcon />
              <span className="font-medium text-[#B3B0A9] text-sm leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="font-medium text-sm text-[#FFF6D9] leading-[1.5]" style={{ fontFamily: 'Inter, sans-serif' }}>
        {event.date} <span className="text-[#99968C]">{event.day}</span>
      </p>
      <DotNavIcon />
    </a>
  )
}

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let paused = false
    let animId: number

    const step = () => {
      if (!paused) {
        el.scrollLeft += 0.6
        // seamless loop: when we've scrolled through the first copy, reset to start
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

  // Duplicate events for seamless infinite loop
  const looped = [...events, ...events]

  return (
    <section id="events" className="py-20 max-w-[1440px] mx-auto">
      <div className="text-center mb-10 px-5 md:px-20">
        <h2 className="font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.24px] md:tracking-[-0.64px] leading-[1.3] mb-4"
          style={{ fontFamily: 'Archivo, sans-serif' }}>Events &amp; Meetups</h2>
        <p className="text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[668px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          From developer workshops to networking events, we host experiences that bring the Malaysian Web3 community together.
        </p>
      </div>

      {/* Auto-scrolling carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden pl-5 md:pl-20 pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {looped.map((e, i) => <EventCard key={i} event={e} />)}
      </div>

      <div className="flex justify-center mt-6 px-5 md:px-0">
        <Link href={lumaEventUrl} target="_blank"
          className="bg-[#E2D9EE] text-[#00532E] px-6 py-3 rounded-[26px] text-sm font-semibold hover:bg-white transition-all w-full md:w-auto text-center"
          style={{ fontFamily: 'Archivo, sans-serif' }}>
          View all Events
        </Link>
      </div>
    </section>
  )
}
