"use client";

import { useEffect, useState } from "react";
import Header from '@/components/Header';
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Save, Download, Users, FileText, Image as ImageIcon, CheckCircle, Trash2, Activity, Box } from "lucide-react";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"content" | "leads" | "gallery" | "analytics" | "spaces">("content");
  const [content, setContent] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [traffic, setTraffic] = useState<any[]>([]);
  const [spaces, setSpaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const ADMIN_PASS = "STELLARTRD";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setIsLoggedIn(true);
      localStorage.setItem("admin_auth", "true");
    } else {
      alert("SIGNAL DENIED: INVALID CLEARANCE.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("admin_auth") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, activeTab]);

  async function fetchData() {
    setLoading(true);
    if (activeTab === "content") {
      const { data } = await supabase.from("site_content").select("*").order("key");
      setContent(data || []);
    } else if (activeTab === "leads") {
      const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
      setLeads(data || []);
    } else if (activeTab === "analytics") {
      const { data } = await supabase.from("site_traffic").select("*").order("created_at", { ascending: false }).limit(50);
      setTraffic(data || []);
    } else if (activeTab === "spaces") {
      const { data } = await supabase.from("studio_spaces").select("*").order("order_index");
      setSpaces(data || []);
    }
    setLoading(false);
  }

  const handleUpdateSpace = async (id: string, updates: any) => {
    setSaving(true);
    await supabase.from("studio_spaces").update(updates).eq("id", id);
    fetchData();
    setSaving(false);
  };

  const handleUpdateContent = async (key: string, value: string) => {
    setSaving(true);
    const { error } = await supabase.from("site_content").update({ value }).eq("key", key);
    if (error) alert("FAILED TO TRANSMIT.");
    else fetchData();
    setSaving(false);
  };

  const exportLeads = () => {
    const csv = [
      ["Name", "Email", "Service", "Message", "Status", "Date"],
      ...leads.map(l => [l.name, l.email, l.service, l.message, l.status, new Date(l.created_at).toLocaleDateString()])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "stellar19-leads.csv";
    a.click();
  };

  const deleteLead = async (id: string) => {
    if (!confirm("DELETE SIGNAL?")) return;
    await supabase.from("leads").delete().eq("id", id);
    fetchData();
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="w-full max-w-md glass p-12 rounded-2xl border-primary/20">
          <div className="text-center mb-8">
            <span className="text-primary font-black text-3xl italic tracking-tighter">STELLAR19</span>
            <h1 className="text-white font-black text-xl italic uppercase mt-4">Security Clearance Required</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              placeholder="ENTER PASSCODE"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full glass bg-white/5 border-white/10 p-4 text-white focus:border-primary outline-none text-center font-bold tracking-widest"
            />
            <button type="submit" className="neon-btn w-full py-4 text-lg">ACCESS COMMAND CENTER</button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary">
      <Header />
      
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="aggressive-border pl-6 mb-16 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-2 leading-none">
              COMMAND <span className="text-primary">CENTER.</span>
            </h1>
            <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">
              Production Management System
            </p>
          </div>
          <button 
            onClick={() => {
              localStorage.removeItem("admin_auth");
              setIsLoggedIn(false);
            }}
            className="flex items-center gap-2 p-3 glass text-white/40 hover:text-red-500 transition-colors uppercase font-black text-[10px] tracking-widest"
          >
            <LogOut size={14} /> Sever Link
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: "content", label: "Content Editor", icon: FileText },
              { id: "leads", label: "Lead Pipeline", icon: Users },
              { id: "spaces", label: "Spaces Manager", icon: Box },
              { id: "analytics", label: "Live Traffic", icon: Activity },
              { id: "gallery", label: "Media Vault", icon: ImageIcon },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 p-4 rounded text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab.id ? "glass border-primary/40 text-primary" : "text-white/40 hover:text-white"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === "content" && (
                <motion.div 
                  key="content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="glass p-8 rounded-2xl border-white/5">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xl font-black italic uppercase tracking-tight">PAGE FRAGMENT EDITOR</h2>
                      {loading && <span className="text-primary animate-pulse text-[10px] font-black italic uppercase">Syncing...</span>}
                    </div>
                    
                    <div className="space-y-8">
                      {content.map((item) => (
                        <div key={item.key} className="space-y-2 group">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                              {item.key.replace(/_/g, " ")}
                            </label>
                            <button 
                              onClick={() => handleUpdateContent(item.key, item.value)}
                              className="opacity-0 group-focus-within:opacity-100 p-2 text-primary hover:bg-primary/10 rounded transition-all"
                            >
                              <Save size={14} />
                            </button>
                          </div>
                          {item.value.length > 50 ? (
                            <textarea 
                              rows={3}
                              onBlur={(e) => handleUpdateContent(item.key, e.target.value)}
                              defaultValue={item.value}
                              className="w-full bg-white/5 border border-white/10 p-4 text-sm font-bold tracking-wide focus:border-primary outline-none transition-all resize-none italic"
                            />
                          ) : (
                            <input 
                              type="text" 
                              onBlur={(e) => handleUpdateContent(item.key, e.target.value)}
                              defaultValue={item.value}
                              className="w-full bg-white/5 border border-white/10 p-4 text-sm font-bold uppercase tracking-wide focus:border-primary outline-none transition-all italic"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "analytics" && (
                <motion.div 
                  key="analytics"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass p-6 rounded-xl border-white/5">
                      <p className="text-[10px] font-black uppercase text-white/40 mb-2">Total Signals</p>
                      <h3 className="text-3xl font-black italic text-primary">{traffic.length === 50 ? "50+" : traffic.length}</h3>
                    </div>
                    <div className="glass p-6 rounded-xl border-white/5">
                      <p className="text-[10px] font-black uppercase text-white/40 mb-2">System Status</p>
                      <h3 className="text-3xl font-black italic text-green-500 uppercase tracking-tighter">Monitoring</h3>
                    </div>
                    <div className="glass p-6 rounded-xl border-white/5">
                      <p className="text-[10px] font-black uppercase text-white/40 mb-2">Vercel Status</p>
                      <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">Linked</h3>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/5">
                    <h2 className="text-xl font-black italic uppercase tracking-tight mb-8">LIVE TRAFFIC FEED</h2>
                    <div className="space-y-4">
                      {traffic.map((t) => (
                        <div key={t.id} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 group">
                          <div className="flex flex-col">
                            <span className="text-xs font-black uppercase italic text-white group-hover:text-primary transition-colors">{t.page_path}</span>
                            <span className="text-[8px] font-mono text-white/20 uppercase">Referrer: {t.referrer}</span>
                          </div>
                          <span className="text-[8px] font-mono text-white/40 uppercase">{new Date(t.created_at).toLocaleString()}</span>
                        </div>
                      ))}
                      {traffic.length === 0 && (
                        <div className="py-12 text-center text-white/20 font-black italic uppercase tracking-widest">
                          Awaiting first signal...
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "spaces" && (
                <motion.div 
                  key="spaces"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="glass p-8 rounded-2xl border-white/5">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xl font-black italic uppercase tracking-tight">STUDIO ENVIRONMENTS</h2>
                      {saving && <span className="text-primary animate-pulse text-[10px] font-black italic uppercase">Updating...</span>}
                    </div>
                    <div className="space-y-12">
                      {spaces.map((space) => (
                        <div key={space.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Studio Name</label>
                              <input 
                                type="text"
                                defaultValue={space.title}
                                onBlur={(e) => handleUpdateSpace(space.id, { title: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 p-3 text-sm font-bold uppercase italic focus:border-primary outline-none"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">URL Slug</label>
                              <input 
                                type="text"
                                defaultValue={space.slug}
                                onBlur={(e) => handleUpdateSpace(space.id, { slug: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 p-3 text-[10px] font-mono focus:border-primary outline-none"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Description</label>
                            <textarea 
                              rows={5}
                              defaultValue={space.description}
                              onBlur={(e) => handleUpdateSpace(space.id, { description: e.target.value })}
                              className="w-full bg-black/40 border border-white/10 p-3 text-sm font-light leading-relaxed focus:border-primary outline-none resize-none italic"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "leads" && (
                <motion.div 
                  key="leads"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-black italic uppercase tracking-tight">LIVE SIGNALS</h2>
                    <button 
                      onClick={exportLeads}
                      className="flex items-center gap-2 glass p-3 text-xs font-black uppercase tracking-widest hover:text-primary transition-all"
                    >
                      <Download size={14} /> Export CSV
                    </button>
                  </div>

                  <div className="space-y-4">
                    {leads.map((lead) => (
                      <div key={lead.id} className="glass p-6 rounded-xl border-white/5 group hover:border-primary/20 transition-all">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-primary font-black uppercase text-xs italic">{lead.name}</span>
                              <span className="text-[8px] font-mono text-white/20 uppercase">{new Date(lead.created_at).toLocaleString()}</span>
                            </div>
                            <p className="text-sm font-bold text-white/80">{lead.email}</p>
                            <p className="text-[10px] font-black uppercase text-primary/60 tracking-widest">{lead.service}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={() => deleteLead(lead.id)} className="p-2 text-white/20 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-black/40 rounded border border-white/5 text-sm text-white/60 font-light italic">
                          "{lead.message}"
                        </div>
                      </div>
                    ))}
                    {leads.length === 0 && (
                      <div className="glass p-20 text-center rounded-2xl border-white/5 opacity-40">
                        <p className="uppercase font-black italic tracking-widest">No Signals Detected.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "gallery" && (
                <motion.div 
                  key="gallery"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass p-20 text-center rounded-2xl border-white/5"
                >
                  <ImageIcon size={48} className="mx-auto mb-6 text-white/10" />
                  <h3 className="text-xl font-black italic uppercase mb-2">Media Pipeline coming soon.</h3>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">DIRECT SFTP INTEGRATION IN PROGRESS.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
