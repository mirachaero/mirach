"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import AnimateText from "@/src/components/molecules/AnimateText";

export const Test = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    let gridSize = 100;
    if (window.innerWidth < 768) {
      gridSize = 70;
    }
    const cols = Math.ceil(window.innerWidth / gridSize) + 1;
    const rows = Math.ceil(window.innerHeight / gridSize) + 1;

    // Create a single SVG for the static grid (more performant than many DOM elements)
    const staticSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    staticSvg.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;pointer-events:none";

    let staticPath = "";
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const left = x * gridSize;
        const top = y * gridSize;
        // Horizontal and vertical lines
        staticPath += `M${left},${top} L${
          left + gridSize
        },${top} M${left},${top} L${left},${top + gridSize} `;
      }
    }

    const pathEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathEl.setAttribute("d", staticPath);
    pathEl.setAttribute("stroke", "rgba(255,255,255,0.04)");
    pathEl.setAttribute("stroke-width", "1");
    pathEl.setAttribute("stroke-dasharray", "4,4");
    pathEl.setAttribute("fill", "none");
    staticSvg.appendChild(pathEl);

    // Add corner dots
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = x * gridSize;
        const cy = y * gridSize;

        const dot = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        dot.setAttribute("cx", String(cx));
        dot.setAttribute("cy", String(cy));
        dot.setAttribute("r", "1");
        dot.setAttribute("fill", "rgba(255,255,255,0.06)");
        staticSvg.appendChild(dot);
      }
    }

    gridRef.current.appendChild(staticSvg);

    // Create animated squares (only these, not duplicating the static grid)
    const squares: Array<{ element: HTMLSpanElement; x: number; y: number }> =
      [];
    const fragment = document.createDocumentFragment();

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const square = document.createElement("span");
        square.className =
          "block absolute border-b border-l border-[#6da7ff]/30";
        square.style.cssText = `width:${gridSize}px;height:${gridSize}px;left:${
          x * gridSize
        }px;top:${y * gridSize}px;opacity:0;will-change:opacity`;
        fragment.appendChild(square);
        squares.push({ element: square, x, y });
      }
    }

    gridRef.current.appendChild(fragment);

    // Optimized GSAP timeline with better performance settings
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
      defaults: { ease: "none" }, // Simpler easing is more performant
    });

    // Batch animations for better performance
    const batches: Array<Array<(typeof squares)[0]>> = [];
    const batchSize = 20; // Animate in batches

    for (let i = 0; i < squares.length; i += batchSize) {
      batches.push(squares.slice(i, i + batchSize));
    }

    batches.forEach((batch, batchIndex) => {
      const firstSquare = batch[0];
      const baseDelay = (firstSquare.x + firstSquare.y) * 0.06;

      batch.forEach(({ element, x, y }) => {
        const delay = (x + y) * 0.06;
        timeline.to(element, { opacity: 0.8, duration: 0.3 }, delay);
        timeline.to(element, { opacity: 0, duration: 0.3 }, delay + 0.5);
      });
    });

    timelineRef.current = timeline;

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      if (gridRef.current) {
        gridRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="relative w-full md:h-screen min-h-[500px] max-h-[1024px] flex items-center justify-center overflow-hidden clip-path-wave">
      <div
        ref={gridRef}
        className="absolute inset-0 z-1"
        style={{ perspective: "1000px" }}
      />

      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/banner/background.png"
          alt="Mirach Aerospace Banner"
          fill
          className="object-cover "
          priority
          quality={100}
        />
      </div>

      <div className="absolute inset-0 z-2">
        <Image
          src="/assets/home/banner/drone.png"
          alt="Mirach Aerospace Banner"
          fill
          className="object-cover "
          priority
          quality={100}
        />
      </div>

      <div className="z-3 absolute bottom-8 lg:bottom-14 xlg:bottom-20 2xl:bottom-30 w-container text-center flex flex-col items-center">
        <AnimateText finalColor="#ffffff" intialColor="#d0d0d1">
          <h1 className="custom-text-64 font-medium text-lightGray font-neue-montreal">
            Airborne innovation with precision
          </h1>
        </AnimateText>
        <AnimateText finalColor="#d0d0d1" intialColor="#363636">
          <p className="custom-text-24 font-normal mt-2 md:mt-4 text-[#363636] max-w-lg">
            Giving wings to autonomous unmanned aerial mobility with purpose and
            excellence
          </p>
        </AnimateText>
      </div>
    </section>
  );
};
