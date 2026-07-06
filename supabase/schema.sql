-- Run this in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.memories (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  message text not null check (char_length(message) between 1 and 1000),
  image_url text,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists memories_approved_created_idx
  on public.memories (approved, created_at desc);

alter table public.memories enable row level security;

create policy "Anyone can read approved memories"
  on public.memories for select
  using (approved = true);

-- Storage bucket for memory photos (create in Dashboard → Storage if needed)
-- Bucket name: memory-photos (public)
