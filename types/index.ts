export type SkillTag =
  | 'Rust' | 'Frontend' | 'Design' | 'Content' | 'Growth'
  | 'Product' | 'Community' | 'BizDev' | 'Ops' | 'Strategy'

export interface Member {
  id: string
  name: string
  role: string
  company: string
  photo_url: string
  twitter: string
  skills: SkillTag[]
  is_core_team: boolean
  is_featured: boolean
  hackathon_wins: number
  bounties_completed: number
  grants_received: number
  bio: string
  created_at: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time_start: string
  time_end: string
  timezone: string
  location: string
  organizer: string
  image_url: string
  luma_url: string
  is_upcoming: boolean
  created_at: string
}

export interface Partner {
  id: string
  name: string
  logo_url: string
  website_url: string
  category: string
}

export interface Testimonial {
  id: string
  author_name: string
  author_handle: string
  author_avatar: string
  content: string
  tweet_url: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  order: number
}
