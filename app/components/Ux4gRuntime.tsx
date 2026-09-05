"use client";

// Side-effect import: boots the UX4G runtime (dropdowns, accordions, alert
// dismissal, tabs, modals). It MUST live in a client component — a bare import
// in the server-rendered layout never reaches the browser bundle, which leaves
// every documented interactive behaviour dead.
import "ux4g-web-components/design-system";

export default function Ux4gRuntime() {
  return null;
}
