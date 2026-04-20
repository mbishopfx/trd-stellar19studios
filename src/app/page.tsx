"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from '@/components/Header';
import StudioCard from '@/components/StudioCard';
import LogoCarousel from '@/components/LogoCarousel';
import StudioGallery from '@/components/StudioGallery';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import { supabase } from "@/lib/supabase";

const InstagramIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Home() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [spaces, setSpaces] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [contentRes, spacesRes] = await Promise.all([
        supabase.from("site_content").select("key, value"),
        supabase.from("studio_spaces").select("*").order("order_index")
      ]);

      if (contentRes.data) {
        const contentMap = contentRes.data.reduce((acc, item) => {
          acc[item.key] = item.value;
          return acc;
        }, {} as Record<string, string>);
        setContent(contentMap);
      }

      if (spacesRes.data && spacesRes.data.length > 0) {
        setSpaces(spacesRes.data);
      }
    }
    fetchData();
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-primary font-black animate-pulse"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Live Now: Production Ready
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-[10rem] font-black italic tracking-tighter mb-4 leading-[0.8] text-white"
          >
            {content.hero_h1_top || "STOP"} <span className="text-primary drop-shadow-[0_0_30px_rgba(255,0,127,0.5)]">{content.hero_h1_bottom || "WHISPERING."}</span>
          </motion.h1>
          
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light tracking-wide"
          >
            {content.hero_p || "You’ve got the voice. We’ve got the iron. Stellar19 is the only full-stack content house built for creators who refuse to be ignored."}
          </motion.p>
          
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="neon-btn text-lg group px-10 py-4">
              Book Studio Time <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
            </button>
            <button className="glass px-10 py-4 text-sm font-black uppercase tracking-widest hover:border-white/30 transition-all">
              Studio Tour
            </button>
          </motion.div>
        </div>
        
        <div className="absolute -top-48 -right-48 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />
      </section>

      <LogoCarousel />

      {/* The Spaces Section */}
      <section id="studio-availability" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4"
        >
          <div className="aggressive-border pl-6">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tight text-white mb-2 leading-none">
              THE <span className="text-primary">SPACES</span>
            </h2>
            <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">
              Select Your Environment
            </p>
          </div>
          <div className="text-white/30 text-xs font-mono max-w-xs text-right leading-relaxed hidden md:block">
            Professional soundproofing, studio lighting, and high-fidelity acoustics in every room.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.length > 0 ? (
            spaces.map((space) => (
              <StudioCard 
                key={space.id}
                title={space.title}
                description={space.description}
                href={`/spaces/${space.slug}`}
              />
            ))
          ) : (
            <>
              <StudioCard 
                title="THE CAGE"
                description="4K eyes. 32-bit ears. This isn't a basement. It's a broadcast-ready war room for 1-4 people."
                href="/spaces/podcast"
              />
              <StudioCard 
                title="THE FLASH"
                description="Pure light. Zero excuses. Multi-backdrop sets that make your vision hit like a lariat."
                href="/spaces/photography"
              />
              <StudioCard 
                title="THE SIGNAL"
                description="Zero lag. Dedicated fiber. Direct-to-consumer dominance. OBS-ready and bulletproof."
                href="/spaces/streaming"
              />
            </>
          )}
        </div>
      </section>

      <StudioGallery />

      {/* Mile21Media Integration Section */}
      <section className="bg-secondary/30 py-32 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-7xl font-black italic text-white mb-6 leading-none tracking-tight">
              {content.mile21_h2?.split(' ')[0] || "WEAPONIZE"} <br />
              <span className="text-primary italic font-black">{content.mile21_h2?.split(' ').slice(1).join(' ') || "YOUR CONTENT."}</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
              {content.mile21_p || "Raw footage is just potential energy. Mile21Media turns your sessions into viral munitions. Audio mastering, 4K post-production, and social clips that rip through the algorithm."}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm font-bold uppercase tracking-widest text-white/80">
              {["Audio Engineering", "4K Post-Production", "Social Clip Ripping", "Channel Management"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rotate-45" /> {item}
                </li>
              ))}
            </ul>
            <button className="neon-btn">View Production Rates</button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full aspect-square glass rounded-3xl flex items-center justify-center p-12 border-primary/20 relative group"
          >
            <div className="text-white/5 font-black text-9xl italic select-none rotate-12 group-hover:text-primary/10 transition-colors duration-700">PRODUCING</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-primary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / Lead Form Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic text-white mb-4">LOCK IN <span className="text-primary">YOUR DATE.</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">The calendar is aggressive. Secure your frequency now.</p>
        </div>
        <LeadForm />
      </section>
      
      {/* Footer */}
      <footer className="pt-32 pb-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
          <div className="max-w-sm">
            <span className="text-primary font-black text-4xl tracking-tighter italic block mb-6">STELLAR19</span>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              The premium destination for podcasters, streamers, and photographers. Aggressive production for aggressive creators. Built on the Mile21Media infrastructure.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/stellar19studios" 
                target="_blank"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all group"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="https://www.instagram.com/davesturchio/" 
                target="_blank"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all group"
              >
                <InstagramIcon size={20} className="opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6 italic">Studio</h4>
              <nav className="flex flex-col gap-4 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                <Link href="/spaces/podcast" className="hover:text-primary">Podcast Room</Link>
                <Link href="/spaces/photography" className="hover:text-primary">Photo Room</Link>
                <Link href="/spaces/streaming" className="hover:text-primary">Streaming Room</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6 italic">Media</h4>
              <nav className="flex flex-col gap-4 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                <Link href="/services/audio" className="hover:text-primary">Audio Master</Link>
                <Link href="/services/video" className="hover:text-primary">Video Post</Link>
                <Link href="/services/social" className="hover:text-primary">Social Ripping</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6 italic">Company</h4>
              <nav className="flex flex-col gap-4 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                <Link href="/about" className="hover:text-primary">The Team</Link>
                <Link href="/contact" className="hover:text-primary">Location</Link>
                <Link href="/admin" className="hover:text-primary text-primary/50">Admin</Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] text-white/20 font-mono tracking-widest uppercase">
          <p>© 2026 STELLAR19 STUDIOS. ALL RIGHTS RESERVED. POWERED BY MILE21MEDIA.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary cursor-pointer">Privacy Protocol</Link>
            <span className="hover:text-primary cursor-pointer">Terms of Signal</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
