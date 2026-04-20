import Header from '@/components/Header';
import LeadForm from '@/components/LeadForm';
import { Camera, Film, Monitor, Scissors } from 'lucide-react';

export default function VideoService() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Header />
      
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest text-primary font-black">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Cinematic Execution
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none text-white">
              VIDEO <br /><span className="text-primary">PRODUCTION.</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60 mb-8 leading-relaxed font-light">
              We don't just "edit" video. We architect visual experiences. Our post-production pipeline is optimized for high-retention content, featuring cinematic color grading, multi-cam synchronization, and custom motion graphics that keep your viewers locked onto the signal.
            </p>
            <div className="flex gap-4">
              <div className="glass p-4 rounded-xl flex flex-col gap-2 flex-1">
                <Scissors className="text-primary" size={24} />
                <span className="text-[10px] font-black uppercase text-white/40">Editing</span>
                <span className="text-xs font-bold text-white uppercase italic">High-Retention Cuts</span>
              </div>
              <div className="glass p-4 rounded-xl flex flex-col gap-2 flex-1">
                <Monitor className="text-primary" size={24} />
                <span className="text-[10px] font-black uppercase text-white/40">Grading</span>
                <span className="text-xs font-bold text-white uppercase italic">4K Color Mastering</span>
              </div>
            </div>
          </div>
          <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/5 font-black text-[12rem] italic -rotate-12 select-none">VIDEO</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="aggressive-border pl-6 mb-16">
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tight">Visual <span className="text-primary">Mastery</span></h2>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Cinematic Post-Production Workflow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Color Correction", 
                desc: "Precision matching across all camera angles with custom LUTs for a signature studio look.",
                icon: Camera
              },
              { 
                title: "Motion Graphics", 
                desc: "Custom lower thirds, transitions, and call-to-actions designed to elevate your brand.",
                icon: Film
              },
              { 
                title: "Rhythm Editing", 
                desc: "Psychology-driven cutting that maintains high audience engagement and minimizes drop-off.",
                icon: Scissors
              },
              { 
                title: "Quality Control", 
                desc: "Rigorous 4K export protocols ensuring your content looks elite on every screen size.",
                icon: Monitor
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
          <h2 className="text-5xl md:text-7xl font-black italic text-white mb-4">VISUAL <span className="text-primary">DOMINANCE.</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Secure your post-production pipeline today.</p>
        </div>
        <LeadForm />
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase italic">
          Stellar19 Studios // Video Production // Powered by Mile21Media
        </p>
      </footer>
    </main>
  );
}
