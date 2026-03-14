import Link from 'next/link'

// Inline Twitter/X icon
function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M15.27 2h2.6l-5.68 6.49L19 18h-5.23l-4.1-5.37L4.9 18H2.3l6.08-6.95L1 2h5.36l3.71 4.86L15.27 2zm-.91 14.38h1.44L5.7 3.47H4.15l10.21 12.91z" fill="#B3B0A9"/>
    </svg>
  )
}

const members = [
  {
    photo: '/members/G_z-YnZbUAAE9QK.jpeg',
    name: 'Thiago George', twitter: '@thiago_sol', role: 'Lead Engineer',
    company: 'Bosa Finance', tags: ['Ops', 'Rust'],
  },
  {
    photo: '/members/G_z-ZDSbwAAaE8S.jpeg',
    name: 'Caio Florence', twitter: '@thiago_sol', role: 'Ecosystem Lead',
    company: 'Bosa Finance', tags: ['Strategy', 'Growth'],
  },
  {
    photo: '/members/G_z8G37bgAAILU4.jpeg',
    name: 'Igor Jesus', twitter: '@thiago_sol', role: 'Senior Rust Engineer',
    company: 'Renpay', tags: ['Ops', 'Rust'],
  },
  {
    photo: '/members/G_z8GMobUAEmeqg.jpeg',
    name: 'Joao Pedro', twitter: '@joaoao', role: 'Senior Rust Engineer',
    company: 'London Bridge', tags: ['Ops', 'Rust'],
  },
  {
    photo: '/members/G_z8oeabUAIU9UE.jpeg',
    name: 'Charlie Brown', twitter: '@chbrown', role: 'Developer Relations',
    company: 'Google', tags: ['DX', 'Rust'],
  },
  {
    photo: '/members/G_z93CubUAId0QF.jpeg',
    name: 'Andrey Santos', twitter: '@anddy', role: 'Lead Engineer',
    company: 'Front-end Lead', tags: ['Next.js', 'React'],
  },
]

function TeamCard({ member }: { member: typeof members[0] }) {
  return (
    <div className="backdrop-blur-[12px] border-[0.5px] border-[rgba(72,185,134,0.2)] flex flex-col gap-5 items-start px-3 py-5 rounded-xl"
      style={{ background: 'linear-gradient(126.406deg, rgba(0,138,76,0.12) 0%, rgba(0,138,76,0.04) 100%)' }}>
      {/* Photo */}
      <div className="h-[364px] w-full rounded-tl-[6px] rounded-bl-[6px] overflow-hidden relative">
        <img src={member.photo} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      {/* Info */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-start justify-between w-full">
          <span className="font-semibold text-base text-[#FFF6D9] leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: 'Inter, sans-serif' }}>{member.name}</span>
          <div className="flex items-center gap-2 shrink-0">
            <TwitterIcon />
            <span className="text-[#B3B0A9] text-base leading-[1.5] whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}>{member.twitter}</span>
          </div>
        </div>
        <p className="text-[#FFF6D9] text-sm font-medium leading-[1.5]"
          style={{ fontFamily: 'Inter, sans-serif' }}>{member.role}</p>
        <div className="flex items-center justify-between w-full">
          <span className="text-[#B3B0A9] text-sm font-medium leading-[1.3] whitespace-nowrap"
            style={{ fontFamily: 'Inter, sans-serif' }}>{member.company}</span>
          <div className="flex gap-3">
            {member.tags.map(tag => (
              <span key={tag}
                className="px-4 py-1 rounded-[52px] text-sm font-medium text-[#B3B0A9] border-[0.5px] border-[rgba(128,123,111,0.2)] backdrop-blur-[12px] whitespace-nowrap"
                style={{ background: 'linear-gradient(153.197deg, rgba(128,123,111,0.09) 0%, rgba(128,123,111,0.05) 100%)', fontFamily: 'Inter, sans-serif' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MembersSection() {
  return (
    <section id="members" className="py-20 px-5 md:px-20 max-w-[1440px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.24px] md:tracking-[-0.64px] leading-[1.3] mb-4"
          style={{ fontFamily: 'Archivo, sans-serif' }}>Meet the Team</h2>
        <p className="text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[599px] mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}>
          Passionate builders, developers, and community leaders driving the Solana movement in Malaysia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {members.map(m => <TeamCard key={m.name} member={m} />)}
      </div>

      <div className="flex justify-center">
        <Link href="/members"
          className="bg-[#E2D9EE] text-[#00532E] px-6 py-3 rounded-[26px] text-sm font-semibold hover:bg-white transition-all w-full md:w-auto text-center"
          style={{ fontFamily: 'Archivo, sans-serif' }}>
          View all Members
        </Link>
      </div>
    </section>
  )
}
