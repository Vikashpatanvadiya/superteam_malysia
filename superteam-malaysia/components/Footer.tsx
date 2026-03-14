'use client'
import Link from 'next/link'

const imgLogo = '/logo.png'

// Inline social icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#B3B0A9" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="#B3B0A9" strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="#B3B0A9"/>
  </svg>
)
const TwitterXIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.27 2h2.6l-5.68 6.49L19 18h-5.23l-4.1-5.37L4.9 18H2.3l6.08-6.95L1 2h5.36l3.71 4.86L15.27 2zm-.91 14.38h1.44L5.7 3.47H4.15l10.21 12.91z" fill="#B3B0A9"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 7h-3v10h3V7zM3 5.5A1.5 1.5 0 1 0 3 2.5 1.5 1.5 0 0 0 3 5.5zM19.5 17h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V17h-3V7h3v1.5c.8-1.2 2.1-1.5 3-1.5 2.2 0 4 1.8 4 4V17z" fill="#B3B0A9"/>
  </svg>
)
const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#B3B0A9"/>
  </svg>
)
const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.57-1.89-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.6 4.72-4.26c.2-.18-.05-.28-.32-.1L7.4 14.53l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.79.67z" fill="#B3B0A9"/>
  </svg>
)

const socials = [
  { href: 'https://instagram.com/superteammy', Icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://twitter.com/SuperteamMY', Icon: TwitterXIcon, label: 'Twitter' },
  { href: 'https://linkedin.com/company/superteam-malaysia', Icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://discord.gg/superteam', Icon: DiscordIcon, label: 'Discord' },
  { href: 'https://t.me/superteammalaysia', Icon: TelegramIcon, label: 'Telegram' },
]

const navLinks = [
  { href: '/#members', label: 'Members' },
  { href: '/#events', label: 'Earn' },
  { href: '/#mission', label: 'Grants' },
]

const externalLinks = [
  { href: '/#events', label: 'Events' },
  { href: 'mailto:hello@superteam.my', label: 'Contact Us' },
  { href: 'https://superteam.fun', label: 'Global Superteam' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(128,123,111,0.2)]">
      {/* Mobile layout */}
      <div className="md:hidden px-5 py-8 flex flex-col gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img src={imgLogo} alt="Superteam Malaysia" className="h-14 w-auto" />
        </div>

        <div className="border-t border-[rgba(128,123,111,0.2)]" />

        {/* Nav links stacked */}
        <div className="flex flex-col gap-4">
          {[...navLinks, ...externalLinks].map(({ href, label }) => (
            href.startsWith('http') || href.startsWith('mailto') ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}>{label}</a>
            ) : (
              <Link key={label} href={href}
                className="font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}>{label}</Link>
            )
          ))}
        </div>

        <div className="border-t border-[rgba(128,123,111,0.2)]" />

        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm text-[#FFF6D9] leading-[1.5]" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Subscribe to our Newsletter
          </p>
          <form onSubmit={e => e.preventDefault()}>
            <div className="bg-[#001C0F] border-[0.5px] border-[#00371E] h-[38px] rounded-[9px] w-full flex items-center px-3">
              <input type="email" placeholder="Enter your email"
                className="bg-transparent w-full text-sm text-[#E6E5E2] placeholder-[#99968C] outline-none"
                style={{ fontFamily: 'Inter, sans-serif' }} />
            </div>
          </form>
        </div>

        {/* Socials */}
        <div className="flex gap-6 items-center">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="hover:opacity-80 transition-opacity shrink-0">
              <s.Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-medium text-sm text-[#807C6F] leading-[1.5]" style={{ fontFamily: 'Inter, sans-serif' }}>
          @Superteam Malaysia 2026
        </p>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid max-w-[1440px] mx-auto px-20 py-8 grid-cols-[auto_1fr_auto] gap-[72px] items-start">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img src={imgLogo} alt="Superteam Malaysia" className="h-14 w-auto" />
          </div>
          <p className="text-[#807C6F] text-sm leading-relaxed max-w-[220px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            The home for Solana builders in Malaysia. Learn, earn, build, and connect.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex gap-[72px] items-start pt-1">
          <div className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <Link key={label} href={href}
                className="font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}>{label}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-5 w-40">
            {externalLinks.map(({ href, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="font-medium text-base text-[#FFF6D9] leading-[1.5] hover:text-[#48B986] transition-colors whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}>{label}</a>
            ))}
          </div>
        </div>

        {/* Newsletter + socials */}
        <div className="flex flex-col gap-5 w-[296px]">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-sm text-[#FFF6D9] leading-[1.5]" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Subscribe to our Newsletter
            </p>
            <form onSubmit={e => e.preventDefault()}>
              <div className="bg-[#001C0F] border-[0.5px] border-[#00371E] h-[38px] rounded-[9px] w-full flex items-center px-3">
                <input type="email" placeholder="Enter your email"
                  className="bg-transparent w-full text-sm text-[#E6E5E2] placeholder-[#99968C] outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }} />
              </div>
            </form>
          </div>
          <div className="flex gap-6 items-center">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="hover:opacity-80 transition-opacity shrink-0">
                <s.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — desktop only */}
      <div className="hidden md:flex border-t border-[rgba(128,123,111,0.2)] px-20 py-5 justify-between items-center max-w-[1440px] mx-auto">
        <p className="font-medium text-base text-[#807C6F] leading-[1.5]" style={{ fontFamily: 'Inter, sans-serif' }}>
          @Superteam Malaysia 2026
        </p>
        <a href="https://superteam.fun" target="_blank" rel="noopener noreferrer"
          className="text-[#807C6F] text-sm hover:text-[#8FE8C0] transition-colors">
          Part of the Global Superteam Network →
        </a>
      </div>
    </footer>
  )
}
