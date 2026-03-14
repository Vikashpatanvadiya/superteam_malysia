import Link from 'next/link'
import { Twitter, Trophy, Zap, Award } from 'lucide-react'
import type { Member } from '@/types'

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="group relative rounded-xl border border-[rgba(72,185,134,0.2)] overflow-hidden backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
      style={{ background: 'linear-gradient(126.406deg, rgba(0,138,76,0.12) 0%, rgba(0,138,76,0.04) 100%)' }}>

      {/* Photo */}
      <div className="relative h-[280px] overflow-hidden">
        <img src={member.photo_url} alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {member.is_core_team && (
          <div className="absolute top-3 left-3 bg-[#002917] text-[#8FE8C0] text-xs font-semibold px-3 py-1 rounded-full border border-[#48B986]/30">
            Core Team
          </div>
        )}
        {member.hackathon_wins > 0 && (
          <div className="absolute top-3 right-3 bg-[#5522DF]/80 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            <Trophy size={10} /> {member.hackathon_wins}x Winner
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-archivo font-semibold text-base text-[#FFF6D9]">{member.name}</h3>
          <Link href={`https://twitter.com/${member.twitter.replace('@', '')}`} target="_blank"
            className="text-[#B3B0A9] hover:text-[#48B986] transition-colors">
            <Twitter size={16} />
          </Link>
        </div>
        <p className="text-[#FFF6D9] text-sm font-medium mb-0.5">{member.role}</p>
        <p className="text-[#B3B0A9] text-sm mb-3">{member.company}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {member.skills.map(s => (
            <span key={s} className="text-xs font-medium text-[#B3B0A9] px-3 py-1 rounded-full border border-[rgba(128,123,111,0.2)]"
              style={{ background: 'linear-gradient(153deg, rgba(128,123,111,0.09) 0%, rgba(128,123,111,0.05) 100%)' }}>
              {s}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <div className="flex gap-4 text-xs text-[#807C6F]">
          {member.bounties_completed > 0 && (
            <span className="flex items-center gap-1"><Zap size={12} className="text-[#48B986]" />{member.bounties_completed} bounties</span>
          )}
          {member.grants_received > 0 && (
            <span className="flex items-center gap-1"><Award size={12} className="text-[#5522DF]" />{member.grants_received} grants</span>
          )}
        </div>
      </div>
    </div>
  )
}
