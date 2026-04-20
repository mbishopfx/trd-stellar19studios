"use client";

import Link from 'next/link';
import { motion } from "framer-motion";

interface StudioCardProps {
  title: string;
  description: string;
  icon?: string;
  href: string;
  imageAlt?: string;
}

export default function StudioCard({ title, description, href }: StudioCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass group relative overflow-hidden rounded-2xl transition-all hover:border-primary/50 border-white/5"
    >
      <div className="aspect-video bg-secondary overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
        <div className="flex items-center justify-center h-full text-white/5 uppercase font-black text-7xl italic -rotate-12 pointer-events-none select-none group-hover:text-primary/10 transition-colors duration-700">
          {title}
        </div>
        {/* Animated Neon Glow on Hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-8 relative z-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-3xl font-black italic tracking-tighter text-white group-hover:text-primary transition-colors leading-none">
            {title}
          </h3>
          <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-primary group-hover:shadow-[0_0_10px_#FF007F] transition-all" />
        </div>
        <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">
          {description}
        </p>
        <Link 
          href={href} 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-primary transition-all"
        >
          View Specs & Availability 
          <motion.span 
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-lg leading-none ml-2"
          >
            →
          </motion.span>
        </Link>
      </div>
      
      {/* Interactive Background Gradient */}
      <motion.div 
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
}
