import Header from '@/components/Header';
import LeadForm from '@/components/LeadForm';
import { Mail, MapPin } from 'lucide-react';

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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Header />
      
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="aggressive-border pl-6 mb-12">
                <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 leading-none text-white">
                  OPEN THE <br /><span className="text-primary">SIGNAL.</span>
                </h1>
                <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">Inbound Production Inquiries</p>
              </div>

              <div className="space-y-12 mb-16">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Direct Frequency</h3>
                    <p className="text-lg font-bold text-white italic">info@stellar19studios.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Base of Operations</h3>
                    <p className="text-lg font-bold text-white italic">Washington D.C. Metropolitan Area</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Visual Log</h3>
                    <a href="https://www.instagram.com/stellar19studios" target="_blank" className="text-lg font-bold text-white italic hover:text-primary transition-colors">@stellar19studios</a>
                  </div>
                </div>
              </div>

              <div className="p-8 glass rounded-3xl border-primary/10">
                <p className="text-sm text-white/50 leading-relaxed italic">
                  "Production is the difference between a voice in the dark and a signal that cuts through the noise. We don't just book time; we build empires."
                </p>
                <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-primary">— Dave Sturchio, Founder</p>
              </div>
            </div>

            <div className="glass p-12 rounded-3xl border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
              <div className="relative z-10">
                <h2 className="text-2xl font-black italic text-white uppercase mb-8">Lock In Your Frequency</h2>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase italic">
          © 2026 STELLAR19 STUDIOS. ALL TRANSMISSIONS ENCRYPTED.
        </p>
      </footer>
    </main>
  );
}
