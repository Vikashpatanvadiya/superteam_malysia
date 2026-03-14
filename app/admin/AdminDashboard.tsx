'use client'
import { useState } from 'react'
import { Users, Calendar, Building2, MessageSquare, Plus, Edit2, Trash2, LogOut } from 'lucide-react'
import { mockMembers, mockEvents, mockPartners, mockFAQs } from '@/lib/data'

type Tab = 'members' | 'events' | 'partners' | 'faqs'

const tabs: { id: Tab; label: string; icon: React.ReactNode; count: number }[] = [
  { id: 'members', label: 'Members', icon: <Users size={16} />, count: mockMembers.length },
  { id: 'events', label: 'Events', icon: <Calendar size={16} />, count: mockEvents.length },
  { id: 'partners', label: 'Partners', icon: <Building2 size={16} />, count: mockPartners.length },
  { id: 'faqs', label: 'FAQs', icon: <MessageSquare size={16} />, count: mockFAQs.length },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('members')
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')

  // Simple password gate (replace with proper auth in production)
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#000E08] flex items-center justify-center px-5">
        <div className="w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-[#001C0F]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#48B986] to-[#00532E] flex items-center justify-center text-white font-bold text-sm font-archivo mb-6">
            ST
          </div>
          <h1 className="font-archivo font-semibold text-xl text-[#FFF6D9] mb-2">Admin Dashboard</h1>
          <p className="text-[#807C6F] text-sm mb-6">Superteam Malaysia CMS</p>
          <input type="password" placeholder="Enter admin password" value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && password === 'admin' && setAuthed(true)}
            className="w-full bg-[#000E08] border border-[#00371E] rounded-lg px-4 py-3 text-sm text-[#E6E5E2] placeholder-[#807C6F] outline-none focus:border-[#48B986] mb-4 transition-colors" />
          <button onClick={() => password === 'admin' && setAuthed(true)}
            className="w-full bg-[#48B986] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3da876] transition-colors">
            Sign In
          </button>
          <p className="text-[#807C6F] text-xs mt-3 text-center">Demo password: admin</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#000E08] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6 flex flex-col gap-2 shrink-0">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#48B986] to-[#00532E] flex items-center justify-center text-white font-bold text-xs font-archivo">ST</div>
          <span className="font-archivo font-semibold text-[#FFF6D9] text-sm">Admin CMS</span>
        </div>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === t.id ? 'bg-[#002917] text-[#8FE8C0]' : 'text-[#807C6F] hover:text-[#FFF6D9] hover:bg-white/5'
            }`}>
            <span className="flex items-center gap-3">{t.icon}{t.label}</span>
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">{t.count}</span>
          </button>
        ))}
        <div className="mt-auto">
          <button onClick={() => setAuthed(false)}
            className="flex items-center gap-2 text-[#807C6F] hover:text-[#FFF6D9] text-sm px-4 py-3 transition-colors">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-archivo font-semibold text-2xl text-[#FFF6D9] capitalize">{activeTab}</h1>
          <button className="flex items-center gap-2 bg-[#48B986] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#3da876] transition-colors">
            <Plus size={16} /> Add New
          </button>
        </div>

        {/* Members table */}
        {activeTab === 'members' && (
          <div className="rounded-xl border border-white/5 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Name', 'Role', 'Company', 'Skills', 'Core Team', 'Actions'].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-[#807C6F] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockMembers.map((m, i) => (
                  <tr key={m.id} className={`border-t border-white/5 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                    <td className="px-4 py-3 text-[#FFF6D9] font-medium">{m.name}</td>
                    <td className="px-4 py-3 text-[#CCCBC5]">{m.role}</td>
                    <td className="px-4 py-3 text-[#CCCBC5]">{m.company}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {m.skills.slice(0, 2).map(s => (
                          <span key={s} className="text-xs bg-[#002917] text-[#8FE8C0] px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${m.is_core_team ? 'bg-[#48B986]/20 text-[#48B986]' : 'bg-white/5 text-[#807C6F]'}`}>
                        {m.is_core_team ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="text-[#807C6F] hover:text-[#48B986] transition-colors"><Edit2 size={14} /></button>
                        <button className="text-[#807C6F] hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Events table */}
        {activeTab === 'events' && (
          <div className="rounded-xl border border-white/5 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Title', 'Date', 'Location', 'Upcoming', 'Actions'].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-[#807C6F] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockEvents.map((e, i) => (
                  <tr key={e.id} className={`border-t border-white/5 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                    <td className="px-4 py-3 text-[#FFF6D9] font-medium">{e.title}</td>
                    <td className="px-4 py-3 text-[#CCCBC5]">{e.date}</td>
                    <td className="px-4 py-3 text-[#CCCBC5]">{e.location}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${e.is_upcoming ? 'bg-[#48B986]/20 text-[#48B986]' : 'bg-white/5 text-[#807C6F]'}`}>
                        {e.is_upcoming ? 'Upcoming' : 'Past'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="text-[#807C6F] hover:text-[#48B986] transition-colors"><Edit2 size={14} /></button>
                        <button className="text-[#807C6F] hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Partners */}
        {activeTab === 'partners' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mockPartners.map(p => (
              <div key={p.id} className="p-4 rounded-xl border border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={p.logo_url} alt={p.name} className="h-8 w-auto object-contain" />
                  <div>
                    <p className="text-[#FFF6D9] text-sm font-medium">{p.name}</p>
                    <p className="text-[#807C6F] text-xs">{p.category}</p>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="text-[#807C6F] hover:text-[#48B986] transition-colors"><Edit2 size={14} /></button>
                  <button className="text-[#807C6F] hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FAQs */}
        {activeTab === 'faqs' && (
          <div className="flex flex-col gap-3">
            {mockFAQs.map(f => (
              <div key={f.id} className="p-5 rounded-xl border border-white/5 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[#FFF6D9] font-medium mb-1">{f.question}</p>
                  <p className="text-[#807C6F] text-sm line-clamp-2">{f.answer}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="text-[#807C6F] hover:text-[#48B986] transition-colors"><Edit2 size={14} /></button>
                  <button className="text-[#807C6F] hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
