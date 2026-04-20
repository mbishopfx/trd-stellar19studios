import Header from '@/components/Header';
import LeadForm from '@/components/LeadForm';
import { Mic2, Music, Waves, Zap } from 'lucide-react';

export default function AudioService() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Header />
      
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest text-primary font-black">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Sonic Superiority
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none text-white">
              AUDIO <br /><span className="text-primary">ENGINEERING.</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60 mb-8 leading-relaxed font-light">
              Don't let amateur sound kill your signal. Our audio weaponization suite transforms raw recordings into broadcast-ready masterpieces. We specialize in vocal clarity, multi-track mixing, and the aggressive mastering required to stand out on Spotify, Apple Podcasts, and beyond.
            </p>
            <div className="flex gap-4">
              <div className="glass p-4 rounded-xl flex flex-col gap-2 flex-1">
                <Waves className="text-primary" size={24} />
                <span className="text-[10px] font-black uppercase text-white/40">Mastering</span>
                <span className="text-xs font-bold text-white uppercase italic">LUFS Optimized</span>
              </div>
              <div className="glass p-4 rounded-xl flex flex-col gap-2 flex-1">
                <Mic2 className="text-primary" size={24} />
                <span className="text-[10px] font-black uppercase text-white/40">Cleanup</span>
                <span className="text-xs font-bold text-white uppercase italic">AI Noise Removal</span>
              </div>
            </div>
          </div>
          <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/5 font-black text-[12rem] italic rotate-12 select-none">AUDIO</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="aggressive-border pl-6 mb-16">
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tight">The <span className="text-primary">Process</span></h2>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Surgical Precision Engineering</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Restoration", 
                desc: "Removing room hum, fan noise, and unwanted transients to ensure a pristine floor for your voice.",
                icon: Zap
              },
              { 
                title: "Vocal Polishing", 
                desc: "Advanced compression and EQ curves designed to make your voice sound authoritative and rich.",
                icon: Mic2
              },
              { 
                title: "Sound Design", 
                desc: "Custom intro/outro integration and dynamic scoring to keep your audience engaged.",
                icon: Music
              },
              { 
                title: "Final Master", 
                desc: "Loudness normalization for all major platforms ensuring consistent quality across every device.",
                icon: Waves
              }
            ].map((spec, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:border-primary/40 transition-all group">
                <spec.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-black italic text-white mb-3 uppercase tracking-tighter">{spec.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic text-white mb-4">SOUND <span className="text-primary">ELITE.</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Inquire about our audio production packages.</p>
        </div>
        <LeadForm />
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase italic">
          Stellar19 Studios // Audio Engineering // Powered by Mile21Media
        </p>
      </footer>
    </main>
  );
}
