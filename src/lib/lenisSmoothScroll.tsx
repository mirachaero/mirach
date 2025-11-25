"use client";

import type { LenisOptions } from "lenis";
import "lenis/dist/lenis.css";
import type { LenisRef, LenisProps as ReactLenisProps } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface LenisProps extends Omit<ReactLenisProps, "ref"> {
  root?: boolean;
  options?: LenisOptions;
}

export function Lenis({ root = true, options }: LenisProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  useEffect(() => {
    let rafId: number;

    const raf = (time: number) => {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf); // keep the loop alive
    };

    rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, []);
  // reset scroll on route change
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
  return (
    <ReactLenis
      ref={lenisRef}
      root={root}
      options={{
        ...options,
        lerp: options?.lerp ?? 0.125,
        duration: 1.2, // Useless if lerp defined
        autoRaf: false, // keep false, since we’re handling raf manually
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        anchors: true,
      }}
    />
  );
}
