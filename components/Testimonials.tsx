'use client'
import { useEffect, useRef } from 'react'

const avatars = {
  thiago: '/tweet_images/4ae33aca9a4a0705463227e1612e4fe357fb527d.jpg',
  leticia: '/tweet_images/52e5ce1506bf9220029a42199463b6b9205d66c9.jpg',
  vinicius: '/tweet_images/6f6c2912603fc45ccc5a41dfb12f11f21d357918.jpg',
  gabriel: '/tweet_images/93316f46a53acaf442f2004bc0fc508e369154fa.jpg',
  carol: '/tweet_images/9e9d6808527bc88742d2fa94b57a42f8d010f8e9.jpg',
  leticia2: '/tweet_images/a49c5340fed98584e31a2e3f5e8ecb998627ccab.jpg',
  david: '/tweet_images/e7e0f4b547b5431801af4fb3a246459e18aaa42f.jpg',
  henrique: '/tweet_images/f3d1ba0e4a46c421bd45f021de4aa03c34f345b2.jpg',
  leticia3: '/tweet_images/4ae33aca9a4a0705463227e1612e4fe357fb527d.jpg',
  carol2: '/tweet_images/52e5ce1506bf9220029a42199463b6b9205d66c9.jpg',
}

const col1 = [
  { avatar: avatars.thiago, name: 'Thiago George', handle: '@thiago_sol', text: 'Just won my first global bounty with Superteam Brazil! 🥳 The mentorship here is the real deal. From zero to shipping on Solana in 3 months.' },
  { avatar: avatars.leticia, name: 'Letícia Greg', handle: '@letscode_br', text: "I used to think Rust was intimidating until I joined the Superteam study circles. Fast forward 2 months, and I'm contributing to open-source protocols. 🦀 The peer-to-peer learning model here actually works." },
]
const col2 = [
  { avatar: avatars.vinicius, name: 'Vinícius Santos', handle: '@thiago_sol', text: 'Superteam Malaysia helped me connect with talented developers and discover real opportunities in the Solana ecosystem.' },
  { avatar: avatars.gabriel, name: 'Gabriel Gabs', handle: '@gabs_sol', text: 'Joining Superteam Malaysia introduced me to an amazing community of builders and opened doors to real Web3 projects' },
]
const col3 = [
  { avatar: avatars.carol, name: 'Carol David', handle: '@carol_web3', text: 'Through Superteam Malaysia events and bounties, I gained practical experience building on Solana.' },
  { avatar: avatars.leticia2, name: 'Letícia Greg', handle: '@letscode_br', text: 'The community is incredibly supportive. Superteam Malaysia made it easy to learn, collaborate, and start building.' },
]
const col4 = [
  { avatar: avatars.david, name: 'David Bradley', handle: '@daveey', text: 'Thanks to Superteam Malaysia, I met founders and developers who inspired me to launch my first Web3 project.' },
  { avatar: avatars.henrique, name: 'Henrique M.', handle: '@henrique_hq', text: 'The meetups and workshops helped me understand Solana development and connect with like-minded builders.' },
]
const col5 = [
  { avatar: avatars.leticia3, name: 'Thiago George', handle: '@thiago_sol', text: 'Superteam Malaysia is the perfect place for anyone interested in Web3 to learn, network, and grow.' },
  { avatar: avatars.carol2, name: 'Letícia Greg', handle: '@letscode_br', text: 'I discovered new opportunities and amazing collaborators through the Superteam Malaysia community.' },
]

type Tweet = { avatar: string; name: string; handle: string; text: string }

function TweetCard({ t, style }: { t: Tweet; style?: React.CSSProperties }) {
  return (
    <div className="w-[308px] shrink-0 flex flex-col gap-5 p-5 rounded-xl border border-[rgba(128,123,111,0.2)] backdrop-blur-md"
      style={{ background: 'linear-gradient(144.932deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)', ...style }}>
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-[53px] h-[53px] rounded-full object-cover shrink-0" />
        <div>
          <p className="font-semibold text-base text-[#FFF6D9] leading-[1.3] whitespace-nowrap"
            style={{ fontFamily: 'Archivo, sans-serif' }}>{t.name}</p>
          <p className="text-[#B3B0A9] text-base leading-[1.5]" style={{ fontFamily: 'Inter, sans-serif' }}>{t.handle}</p>
        </div>
      </div>
      <p className="text-sm text-[#E6E5E2] leading-[1.5]" style={{ fontFamily: 'Inter, sans-serif' }}>{t.text}</p>
    </div>
  )
}

function TweetColumn({ tweets }: { tweets: Tweet[] }) {
  return (
    <div className="flex flex-col gap-4 h-full">
      {tweets.map((t, i) => <TweetCard key={i} t={t} />)}
    </div>
  )
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let paused = false
    const step = () => {
      if (!paused) {
        el.scrollLeft += 0.5
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
      }
      requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    el.addEventListener('mouseenter', () => { paused = true })
    el.addEventListener('mouseleave', () => { paused = false })
    return () => cancelAnimationFrame(id)
  }, [])

  const allCols = [col1, col2, col3, col4, col5]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Bottom-right gradient — matches Figma node 1:544 */}
      <div className="absolute pointer-events-none"
        style={{ right: '-120px', bottom: '-60px', width: '1013px', height: '682px' }}>
        <div className="absolute rounded-full"
          style={{ right: 0, bottom: 0, width: '746px', height: '504px', background: 'radial-gradient(ellipse, rgba(85,34,223,0.35) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div className="absolute rounded-full"
          style={{ right: '30px', bottom: '20px', width: '718px', height: '474px', background: 'radial-gradient(ellipse, rgba(72,185,134,0.15) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        <div className="absolute rounded-full"
          style={{ right: '-60px', bottom: '120px', width: '972px', height: '659px', background: 'radial-gradient(ellipse, rgba(85,34,223,0.2) 0%, transparent 60%)', filter: 'blur(80px)' }} />
      </div>

      {/* Top-right gradient — matches Figma node 1:549 */}
      <div className="absolute pointer-events-none"
        style={{ right: '-100px', top: '-40px', width: '993px', height: '354px' }}>
        <div className="absolute rounded-full"
          style={{ left: 0, top: 0, width: '425px', height: '352px', background: 'radial-gradient(ellipse, rgba(85,34,223,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute rounded-full"
          style={{ left: '253px', top: 0, width: '427px', height: '354px', background: 'radial-gradient(ellipse, rgba(100,50,230,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute rounded-full"
          style={{ left: '566px', top: 0, width: '426px', height: '352px', background: 'radial-gradient(ellipse, rgba(85,34,223,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-20 mb-10 text-center">
        <h2 className="font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.64px] leading-[1.3] mb-4"
          style={{ fontFamily: 'Archivo, sans-serif' }}>What the Community Says</h2>
        <p className="text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[636px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Builders, founders, and developers share their experiences with the Solana Malaysia community.
        </p>
      </div>

      {/* Scrolling row of columns — matches Figma's 452px tall scrollable area */}
      <div ref={scrollRef} className="relative z-10 flex gap-4 overflow-x-hidden px-5 md:px-20 h-[320px] md:h-[452px] items-center"
        style={{ scrollbarWidth: 'none' }}>
        {/* Duplicate for seamless loop */}
        {[...allCols, ...allCols].map((col, i) => (
          <TweetColumn key={i} tweets={col} />
        ))}
      </div>
    </section>
  )
}
