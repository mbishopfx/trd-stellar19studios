import Header from '@/components/Header';

const services = [
  { id: 'eng', name: 'Dedicated Corner Man', price: 65, unit: 'hour', description: 'Professional audio/video switcher to manage your entire session. You talk, we tech.' },
  { id: 'edit', name: 'Viral Munitions', price: 150, unit: 'session', description: '5-10 high-impact vertical clips optimized to rip through TikTok and Reels.' },
  { id: 'raw', name: 'The Master Key', price: 25, unit: 'session', description: 'Instant transfer of all raw 4K source files. No waiting, no cloud lag.' },
  { id: 'guest', name: 'Global Signal', price: 45, unit: 'session', description: 'Bring in heavy-hitters from anywhere in the world with zero-lag integration.' },
  { id: 'thumb', name: 'The Big Hook', price: 85, unit: 'item', description: 'Aggressive, high-CTR YouTube thumbnails that stop the scroll dead.' },
];

export default function ExtraServices() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary">
      <Header />
      
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="aggressive-border pl-6 mb-16">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 leading-none">
            STACK <span className="text-primary">THE DECK.</span>
          </h1>
          <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">
            Main Event Add-ons
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Pricing Box */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-10 rounded-2xl border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-primary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-neon">
                  Standard Rate
                </span>
              </div>
              
              <h2 className="text-4xl font-black italic mb-6">BASE STUDIO TIME</h2>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-7xl font-black text-primary tracking-tighter">$100</span>
                <span className="text-white/40 font-bold uppercase tracking-widest text-sm">/ Hour</span>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-white/60">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> All Equipment Provided
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Professional Lighting
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Soundproofed Sets
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Fiber Internet (1Gbps)
                </li>
              </ul>
            </div>

            <div id="pricing-calculator" className="space-y-4" data-agent="extra-services">
              <h3 className="text-xl font-black italic uppercase tracking-tight mb-6 flex items-center gap-4">
                ADD-ON SERVICES <div className="h-px flex-1 bg-white/10" />
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service) => (
                  <div key={service.id} className="glass p-6 rounded-xl border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-white/20 transition-all group">
                    <div>
                      <h4 className="text-lg font-black italic text-white group-hover:text-primary transition-colors uppercase leading-tight">
                        {service.name}
                      </h4>
                      <p className="text-white/40 text-xs mt-1 leading-relaxed max-w-md">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="block text-2xl font-black text-white italic tracking-tighter leading-none">
                          ${service.price}
                        </span>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">
                          per {service.unit}
                        </span>
                      </div>
                      <button className="bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-[10px] font-black uppercase px-4 py-2 transition-all">
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border-white/10 sticky top-32">
              <h3 className="text-2xl font-black italic mb-6">READY TO <br /><span className="text-primary">DOMINATE?</span></h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Book your first session today and get a complimentary channel audit by the Mile21Media team.
              </p>
              
              <div className="space-y-4">
                <button className="neon-btn w-full py-4">
                  Check Availability
                </button>
                <button className="w-full py-4 text-xs font-black uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all">
                  Contact Sales
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold mb-4">
                  Studio Specs
                </div>
                <div className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-white/60">
                  <div className="flex justify-between">
                    <span>Resolution</span>
                    <span className="text-white">4K / 60FPS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audio</span>
                    <span className="text-white">32-bit Float</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network</span>
                    <span className="text-white">Sym. Fiber</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
