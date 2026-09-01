"use client";

import { useEffect, useState } from "react";

const LOGO_URL =
  "https://www.patra-jasa.com/wp-content/themes/patra-jasa/images/logo.svg";

/**
 * Simple modern first-visit loading screen.
 * Shows the brand logo with a slim progress bar, then fades out
 * once the page has loaded (with a minimum display time and a
 * safety timeout so it can never get stuck).
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timers: ReturnType<typeof setTimeout>[] = [];
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      timers.push(
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = "";
          timers.push(setTimeout(() => setRemoved(true), 700));
        }, 900)
      );
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }
    // Safety fallback: never block the page for more than 4s
    timers.push(setTimeout(finish, 4000));

    return () => {
      finished = true;
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-all duration-700 ease-out ${
        hidden ? "pointer-events-none scale-[1.02] opacity-0" : "opacity-100"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_URL}
        alt="Patra Jasa"
        className="preloader-logo h-9 w-auto"
      />

      {/* Slim progress bar */}
      <div className="mt-8 h-[3px] w-44 overflow-hidden rounded-full bg-black/5">
        <div className="preloader-bar h-full rounded-full bg-patragreen-600" />
      </div>

      <p className="preloader-text mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-ash">
        Memuat
      </p>
    </div>
  );
}
