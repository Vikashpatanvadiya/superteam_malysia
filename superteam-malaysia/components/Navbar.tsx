'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const logo = '/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/#mission', label: 'Mission' },
    { href: '/#events', label: 'Events' },
    { href: '/members', label: 'Members' },
    { href: '/#ecosystem', label: 'Ecosystem' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'linear-gradient(180deg, rgba(10,18,35,0.98) 0%, rgba(5,12,25,0.95) 100%)'
          : 'linear-gradient(180deg, rgba(10,18,35,0.85) 0%, rgba(5,12,25,0.6) 100%)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 40px rgba(85,34,223,0.08), 0 1px 0 rgba(255,255,255,0.04)',
      }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 h-[70px] md:h-[95px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src={logo} alt="Superteam Malaysia" className="h-[52px] w-[52px] md:h-[80px] md:w-[80px] object-cover rounded-full" />
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-[#F7EACA] font-medium text-base leading-[1.5] hover:text-[#8FE8C0] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Join button */}
        <div className="hidden md:block">
          <Link href="https://discord.gg/superteam" target="_blank"
            className="border border-[#E2D9EE]/80 text-[#FFFBEC] px-6 py-3 rounded-[26px] text-sm font-semibold hover:bg-[#E2D9EE] hover:text-[#00532E] transition-all"
            style={{ fontFamily: 'Archivo, sans-serif' }}>
            Join Superteam
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#FFF6D9]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-5 py-6 flex flex-col gap-4"
          style={{ background: 'linear-gradient(180deg, rgba(10,18,35,0.98) 0%, rgba(5,12,25,0.98) 100%)', backdropFilter: 'blur(16px)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-[#F7EACA] font-medium text-base py-2 border-b border-white/5">
              {l.label}
            </Link>
          ))}
          <Link href="https://discord.gg/superteam" target="_blank"
            className="mt-2 border border-[#E2D9EE]/50 text-[#FFFBEC] px-6 py-3 rounded-[26px] text-sm font-semibold text-center">
            Join Superteam
          </Link>
        </div>
      )}
    </nav>
  )
}
