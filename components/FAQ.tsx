'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  { id: '1', question: 'What is Superteam Malaysia?', answer: 'Superteam Malaysia is the local chapter of the global Superteam network, dedicated to empowering builders, creators, founders, and talent in the Solana ecosystem. We connect talent with opportunities and grow the Web3 ecosystem through events, education, and collaboration.' },
  { id: '2', question: 'How do I join?', answer: 'Join our Discord or Telegram community, attend our events, and start participating in bounties and discussions. You can also apply to become a verified member through our website.' },
  { id: '3', question: 'What opportunities are available?', answer: 'We offer bounties, hackathons, grants, mentorship programs, job referrals, and networking opportunities with leading Solana projects globally.' },
  { id: '4', question: 'How can projects collaborate with us?', answer: 'Projects can partner with us to run bounties, sponsor events, access our talent pool, and co-create educational content. Reach out via our contact form or Discord.' },
  { id: '5', question: 'Do I need to be a developer to join?', answer: 'Not at all! We welcome designers, content creators, marketers, business developers, and anyone passionate about Web3 and the Solana ecosystem.' },
]

function FAQRow({ item }: { item: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left p-6 md:p-8 rounded-xl border border-[rgba(128,123,111,0.2)] backdrop-blur-md transition-all"
      style={{ background: open ? 'linear-gradient(169.147deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)' : 'linear-gradient(175.079deg, rgba(128,123,111,0.18) 0%, rgba(128,123,111,0.1) 100%)' }}>
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-lg text-[#F7EACB]">{item.question}</span>
        {open ? <ChevronUp size={24} className="text-[#F7EACB] shrink-0 mt-0.5" /> : <ChevronDown size={24} className="text-[#F7EACB] shrink-0 mt-0.5" />}
      </div>
      {open && (
        <p className="mt-5 text-base text-[#B3AFA9] leading-relaxed">{item.answer}</p>
      )}
    </button>
  )
}

export default function FAQ() {
  return (
    <section className="py-20 px-5 md:px-20">
      <div className="max-w-[1064px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-archivo font-semibold text-[32px] text-[#FFF6D9] tracking-[-0.64px] mb-4">FAQ</h2>
          <p className="text-[#CCCBC5] text-lg max-w-[636px] mx-auto">
            New to the ecosystem? Here is how we help the best talent in Malaysia transition into the world of Solana.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map(f => <FAQRow key={f.id} item={f} />)}

        </div>
      </div>
    </section>
  )
}
