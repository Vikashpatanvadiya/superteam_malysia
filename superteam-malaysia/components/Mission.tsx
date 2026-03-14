import Image from 'next/image'

const cards = [
  {
    title: 'Learn',
    desc: 'Access workshops, guides, and mentorship designed to help you understand blockchain technology and build on Solana.',
    img: '/mission/b286cfbe66a6187a03c79f845f50cc66ee3235a2.png',
  },
  {
    title: 'Earn',
    desc: 'Complete bounties, hackathon challenges, and ecosystem tasks while earning rewards and recognition.',
    img: '/mission/3f284430448d9a8785a5bf43fd1ae88d0d34eee9.png',
  },
  {
    title: 'Build',
    desc: 'Collaborate with talented developers and founders to create decentralized apps, tools, and products.',
    img: '/mission/e191c4ffd1337c4d5087baab4af9377cc93028dc.png',
  },
  {
    title: 'Connect',
    desc: 'Meet like-minded builders through events, meetups, and online discussions in the Solana ecosystem.',
    img: '/mission/cb4598fa620c14668ba26f589567123090a8cd99.png',
  },
]

export default function Mission() {
  return (
    <section id="mission" className="py-20 px-5 md:px-20 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block bg-[#002917] text-[#8FE8C0] px-4 py-1.5 rounded-full text-sm font-semibold font-archivo mb-3 backdrop-blur-xl">
          Our Mission
        </div>
        <h2 className="font-archivo font-semibold text-[32px] text-[#FFF6D9] tracking-[-0.64px] mb-4">
          Empowering the Next Generation of Web3 Builders
        </h2>
        <p className="text-[#CCCBC5] text-lg max-w-[583px] mx-auto">
          Growing the Solana ecosystem in Malaysia by empowering developers, founders, creators, and students to learn, earn, and build together.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(card => (
          <div key={card.title}
            className="flex flex-col justify-end p-6 rounded-xl border border-[rgba(72,185,134,0.2)] backdrop-blur-md hover:-translate-y-1 transition-transform min-h-[280px] md:h-[361px]"
            style={{ background: 'linear-gradient(127.861deg, rgba(0,138,76,0.12) 0%, rgba(0,138,76,0.04) 100%)' }}>
            <div className="h-[92px] w-[144px] mb-5 relative">
              <img src={card.img} alt={card.title} className="h-full w-full object-contain" />
            </div>
            <h3 className="font-archivo font-semibold text-xl text-[#FFF6D9] tracking-[-0.1px] mb-3">{card.title}</h3>
            <p className="text-sm text-white/80 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
