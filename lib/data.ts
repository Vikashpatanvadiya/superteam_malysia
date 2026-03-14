// Fallback mock data used when Supabase is not configured
import type { Member, Event, Partner, Testimonial, FAQItem } from '@/types'

export const mockMembers: Member[] = [
  {
    id: '1', name: 'Ahmad Razif', role: 'Lead Engineer', company: 'Solana Labs',
    photo_url: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Ahmad',
    twitter: '@ahmadrazif', skills: ['Rust', 'Frontend'], is_core_team: true,
    is_featured: true, hackathon_wins: 3, bounties_completed: 12, grants_received: 2,
    bio: 'Building the future of DeFi on Solana.', created_at: '',
  },
  {
    id: '2', name: 'Nurul Ain', role: 'UI/UX Designer', company: 'Web3 Studio',
    photo_url: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Nurul',
    twitter: '@nurulain', skills: ['Design', 'Frontend'], is_core_team: true,
    is_featured: true, hackathon_wins: 1, bounties_completed: 8, grants_received: 1,
    bio: 'Designing intuitive Web3 experiences.', created_at: '',
  },
  {
    id: '3', name: 'Haziq Zulkifli', role: 'Ecosystem Lead', company: 'Superteam MY',
    photo_url: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Haziq',
    twitter: '@haziqzul', skills: ['Growth', 'Community', 'BizDev'], is_core_team: true,
    is_featured: false, hackathon_wins: 0, bounties_completed: 5, grants_received: 0,
    bio: 'Growing the Solana ecosystem in Malaysia.', created_at: '',
  },
  {
    id: '4', name: 'Syafiq Rahman', role: 'Smart Contract Dev', company: 'DeFi Protocol',
    photo_url: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Syafiq',
    twitter: '@syafiqdev', skills: ['Rust', 'Product'], is_core_team: false,
    is_featured: false, hackathon_wins: 2, bounties_completed: 20, grants_received: 1,
    bio: 'Rust developer building on-chain programs.', created_at: '',
  },
  {
    id: '5', name: 'Liyana Yusof', role: 'Content Creator', company: 'Freelance',
    photo_url: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Liyana',
    twitter: '@liyanaweb3', skills: ['Content', 'Community'], is_core_team: false,
    is_featured: false, hackathon_wins: 0, bounties_completed: 15, grants_received: 0,
    bio: 'Educating Malaysians about Web3.', created_at: '',
  },
  {
    id: '6', name: 'Farid Ismail', role: 'Full Stack Dev', company: 'NFT Marketplace',
    photo_url: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Farid',
    twitter: '@faridbuilds', skills: ['Frontend', 'Rust'], is_core_team: false,
    is_featured: false, hackathon_wins: 1, bounties_completed: 9, grants_received: 0,
    bio: 'Building NFT tooling on Solana.', created_at: '',
  },
]

export const mockEvents: Event[] = [
  {
    id: '1', title: 'Solana Builders Meetup KL', description: 'Monthly builders meetup in Kuala Lumpur.',
    date: '2026-04-15', time_start: '6:00 PM', time_end: '9:00 PM', timezone: 'GMT+8',
    location: 'Kuala Lumpur, Malaysia', organizer: 'Superteam Malaysia',
    image_url: 'http://localhost:3845/assets/c11fb63c0c7e38f2e2c0b915f7947fc9c781b7dc.png',
    luma_url: 'https://lu.ma/superteam-malaysia', is_upcoming: true, created_at: '',
  },
  {
    id: '2', title: 'Web3 Hackathon Malaysia', description: '48-hour hackathon for Solana builders.',
    date: '2026-05-01', time_start: '9:00 AM', time_end: '9:00 PM', timezone: 'GMT+8',
    location: 'Penang, Malaysia', organizer: 'Superteam Malaysia',
    image_url: 'http://localhost:3845/assets/c04030916d10a2a6f5b5c550635e7c703000f686.png',
    luma_url: 'https://lu.ma/superteam-malaysia', is_upcoming: true, created_at: '',
  },
  {
    id: '3', title: 'DeFi Workshop Series', description: 'Learn to build DeFi protocols on Solana.',
    date: '2026-05-20', time_start: '2:00 PM', time_end: '5:00 PM', timezone: 'GMT+8',
    location: 'Online', organizer: 'Superteam Malaysia',
    image_url: 'http://localhost:3845/assets/350c7052b853c3ac7d0935fd1cf35e38f68c410a.png',
    luma_url: 'https://lu.ma/superteam-malaysia', is_upcoming: true, created_at: '',
  },
]

export const mockPartners: Partner[] = [
  { id: '1', name: 'Solana Foundation', logo_url: 'http://localhost:3845/assets/04d1a3a1a38debcce56454909ae9bcdb306cff9e.png', website_url: 'https://solana.org', category: 'Foundation' },
  { id: '2', name: 'Phantom', logo_url: 'http://localhost:3845/assets/e97ada2d56e8cc90e8d63a0a8721c9e3de1640b5.png', website_url: 'https://phantom.app', category: 'Wallet' },
  { id: '3', name: 'Helius', logo_url: 'http://localhost:3845/assets/b13b6fc45af2ee9d0fb0ef852d6228279ecc622e.svg', website_url: 'https://helius.dev', category: 'Infrastructure' },
  { id: '4', name: 'deBridge', logo_url: 'http://localhost:3845/assets/04d1a3a1a38debcce56454909ae9bcdb306cff9e.png', website_url: 'https://debridge.finance', category: 'Bridge' },
  { id: '5', name: 'Solflare', logo_url: 'http://localhost:3845/assets/e97ada2d56e8cc90e8d63a0a8721c9e3de1640b5.png', website_url: 'https://solflare.com', category: 'Wallet' },
  { id: '6', name: 'Superteam', logo_url: 'http://localhost:3845/assets/b13b6fc45af2ee9d0fb0ef852d6228279ecc622e.svg', website_url: 'https://superteam.fun', category: 'Community' },
]

export const mockTestimonials: Testimonial[] = [
  {
    id: '1', author_name: 'Ahmad Razif', author_handle: '@ahmadrazif',
    author_avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Ahmad',
    content: 'Just won my first global bounty with Superteam Malaysia! 🥳 The mentorship here is the real deal. From zero to shipping on Solana in 3 months.',
    tweet_url: '#',
  },
  {
    id: '2', author_name: 'Nurul Ain', author_handle: '@nurulain',
    author_avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Nurul',
    content: 'I used to think Rust was intimidating until I joined the Superteam study circles. Fast forward 2 months, and I\'m contributing to open-source protocols. 🦀',
    tweet_url: '#',
  },
  {
    id: '3', author_name: 'Haziq Zulkifli', author_handle: '@haziqzul',
    author_avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Haziq',
    content: 'Superteam Malaysia helped me connect with talented developers and discover real opportunities in the Solana ecosystem. Best community in MY! 🇲🇾',
    tweet_url: '#',
  },
  {
    id: '4', author_name: 'Syafiq Rahman', author_handle: '@syafiqdev',
    author_avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Syafiq',
    content: 'Got my first grant through Superteam Malaysia. The network effect here is insane — one intro led to a full-time role at a Solana startup.',
    tweet_url: '#',
  },
]

export const mockFAQs: FAQItem[] = [
  { id: '1', question: 'What is Superteam Malaysia?', answer: 'Superteam Malaysia is the local chapter of the global Superteam network, dedicated to empowering builders, creators, founders, and talent in the Solana ecosystem. We connect talent with opportunities and grow the Web3 ecosystem through events, education, and collaboration.', order: 1 },
  { id: '2', question: 'How do I join?', answer: 'Join our Discord or Telegram community, attend our events, and start participating in bounties and discussions. You can also apply to become a verified member through our website.', order: 2 },
  { id: '3', question: 'What opportunities are available?', answer: 'We offer bounties, hackathons, grants, mentorship programs, job referrals, and networking opportunities with leading Solana projects globally.', order: 3 },
  { id: '4', question: 'How can projects collaborate with us?', answer: 'Projects can partner with us to run bounties, sponsor events, access our talent pool, and co-create educational content. Reach out via our contact form or Discord.', order: 4 },
  { id: '5', question: 'Do I need to be a developer to join?', answer: 'Not at all! We welcome designers, content creators, marketers, business developers, and anyone passionate about Web3 and the Solana ecosystem.', order: 5 },
]
