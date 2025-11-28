"use client";

import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function AnimateText({
  onscroll = false,
  children,
  intialColor = "#363636",
  finalColor = "#d0d0d1",
  endIn = "300",
}: {
  onscroll?: boolean;
  children: ReactNode;
  intialColor?: string;
  finalColor?: string;
  endIn?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const child = containerRef.current.firstElementChild as HTMLElement | null;
    if (!child) return;

    const initAnimation = () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }

      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) {
          st.kill();
        }
      });

      // Split by words first, then chars - keeps words together
      splitRef.current = new SplitText(child, {
        type: "words chars",
        ignore: "span, br, b",
      });

      gsap.set(splitRef.current.chars, { color: intialColor });

      if (onscroll) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: `+=${endIn}`,
            // markers: true,
            scrub: true,
            toggleActions: "play none none none",
          },
        });

        tl.to(
          splitRef.current.chars,
          {
            color: "#6da7ff",
            duration: 0.25,
            ease: "power1.out",
            stagger: { each: 0.02, from: "start" },
          },
          "<"
        ).to(
          splitRef.current.chars,
          {
            color: finalColor,
            duration: 0.25,
            ease: "power1.out",
            stagger: { each: 0.03, from: "start" },
          },
          "<"
        );
      } else {
        gsap.to(splitRef.current.chars, {
          color: "#6da7ff",
          duration: 0.25,
          ease: "power1.out",
          stagger: {
            each: 0.03,
            from: "start",
          },
        });

        gsap.to(splitRef.current.chars, {
          color: finalColor,
          duration: 0.25,
          ease: "power1.out",
          delay: 0.1,
          stagger: {
            each: 0.04,
            from: "start",
          },
        });
      }
    };

    initAnimation();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initAnimation();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [onscroll]);

  return <div ref={containerRef}>{children}</div>;
}
