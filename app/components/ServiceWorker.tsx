"use client";

import { useEffect } from "react";

/**
 * Registers /public/sw.js after load. Registration is best-effort: if the
 * browser has no service-worker support (or it's blocked), the site works
 * exactly as before, just without offline caching.
 */
export default function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Nothing to do — offline support is a progressive enhancement.
      });
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
