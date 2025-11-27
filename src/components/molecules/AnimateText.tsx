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
}: {
  onscroll?: boolean;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const child = containerRef.current.firstElementChild as HTMLElement | null;
    if (!child) return;

    const split = new SplitText(child, { type: "chars", ignore:"span"  });

    gsap.set(split.chars, { color: "#363636 " });

    if (onscroll) {
      console.log(containerRef.current?.offsetHeight)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", 
            //  end: () => "+=" + (child?.offsetHeight || 200),
             end: "+=300",
            // markers: true,
            scrub: true,
            toggleActions: "play none none none",
          },
        });

        tl.to(split.chars, {
          color: "#6da7ff",
          duration: 0.25,
          ease: "power1.out",
          stagger: { each: 0.02, from: "start" },
        },"<") 

        .to(split.chars, {
          color: "#d0d0d1",
          duration: 0.25,
          ease: "power1.out",
          stagger: { each: 0.03, from: "start" },
        },"<");
      
    } else {
      gsap.to(split.chars, {
        color: "#6da7ff",
        duration: 0.25,
        ease: "power1.out",
        stagger: {
          each: 0.03,
          from: "start",
        },
      });

      gsap.to(split.chars, {
        color: "#d0d0d1",
        duration: 0.25,
        ease: "power1.out",
        delay: 0.1,
        stagger: {
          each: 0.04,
          from: "start",
        },
      });
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
