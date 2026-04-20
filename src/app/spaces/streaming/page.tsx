import Header from '@/components/Header';
import LeadForm from '@/components/LeadForm';
import { Wifi, Cpu, Play, Globe } from 'lucide-react';

export default function StreamingSpace() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest text-primary font-black">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Direct-to-Consumer Dominance
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none text-white">
              THE <span className="text-primary">SIGNAL.</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60 mb-8 leading-relaxed font-light">
              Zero lag. Maximum impact. The Signal is our dedicated live-streaming suite, built for creators who command the global stage. Equipped with dedicated symmetric fiber, 4K OBS-ready workflows, and multi-angle broadcast lighting, we ensure your stream never drops a single frame.
            </p>
            <div className="flex gap-4">
              <div className="glass p-4 rounded-xl flex flex-col gap-2 flex-1">
                <Wifi className="text-primary" size={24} />
                <span className="text-[10px] font-black uppercase text-white/40">Network</span>
                <span className="text-xs font-bold text-white uppercase italic">Dedicated 1Gb Fiber</span>
              </div>
              <div className="glass p-4 rounded-xl flex flex-col gap-2 flex-1">
                <Cpu className="text-primary" size={24} />
                <span className="text-[10px] font-black uppercase text-white/40">Engine</span>
                <span className="text-xs font-bold text-white uppercase italic">Dual-PC Broadcast</span>
              </div>
            </div>
          </div>
          <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/5 font-black text-[12rem] italic rotate-45 select-none">SIGNAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="aggressive-border pl-6 mb-16">
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tight">Broadcast <span className="text-primary">Standard</span></h2>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Bulletproof Stream Infrastructure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Throughput", 
                desc: "Symmetric 1Gbps dedicated fiber line with cellular failover for 100% stream uptime.",
                icon: Wifi
              },
              { 
                title: "Encoding", 
                desc: "NVIDIA-powered encoding stations optimized for high-bitrate Twitch and YouTube 4K delivery.",
                icon: Cpu
              },
              { 
                title: "Interactivity", 
                desc: "Large-format audience feedback monitors and integrated Stream Deck controls at every station.",
                icon: Play
              },
              { 
                title: "Reach", 
                desc: "Multi-stream capabilities across all platforms simultaneously with zero latency penalty.",
                icon: Globe
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

      {/* CTA / Booking */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic text-white mb-4">LIVE <span className="text-primary">NOW.</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Claim your frequency in The Signal.</p>
        </div>
        <LeadForm />
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase italic">
          Stellar19 Studios // The Signal // Washington D.C.
        </p>
      </footer>
    </main>
  );
}
