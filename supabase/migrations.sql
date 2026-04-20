-- Site Content Table
CREATE TABLE IF NOT EXISTS public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  type TEXT DEFAULT 'text', -- 'text', 'image', 'url'
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Studio Spaces Table
CREATE TABLE IF NOT EXISTS public.studio_spaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  slug TEXT UNIQUE NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT, -- 'podcast', 'photo', 'streaming', 'production'
  message TEXT,
  status TEXT DEFAULT 'new', -- 'new', 'contacted', 'closed'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Client Logos
CREATE TABLE IF NOT EXISTS public.client_logos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  image_path TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Studio Gallery
CREATE TABLE IF NOT EXISTS public.studio_gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_path TEXT NOT NULL,
  alt_text TEXT,
  category TEXT DEFAULT 'studio', -- 'studio', 'behind-the-scenes'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS Policies (Enable Read for All, Write for Authenticated)
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read" ON public.site_content FOR SELECT USING (true);
CREATE POLICY "Admin All" ON public.site_content FOR ALL USING (auth.uid() = '3f674973-4196-4ecc-b159-001da23e5bec');

ALTER TABLE public.studio_spaces ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read" ON public.studio_spaces FOR SELECT USING (true);
CREATE POLICY "Admin All" ON public.studio_spaces FOR ALL USING (auth.uid() = '3f674973-4196-4ecc-b159-001da23e5bec');

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Insert" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin All" ON public.leads FOR ALL USING (auth.uid() = '3f674973-4196-4ecc-b159-001da23e5bec');

ALTER TABLE public.client_logos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read" ON public.client_logos FOR SELECT USING (true);
CREATE POLICY "Admin All" ON public.client_logos FOR ALL USING (auth.uid() = '3f674973-4196-4ecc-b159-001da23e5bec');

ALTER TABLE public.studio_gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read" ON public.studio_gallery FOR SELECT USING (true);
CREATE POLICY "Admin All" ON public.studio_gallery FOR ALL USING (auth.uid() = '3f674973-4196-4ecc-b159-001da23e5bec');

-- Seed Initial Content
INSERT INTO public.site_content (key, value) VALUES
('hero_h1_top', 'STOP WHISPERING.'),
('hero_h1_bottom', 'START SCREAMING.'),
('hero_p', 'You’ve got the voice. We’ve got the iron. Stellar19 is the only full-stack content house built for creators who refuse to be ignored.'),
('mile21_h2', 'WEAPONIZE YOUR CONTENT.'),
('mile21_p', 'Raw footage is just potential energy. Mile21Media turns your sessions into viral munitions. Audio mastering, 4K post-production, and social clips that rip through the algorithm.')
ON CONFLICT (key) DO NOTHING;

-- Seed Spaces
INSERT INTO public.studio_spaces (title, description, slug, order_index) VALUES
('THE CAGE', '4K eyes. 32-bit ears. This isn''t a basement. It''s a broadcast-ready war room for 1-4 people.', 'podcast', 1),
('THE FLASH', 'Pure light. Zero excuses. Multi-backdrop sets that make your vision hit like a lariat.', 'photography', 2),
('THE SIGNAL', 'Zero lag. Dedicated fiber. Direct-to-consumer dominance. OBS-ready and bulletproof.', 'streaming', 3)
ON CONFLICT (slug) DO NOTHING;
