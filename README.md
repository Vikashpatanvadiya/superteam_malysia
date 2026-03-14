# Superteam Malaysia

Official website for Superteam Malaysia — the home for Solana builders in Malaysia.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database/CMS**: Supabase
- **Events**: Luma integration
- **Language**: TypeScript

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page (Hero, Mission, Stats, Events, Members, Partners, Testimonials, FAQ, CTA) |
| `/members` | Full member directory with search & skill filters |
| `/admin` | CMS dashboard (password: `admin` for demo) |

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_LUMA_CALENDAR_ID=your_luma_calendar_id
```

## Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL in `lib/supabase-schema.sql` in the Supabase SQL editor
3. Add your Supabase URL and anon key to `.env.local`
4. Replace mock data in `app/page.tsx` with Supabase queries

## Luma Integration

Set `NEXT_PUBLIC_LUMA_CALENDAR_ID` to your Luma calendar ID to embed the events widget. Events also display from the Supabase `events` table.

## Deployment

```bash
npm run build
```

Deploy to Vercel: connect your GitHub repo and add environment variables in the Vercel dashboard.
