'use client'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Inline SVG icons
const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#B3B0A9" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const FILTERS = ['All', 'Rust', 'Frontend', 'Design', 'Content', 'Growth', 'Operations']

const CORE_TEAM = [
  {
    id: 1, name: 'Thiago George', twitter: '@thiago_sol', role: 'Lead Engineer',
    company: 'Bosa Finance', tags: ['Ops', 'Rust'],
    photo: '/members/G_z-YnZbUAAE9QK.jpeg',
  },
  {
    id: 2, name: 'Caio Florence', twitter: '@thiago_sol', role: 'Ecosystem Lead',
    company: 'Bosa Finance', tags: ['Strategy', 'Growth'],
    photo: '/members/G_z-ZDSbwAAaE8S.jpeg',
  },
  {
    id: 3, name: 'Igor Jesus', twitter: '@thiago_sol', role: 'Senior Rust Engineer',
    company: 'Renpay', tags: ['Ops', 'Rust'],
    photo: '/members/G_z8G37bgAAILU4.jpeg',
  },
]

const OTHER_MEMBERS = [
  {
    id: 4, name: 'Julia Watts', twitter: '@juls101', role: 'Product Designer',
    company: 'Cedila', tags: ['Motion', 'UI/UX'],
    photo: '/members/G_z8GMobUAEmeqg.jpeg',
  },
  {
    id: 5, name: 'Mateus Khalid', twitter: '@Bigmatt', role: 'Front-end Developer',
    company: 'Bosa Finance', tags: ['Anchor', 'Web3'],
    photo: '/members/G_z8oeabUAIU9UE.jpeg',
  },
  {
    id: 6, name: 'Willian George', twitter: '@Crytoguy', role: 'Back-end Developer',
    company: 'Apple', tags: ['Rust', 'Backend'],
    photo: '/members/G_z93CubUAId0QF.jpeg',
  },
  {
    id: 7, name: 'Joao Pedro', twitter: '@joaoao', role: 'Senior Rust Engineer',
    company: 'London Bridge', tags: ['React', 'Rust'],
    photo: '/members/G_z93o3aoAAk0FV.jpeg',
  },
  {
    id: 8, name: 'Charlie Brown', twitter: '@chbrown', role: 'Developer Relations',
    company: 'Google', tags: ['DX', 'Rust'],
    photo: '/members/G_z94FybUAI_8XS.jpeg',
  },
  {
    id: 9, name: 'Andrey Santos', twitter: '@Anddy', role: 'Lead Engineer',
    company: 'Frontend Lead', tags: ['React', 'Web3.js', 'Next.js'],
    photo: '/members/G_z-YnZbUAAE9QK.jpeg',
  },
]

type Member = typeof CORE_TEAM[0]

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M15.27 2h2.6l-5.68 6.49L19 18h-5.23l-4.1-5.37L4.9 18H2.3l6.08-6.95L1 2h5.36l3.71 4.86L15.27 2zm-.91 14.38h1.44L5.7 3.47H4.15l10.21 12.91z" fill="#B3B0A9"/>
    </svg>
  )
}

function Tag({ label }: { label: string }) {
  return (
    <div
      className="backdrop-blur-[12px] border-[0.5px] border-[rgba(128,123,111,0.2)] flex flex-col items-center justify-center px-4 py-1 rounded-[52px] shrink-0"
      style={{ backgroundImage: 'linear-gradient(153.197deg, rgba(128,123,111,0.09) 0%, rgba(128,123,111,0.05) 100%)' }}
    >
      <span className="font-medium text-[#b3b0a9] text-[14px] leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </span>
    </div>
  )
}

function CoreCard({ m }: { m: Member }) {
  return (
    <div
      className="backdrop-blur-[12px] border-[0.5px] border-[rgba(72,185,134,0.2)] flex flex-col gap-5 items-start px-3 py-5 rounded-[12px] w-full"
      style={{ backgroundImage: 'linear-gradient(126.406deg, rgba(0,138,76,0.12) 0%, rgba(0,138,76,0.04) 100%)' }}
    >
      {/* Photo */}
      <div className="h-[364px] relative rounded-tl-[6px] rounded-bl-[6px] w-full overflow-hidden">
        <img src={m.photo} alt={m.name} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      {/* Info */}
      <div className="flex flex-col gap-2 w-full">
        {/* Name + Twitter */}
        <div className="flex items-start justify-between w-full">
          <span className="font-semibold text-[#fff6d9] text-[16px] leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
            {m.name}
          </span>
          <div className="flex gap-2 items-center shrink-0">
            <TwitterIcon />
            <span className="text-[#b3b0a9] text-[16px] leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
              {m.twitter}
            </span>
          </div>
        </div>
        {/* Role */}
        <p className="font-medium text-[#fff6d9] text-[14px] leading-[1.5] w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          {m.role}
        </p>
        {/* Company + Tags */}
        <div className="flex items-center justify-between w-full">
          <span className="font-medium text-[#b3b0a9] text-[14px] leading-[1.3] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
            {m.company}
          </span>
          <div className="flex gap-3 items-center">
            {m.tags.map(t => <Tag key={t} label={t} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function OtherCard({ m }: { m: Member }) {
  return (
    <div
      className="backdrop-blur-[12px] bg-[rgba(26,25,22,0.5)] border-[0.5px] border-[#33322c] flex flex-col gap-5 items-start px-3 py-5 rounded-[12px] w-full"
    >
      {/* Photo */}
      <div className="h-[364px] relative rounded-tl-[6px] rounded-bl-[6px] w-full overflow-hidden">
        <img src={m.photo} alt={m.name} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      {/* Info */}
      <div className="flex flex-col gap-2 w-full">
        {/* Name + Twitter */}
        <div className="flex items-start justify-between w-full">
          <span className="font-semibold text-[#fff6d9] text-[16px] leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
            {m.name}
          </span>
          <div className="flex gap-2 items-center shrink-0">
            <TwitterIcon />
            <span className="text-[#b3b0a9] text-[16px] leading-[1.5] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
              {m.twitter}
            </span>
          </div>
        </div>
        {/* Role */}
        <p className="font-medium text-[#fff6d9] text-[14px] leading-[1.5] w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          {m.role}
        </p>
        {/* Company + Tags */}
        <div className="flex items-center justify-between w-full">
          <span className="font-medium text-[#b3b0a9] text-[14px] leading-[1.3] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
            {m.company}
          </span>
          <div className="flex gap-3 items-center">
            {m.tags.map(t => <Tag key={t} label={t} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MembersPageClient() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredCore = useMemo(() => CORE_TEAM.filter(m => {
    const q = search.toLowerCase()
    const matchSearch = !q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q) || m.company.toLowerCase().includes(q)
    const matchFilter = activeFilter === 'All' || m.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase())
    return matchSearch && matchFilter
  }), [search, activeFilter])

  const filteredOther = useMemo(() => OTHER_MEMBERS.filter(m => {
    const q = search.toLowerCase()
    const matchSearch = !q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q) || m.company.toLowerCase().includes(q)
    const matchFilter = activeFilter === 'All' || m.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase())
    return matchSearch && matchFilter
  }), [search, activeFilter])

  return (
    <main className="bg-[#000e08] min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="flex flex-col gap-[37px] items-center pt-[193px] pb-[40px] px-5">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1
            className="font-semibold text-[#fff6d9] text-[36px] md:text-[60px] tracking-[-1.2px] leading-[1.3]"
            style={{ fontFamily: 'Archivo, sans-serif', fontVariationSettings: "'wdth' 100" }}
          >
            The Superteam Malaysia Team
          </h1>
          <p className="text-[#cccbc5] text-[16px] md:text-[18px] leading-[1.5] max-w-[623px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            A curated network of high-agency builders, founders, and creatives shaping the future of Solana in Brazil.
          </p>
        </div>

        {/* Search bar — exact Figma style */}
        <div
          className="backdrop-blur-[12px] bg-[rgba(26,25,22,0.6)] border-[0.5px] border-[#4d4a43] flex gap-5 items-start overflow-hidden px-5 py-4 rounded-[24px] w-[517px] max-w-full"
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by name or skill"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent flex-1 text-[#b3b0a9] text-[18px] leading-[1.5] outline-none placeholder-[#b3b0a9]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>
      </div>

      {/* Filter tags + content */}
      <div className="flex flex-col gap-10 items-start px-5 md:px-[80px] max-w-[1440px] mx-auto pb-24">
        {/* Tags row */}
        <div className="flex gap-3 items-center flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`backdrop-blur-[12px] border-[0.5px] flex flex-col items-center justify-center px-5 py-2 rounded-[52px] shrink-0 transition-all ${
                activeFilter === f
                  ? 'bg-[#e2d9ee] border-[rgba(128,123,111,0.2)] text-[#006e3d] font-semibold'
                  : 'border-[rgba(128,123,111,0.2)] text-[#e6e5e2] font-medium'
              }`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                lineHeight: '1.5',
                backgroundImage: activeFilter === f ? undefined : 'linear-gradient(150.335deg, rgba(128,123,111,0.09) 0%, rgba(128,123,111,0.05) 100%)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Core Team */}
        {filteredCore.length > 0 && (
          <div className="flex flex-col gap-6 w-full">
            <h2
              className="font-semibold text-[#fff6d9] text-[28px] tracking-[-0.42px] leading-[1.3] text-center w-full"
              style={{ fontFamily: 'Archivo, sans-serif', fontVariationSettings: "'wdth' 100" }}
            >
              Core Team
            </h2>
            <div className="flex flex-wrap gap-4 items-start w-full">
              {filteredCore.map(m => (
                <div key={m.id} className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                  <CoreCard m={m} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Members */}
        {filteredOther.length > 0 && (
          <div className="flex flex-col gap-6 w-full">
            <h2
              className="font-semibold text-[#fff6d9] text-[28px] tracking-[-0.42px] leading-[1.3] text-center w-full"
              style={{ fontFamily: 'Archivo, sans-serif', fontVariationSettings: "'wdth' 100" }}
            >
              Other Members
            </h2>
            <div className="flex flex-wrap gap-4 items-start w-full">
              {filteredOther.map(m => (
                <div key={m.id} className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                  <OtherCard m={m} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {filteredCore.length === 0 && filteredOther.length === 0 && (
          <div className="text-center py-24 w-full text-[#807c6f]">
            <p className="text-lg mb-4">No members found for "{search}"</p>
            <button onClick={() => { setSearch(''); setActiveFilter('All') }} className="text-[#48B986] hover:underline text-sm">
              Clear filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
