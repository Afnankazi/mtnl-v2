import type { MetadataRoute } from "next";

// Served at /manifest.webmanifest. `start_url` and shortcuts point at the
// default locale; the proxy will still redirect a user whose browser prefers
// Hindi. Icons live in public/icons/.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MTNL — Mahanagar Telephone Nigam Ltd.",
    short_name: "MTNL",
    description:
      "Pay bills, recharge, book connections and register complaints for MTNL Landline, Broadband, FTTH, Mobile and Toll Free services.",
    id: "/",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#0b5fad",
    lang: "en",
    dir: "ltr",
    categories: ["government", "utilities", "productivity"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      {
        name: "Pay Bill",
        short_name: "Pay Bill",
        url: "/en#pay-bill",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Recharge",
        short_name: "Recharge",
        url: "/en#recharge",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Register Complaint",
        short_name: "Complaint",
        url: "/en#complaint",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
