"use client";

import Link from 'next/link';
import { motion } from "framer-motion";

import Image from 'next/image';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-5 flex items-center justify-between"
    >
      <Link href="/" className="flex items-center gap-4 group">
        <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
          <Image 
            src="/assets/logos/stellar19studioslogo.png" 
            alt="Stellar19 Logo" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-black text-2xl tracking-tighter italic drop-shadow-[0_0_15px_rgba(255,0,127,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(255,0,127,0.8)] transition-all duration-500">
            STELLAR19
          </span>
          <span className="text-white font-black text-[8px] tracking-[0.4em] hidden sm:inline opacity-40 group-hover:opacity-100 transition-opacity">
            STUDIOS
          </span>
        </div>
      </Link>
      
      <nav className="hidden md:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase">
        <Link href="/#studio-availability" className="text-white/40 hover:text-primary transition-all duration-300">The Spaces</Link>
        <Link href="/extra-services" className="text-white/40 hover:text-primary transition-all duration-300">Production</Link>
        <Link href="/about" className="text-white/40 hover:text-primary transition-all duration-300">The Team</Link>
        <Link href="/#contact" className="px-6 py-2 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-full">
          Book Frequency
        </Link>
      </nav>

      <div className="flex items-center gap-6">
        <Link href="/admin" className="text-[10px] text-white/20 hover:text-white transition-colors uppercase font-mono tracking-tighter">
          Admin_Portal
        </Link>
      </div>
    </motion.header>
  );
}
