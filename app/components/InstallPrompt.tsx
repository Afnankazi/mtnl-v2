"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Dictionary } from "../dictionaries";

const DISMISS_KEY = "mtnl-install-dismissed";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/** `true` once the viewer has dismissed the strip (persisted in localStorage). */
function useDismissed(): [boolean, () => void] {
  const dismissed = useSyncExternalStore(
    (cb) => {
      window.addEventListener("storage", cb);
      window.addEventListener("mtnl-install-dismissed", cb);
      return () => {
        window.removeEventListener("storage", cb);
        window.removeEventListener("mtnl-install-dismissed", cb);
      };
    },
    () => {
      try {
        return localStorage.getItem(DISMISS_KEY) === "1";
      } catch {
        return false;
      }
    },
    () => true // server: assume dismissed so nothing renders until hydration
  );

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event("mtnl-install-dismissed"));
  };

  return [dismissed, dismiss];
}

/**
 * A quiet, dismissible "install this app" strip.
 * - Chromium: uses the captured `beforeinstallprompt` event.
 * - iOS Safari: no such event, so we show the manual "Share → Add to Home
 *   Screen" hint instead — only when not already running standalone.
 */
export default function InstallPrompt({ dict }: { dict: Dictionary }) {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHint, setShowIosHint] = useState(false);
  const [dismissed, dismiss] = useDismissed();

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) return;

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    // Reading the UA is a one-time sync from a browser-only API — the exact
    // "synchronize with an external system" case effects exist for. It can't
    // run during render without a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (/iphone|ipad|ipod/i.test(navigator.userAgent)) setShowIosHint(true);

    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstall);
  }, []);

  function close() {
    setDeferred(null);
    setShowIosHint(false);
    dismiss();
  }

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    close();
  }

  if (dismissed || (!deferred && !showIosHint)) return null;

  return (
    <div
      className="ux4g-container"
      style={{ position: "sticky", bottom: 0, zIndex: 40, paddingBottom: 12 }}
    >
      <div className="ux4g-alert ux4g-alert-info" role="dialog" aria-label={dict.install.action}>
        <span className="ux4g-icon-outlined" aria-hidden="true">
          install_mobile
        </span>
        <span className="ux4g-body-s-default">
          {deferred ? dict.install.prompt : dict.install.iosHint}
        </span>
        <span className="ux4g-d-flex ux4g-gap-s ux4g-ai-center" style={{ marginLeft: "auto" }}>
          {deferred && (
            <button type="button" className="ux4g-btn-primary ux4g-btn-sm" onClick={install}>
              {dict.install.action}
            </button>
          )}
          <button type="button" className="ux4g-btn-text-neutral ux4g-btn-sm" onClick={close}>
            {dict.install.dismiss}
          </button>
        </span>
      </div>
    </div>
  );
}
