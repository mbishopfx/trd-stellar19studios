"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "podcast",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase.from("leads").insert([formData]);
      if (dbError) throw dbError;

      // 2. Send via SMTP (Server Action or API)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) console.error("SMTP Failed, but lead saved to DB");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 text-center rounded-2xl border-primary"
      >
        <h3 className="text-4xl font-black italic text-primary mb-4">SIGNAL RECEIVED.</h3>
        <p className="text-white/60 uppercase tracking-widest text-xs font-bold">
          A producer will be in contact shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Your Name</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="glass bg-white/5 border-white/10 p-4 text-white focus:border-primary outline-none transition-all uppercase font-bold text-sm italic"
            placeholder="CREATOR NAME"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Email Address</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="glass bg-white/5 border-white/10 p-4 text-white focus:border-primary outline-none transition-all uppercase font-bold text-sm italic"
            placeholder="SIGNAL@DOMAIN.COM"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Service Type</label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="glass bg-white/5 border-white/10 p-4 text-white focus:border-primary outline-none transition-all uppercase font-bold text-sm italic appearance-none"
        >
          <option value="podcast">Podcast Production</option>
          <option value="photo">Photography Studio</option>
          <option value="streaming">Live Streaming</option>
          <option value="production">Post-Production (Mile21)</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Your Vision</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="glass bg-white/5 border-white/10 p-4 text-white focus:border-primary outline-none transition-all uppercase font-bold text-sm italic"
          placeholder="DESCRIBE THE PROJECT..."
        />
      </div>

      <button 
        disabled={loading}
        type="submit" 
        className="neon-btn py-5 text-xl disabled:opacity-50"
      >
        {loading ? "TRANSMITTING..." : "OPEN THE FREQUENCY →"}
      </button>
    </form>
  );
}
