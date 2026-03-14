-- Superteam Malaysia — Supabase Schema

create table members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  company text,
  photo_url text,
  twitter text,
  skills text[] default '{}',
  is_core_team boolean default false,
  is_featured boolean default false,
  hackathon_wins int default 0,
  bounties_completed int default 0,
  grants_received int default 0,
  bio text,
  created_at timestamptz default now()
);

create table events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  date date not null,
  time_start text,
  time_end text,
  timezone text default 'GMT+8',
  location text,
  organizer text,
  image_url text,
  luma_url text,
  is_upcoming boolean default true,
  created_at timestamptz default now()
);

create table partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  website_url text,
  category text
);

create table testimonials (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_handle text,
  author_avatar text,
  content text not null,
  tweet_url text
);

create table faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  "order" int default 0
);

-- Enable Row Level Security
alter table members enable row level security;
alter table events enable row level security;
alter table partners enable row level security;
alter table testimonials enable row level security;
alter table faqs enable row level security;

-- Public read access
create policy "Public read members" on members for select using (true);
create policy "Public read events" on events for select using (true);
create policy "Public read partners" on partners for select using (true);
create policy "Public read testimonials" on testimonials for select using (true);
create policy "Public read faqs" on faqs for select using (true);
