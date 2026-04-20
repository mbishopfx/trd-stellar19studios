"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function TrafficTracker() {
  const pathname = usePathname();

  useEffect(() => {
    async function trackView() {
      // Don't track admin pages to keep data clean
      if (pathname.startsWith("/admin")) return;

      try {
        await supabase.from("site_traffic").insert([
          {
            page_path: pathname,
            referrer: document.referrer || "direct",
            user_agent: navigator.userAgent,
          },
        ]);
      } catch (err) {
        console.error("Traffic signal failed:", err);
      }
    }

    trackView();
  }, [pathname]);

  return null;
}
