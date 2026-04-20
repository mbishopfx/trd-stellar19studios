import Header from '@/components/Header';

export default function About() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary overflow-hidden">
      <Header />
      
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 text-[20vw] font-black italic text-white/[0.02] select-none pointer-events-none -translate-y-1/4 translate-x-1/4">
          ARENA
        </div>

        <div className="aggressive-border pl-6 mb-16 relative z-10">
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-4 leading-none">
            THE <span className="text-primary">MANIFESTO.</span>
          </h1>
          <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">
            Stellar19 x Mile21Media
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black italic uppercase tracking-tight text-white">
                MOST STUDIOS ARE BUILT FOR PEOPLE WHO WANT TO BE HEARD.
              </h2>
              <p className="text-primary text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.85]">
                WE’RE BUILT FOR PEOPLE <br />
                WHO WANT TO BE <span className="underline decoration-white/20">REMEMBERED.</span>
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border-white/10 space-y-6">
              <h3 className="text-xl font-black italic text-white uppercase">BORN FROM GRIT.</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Mile21Media didn't start in a boardroom. It started in the trenches of high-output media production where every frame and every frequency is a weapon. We saw the gap: creators were being sold high-end gear but were getting zero energy.
              </p>
              <p className="text-white/60 leading-relaxed font-light">
                We fixed it. Stellar19 is the physical manifestation of that intensity. It’s not just a room with cameras; it’s an arena where your content is forged into something undeniable.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="glass p-8 rounded-2xl border-primary/20 bg-primary/5 space-y-6">
              <h3 className="text-xl font-black italic text-primary uppercase">NOT A BASEMENT. AN ARENA.</h3>
              <p className="text-white/80 leading-relaxed font-bold">
                We don't do "cozy." We do "capable."
              </p>
              <ul className="space-y-4 text-sm font-black uppercase tracking-widest">
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-primary" /> 4K Cinema-Grade Glass
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-primary" /> 32-Bit Float Audio (Zero Clipping)
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-primary" /> Dedicated Symmetric 1Gbps Fiber
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-primary" /> Intelligent RGB Control
                </li>
              </ul>
            </div>

            <div className="p-8 border-l-2 border-white/10 space-y-6">
              <h3 className="text-xl font-black italic text-white uppercase">THE MISSION.</h3>
              <p className="text-white/40 leading-relaxed font-light italic">
                "Our goal isn't to help you make a video. Our goal is to help you own the category. We provide the infrastructure, the engineering, and the sheer aggressive output required to win in the attention economy."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black italic">
                  S19
                </div>
                <div>
                  <div className="text-white font-black uppercase text-xs">The Stellar19 Team</div>
                  <div className="text-white/30 font-mono text-[10px] uppercase">Built for Battle</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 pt-24 border-t border-white/5 text-center">
          <h2 className="text-5xl md:text-7xl font-black italic text-white mb-8 tracking-tighter">
            READY TO TAKE <br /><span className="text-primary">THE TITLE?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="neon-btn px-16 py-6 text-xl">
              Book the Arena
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </main>
  );
}
