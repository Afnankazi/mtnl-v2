"use client";

import { useSyncExternalStore } from "react";

/*
 * Viewer preferences that live on <html> / localStorage rather than in React
 * state. ThemeScript applies them before first paint; these hooks let client
 * components read the current value (via useSyncExternalStore, so there is no
 * setState-in-effect and no hydration flash) and update it.
 */

type Theme = "light" | "dark";
type FontScale = "sm" | "base" | "lg" | "xl";

const THEME_KEY = "mtnl-theme";
const FONT_KEY = "mtnl-font-scale";
const EVENT = "mtnl-prefs-change";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onEvent = () => cb();
  window.addEventListener(EVENT, onEvent);
  window.addEventListener("storage", onEvent);
  return () => {
    listeners.delete(cb);
    window.removeEventListener(EVENT, onEvent);
    window.removeEventListener("storage", onEvent);
  };
}

function announce() {
  window.dispatchEvent(new Event(EVENT));
}

function safeSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private browsing / storage disabled — preference just won't persist.
  }
}

/* ---- theme ---- */

function themeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function useTheme(): [Theme, (next: Theme) => void] {
  const theme = useSyncExternalStore(
    subscribe,
    themeSnapshot,
    () => "light" as Theme // server / first paint
  );

  const setTheme = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    safeSet(THEME_KEY, next);
    announce();
  };

  return [theme, setTheme];
}

/* ---- font scale ---- */

function fontSnapshot(): FontScale {
  const v = document.documentElement.dataset.fontScale;
  return v === "sm" || v === "lg" || v === "xl" ? v : "base";
}

export function useFontScale(): [FontScale, (next: FontScale) => void] {
  const scale = useSyncExternalStore(subscribe, fontSnapshot, () => "base" as FontScale);

  const setScale = (next: FontScale) => {
    if (next === "base") delete document.documentElement.dataset.fontScale;
    else document.documentElement.dataset.fontScale = next;
    safeSet(FONT_KEY, next);
    announce();
  };

  return [scale, setScale];
}
