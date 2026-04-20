import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Header />
      
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="aggressive-border pl-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 leading-none text-white">
              PRIVACY <span className="text-primary">POLICY.</span>
            </h1>
            <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">Data Signal Protection</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-12">
            <div className="space-y-4">
              <h2 className="text-xl font-black italic text-white uppercase tracking-tight">1. Information Transmission</h2>
              <p className="text-white/60 leading-relaxed font-light">
                When you engage with Stellar19 Studios through our inquiry forms or booking systems, we collect essential data points including your name, email address, phone number, and project details. This signal is used exclusively to facilitate your production needs and coordinate studio logistics.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black italic text-white uppercase tracking-tight">2. Signal Processing</h2>
              <p className="text-white/60 leading-relaxed font-light">
                Your data is processed to:
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Respond to project inquiries and booking requests.</li>
                  <li>Deliver high-fidelity production updates and studio notifications.</li>
                  <li>Maintain secure administrative records of studio occupancy.</li>
                  <li>Improve our broadcast and streaming environment infrastructure.</li>
                </ul>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black italic text-white uppercase tracking-tight">3. Data Encryption & Security</h2>
              <p className="text-white/60 leading-relaxed font-light">
                We employ industry-standard encryption protocols to protect your information during transmission. Access to your data is restricted to authorized Stellar19 and Mile21Media production staff. We do not sell, trade, or leak your signal to external third parties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black italic text-white uppercase tracking-tight">4. Third-Party Integrations</h2>
              <p className="text-white/60 leading-relaxed font-light">
                Our infrastructure utilizes Supabase for secure data storage and Vercel for edge-delivery hosting. These partners maintain their own high-level security standards. We also utilize Vercel Analytics to monitor site health and traffic signals anonymously.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black italic text-white uppercase tracking-tight">5. Terminal Command</h2>
              <p className="text-white/60 leading-relaxed font-light">
                You have the right to request the deletion of your personal signal from our database at any time. For such requests, please contact info@stellar19studios.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase italic">
          Last Protocol Update: April 2026
        </p>
      </footer>
    </main>
  );
}
