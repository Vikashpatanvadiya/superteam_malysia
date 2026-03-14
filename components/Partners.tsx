// Local ecosystem assets
const solanaLogo = '/ecosystem/BrandLogo.org-Solana-Foundation-Logo-Color-White-2020 2.png'
const phantomLogo = '/ecosystem/Group.png'
const debridgeLogo = '/ecosystem/debridge.png'
const solflareLogo = '/ecosystem/Solfare.png'
const solanaLogo2 = '/ecosystem/04d1a3a1a38debcce56454909ae9bcdb306cff9e.png'
const phantomLogo2 = '/ecosystem/e97ada2d56e8cc90e8d63a0a8721c9e3de1640b5.png'

const cardStyle = {
  background: 'linear-gradient(161.612deg, rgba(0,138,76,0.12) 0%, rgba(0,138,76,0.04) 100%)',
}

function PartnerCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="backdrop-blur-[12px] border-[0.5px] border-[rgba(72,185,134,0.2)] h-[126px] flex items-center justify-center px-3 py-8 rounded-xl mix-blend-luminosity hover:mix-blend-normal transition-all hover:-translate-y-1"
      style={cardStyle}>
      {children}
    </div>
  )
}

export default function Partners() {
  return (
    <section id="ecosystem" className="py-20 px-5 md:px-20 max-w-[1440px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-semibold text-[24px] md:text-[32px] text-[#FFF6D9] tracking-[-0.24px] md:tracking-[-0.64px] leading-[1.3] mb-4"
          style={{ fontFamily: 'Archivo, sans-serif' }}>Our Ecosystem Partners</h2>
        <p className="text-[#CCCBC5] text-base md:text-lg leading-[1.5] max-w-[656px] mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}>
          We collaborate with leading organizations in the Solana ecosystem to support builders and accelerate innovation.
        </p>
      </div>

      {/* 1-col mobile, 3-col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <PartnerCard>
          <img src={solanaLogo} alt="Solana Foundation" className="h-[43px] w-auto object-contain" />
        </PartnerCard>

        <PartnerCard>
          <img src={phantomLogo} alt="Phantom" className="h-[43px] w-auto object-contain" />
        </PartnerCard>

        <PartnerCard>
          <img src={solanaLogo2} alt="Helius" className="h-[43px] w-auto object-contain" />
        </PartnerCard>

        <PartnerCard>
          <img src={debridgeLogo} alt="deBridge" className="h-[43px] w-auto object-contain" />
        </PartnerCard>

        <PartnerCard>
          <img src={phantomLogo2} alt="Solana Foundation" className="h-[43px] w-auto object-contain" />
        </PartnerCard>

        <PartnerCard>
          <img src={solflareLogo} alt="Solflare" className="h-[43px] w-auto object-contain" />
        </PartnerCard>

      </div>
    </section>
  )
}
