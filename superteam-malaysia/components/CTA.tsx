import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-5 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="relative rounded-[12px] overflow-hidden flex flex-col items-center justify-center py-16 md:py-24 px-6 text-center"
          style={{ background: 'linear-gradient(155deg, #5B2FD4 0%, #9B4F72 50%, #C0607A 100%)' }}
        >
          {/* Purple blob — left */}
          <div className="absolute pointer-events-none rounded-full"
            style={{ left: '-200px', top: '-100px', width: '700px', height: '700px', background: 'radial-gradient(ellipse, rgba(80,30,200,0.6) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          {/* Pink/salmon blob — right */}
          <div className="absolute pointer-events-none rounded-full"
            style={{ right: '-150px', bottom: '-100px', width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(180,80,100,0.5) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          {/* Center warm glow */}
          <div className="absolute pointer-events-none rounded-full"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(150,60,120,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }} />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-8 items-center max-w-[727px] w-full">
            <div className="flex flex-col gap-4 items-center text-center">
              <h2
                className="font-semibold text-[#FFF6D9] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[1.3]"
                style={{ fontFamily: 'Archivo, sans-serif', fontVariationSettings: "'wdth' 100" }}
              >
                Join the Builders Shaping Solana in Malaysia
              </h2>
              <p
                className="text-[#D9D8D4] text-base md:text-[18px] leading-[1.5] max-w-[528px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Connect with developers, founders, and creators working to grow the Solana ecosystem. Start learning, building, and earning today.
              </p>
            </div>
            <Link
              href="https://discord.gg/superteam"
              target="_blank"
              className="bg-[#E2D9EE] text-[#00532E] px-6 py-3 rounded-[26px] text-sm font-semibold hover:bg-white transition-all w-full sm:w-auto text-center"
              style={{ fontFamily: 'Archivo, sans-serif', fontVariationSettings: "'wdth' 100" }}
            >
              Join the Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
