# Superteam Malaysia

Official website for Superteam Malaysia — a community of builders, developers, designers, and founders growing the Solana ecosystem in Malaysia.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase](https://supabase.com/) (database + auth)
- [Lucide React](https://lucide.dev/) (icons)

## Project Structure

```
superteam-malaysia/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── members/          # Members directory page
│   └── admin/            # Admin dashboard
├── components/           # Reusable UI components
│   ├── Hero.tsx
│   ├── Mission.tsx
│   ├── Stats.tsx
│   ├── Events.tsx
│   ├── Gallery.tsx
│   ├── MembersSection.tsx
│   ├── Partners.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── supabase.ts        # Supabase client
│   ├── data.ts            # Fallback mock data
│   └── supabase-schema.sql
└── public/               # Static assets
```

## Getting Started

### 1. Install dependencies

```bash
cd superteam-malaysia
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the `superteam-malaysia/` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> If Supabase is not configured, the app falls back to mock data automatically.

### 3. Set up the database (optional)

Run the SQL schema in your Supabase project:

```bash
# Copy the contents of lib/supabase-schema.sql and run it in the Supabase SQL editor
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Database Schema

The app uses Supabase with the following tables:

- `members` — community members with skills, roles, and stats
- `events` — upcoming and past events
- `partners` — ecosystem partners and sponsors
- `testimonials` — community testimonials
- `faqs` — frequently asked questions

All tables have public read access via Row Level Security policies.

## Deployment

Deploy easily on [Vercel](https://vercel.com):

1. Push the repo to GitHub
2. Import the project on Vercel
3. Set the root directory to `superteam-malaysia`
4. Add the environment variables
5. Deploy

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## Links

- [Superteam Global](https://superteam.fun)
- [Superteam Earn](https://earn.superteam.fun)
- [Solana Foundation](https://solana.org)
