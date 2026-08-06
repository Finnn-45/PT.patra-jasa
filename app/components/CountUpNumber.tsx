"use client";
import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
  target: number;
  suffix?: string;
  duration?: number; // ms
}

export function CountUpNumber({ target, suffix = "", duration = 2000 }: CountUpNumberProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []); // run once on mount

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target); // ensure we land exactly on target
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, target, duration]);

  return (
    <p ref={ref} className="text-4xl font-bold text-patra-blue-400">
      {count}{suffix}
    </p>
  );
}
