"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const studioPhotos = [
  "/assets/studio/07553c27-2aa0-4784-bba7-10fb60b296dc.jpg",
  "/assets/studio/1d714de0-7c2c-458f-b979-0d0e688e121a.jpg",
  "/assets/studio/43d88652-393f-496d-9ecf-df6ceda5e37e.jpg",
  "/assets/studio/463358781_18027553688523073_1706822067897101866_n.jpg",
  "/assets/studio/463600561_18027553697523073_1717171252916102648_n.jpg",
  "/assets/studio/524912451_122179683734337188_4208298709652284514_n.jpg",
  "/assets/studio/617513591_122198516270337188_1516008919068519162_n.jpg",
  "/assets/studio/644458327_122202910724337188_7798040143761786124_n.jpg",
];

export default function StudioGallery() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div className="aggressive-border pl-6">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tight text-white mb-2 leading-none">
            THE <span className="text-primary">WAR ROOMS</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">
            Unmatched Production Quality
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {studioPhotos.map((photo, index) => (
          <motion.div
            key={photo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-square overflow-hidden glass rounded-xl"
          >
            <Image
              src={photo}
              alt={`Studio shot ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-black italic text-sm tracking-widest uppercase">Inspect →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
