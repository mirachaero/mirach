"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import AnimateText from "@/src/components/molecules/AnimateText";

export default function BannerGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
   
  const contentRef = useRef<HTMLDivElement>(null);
  const BgImageRef = useRef<HTMLDivElement>(null);

  function shuffle(array: any[]) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  useEffect(() => {
    if (!gridRef.current) return;
    const timeline = gsap.timeline({ delay: 0.1 });
      if(window.innerWidth>768){

    const gridSize = 80;
    const cols = Math.ceil(window.innerWidth / gridSize) + 1;
    const rows = Math.ceil(window.innerHeight / gridSize) + 1;
    const squares: any[] = [];

    // Create grid overlay squares
    // for (let y = 0; y < rows; y++) {
    //   for (let x = 0; x < cols; x++) {
    //     const square = document.createElement("span")
    //     square.className = "block absolute border-b-[1px] border-l-[1px] border-[#fff]/5 border-dashed bg-transparent absolute before:absolute before:-left-[1px] before:-top-[1px] before:w-1 before:h-1   before:border-t-[#fff]/10 before:border-t before:border-l-[#fff]/10 before:border-l  after:absolute after:-bottom-[1px] after:-right-[1px] after:w-1 after:h-1   after:border-b-[#fff]/10 after:border-b after:border-r-[#fff]/10 after:border-r "
    //     square.style.width = gridSize + "px"
    //     square.style.height = gridSize + "px"
    //     square.style.left = x * gridSize + "px"
    //     square.style.top = y * gridSize + "px"
    //     square.style.opacity = "1"
    //     gridRef.current.appendChild(square)
    //     // squares.push({ element: square, x, y })
    //   }
    // } 

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const square = document.createElement("span");
        square.className = "absolute bg-black/80 backdrop-blur-[24px] block";
        square.style.width = gridSize + "px";
        square.style.height = gridSize + "px";
        square.style.left = x * gridSize + "px";
        square.style.top = y * gridSize + "px";
        gridRef.current.appendChild(square);
        squares.push({ element: square, x, y });
      }
    }

    // Shuffle for random reveal order
    shuffle(squares);
  

     
    gsap.set(BgImageRef.current,{opacity:1})
 
    squares.forEach(({ element }, index) => {
      timeline.to(
        element,
        {
          
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        index * 0.004 
      );
    }); 
     timeline.fromTo(contentRef.current,{opacity:0,y:50},{opacity:1,y:0, duration:0.8,ease:"power1.inOut"})
    }

    return () => {
      timeline.kill();
      if (gridRef.current) {
        gridRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="relative w-full h-[33rem] md:h-screen flex items-center justify-center overflow-hidden  ">
      {/* Background Image */}
      <div ref={BgImageRef} className="absolute inset-0 z-0 md:opacity-0">
        <Image
          src="/assets/home/banner/mirach-banner-image.png "
          alt="Image with drone"
          fill
          className="w-full h-full object-cover clip-path-wave"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" /> */}
      </div>
       
      {/* Grid Overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 z-10"
        style={{
          perspective: "1000px",
        }}
      />

      <div ref={contentRef} className=" z-20  md:opacity-0 absolute bottom-8 lg:bottom-14 xlg:bottom-20 2xl::bottom-30  w-container text-center   flex flex-col items-center   ">
        <AnimateText finalColor="#ffffff" intialColor="#d0d0d1" delay={1.5}>
          <h1 className="custom-text-64 font-medium text-lightGray font-neue-montreal   ">
            Airborne innovation with precision
          </h1>
        </AnimateText>
        <AnimateText finalColor="#d0d0d1" intialColor="#363636" delay={1.5}>
          <p className="custom-text-24 font-normal mt-2 md:mt-4 text-[#363636] max-w-lg">
            Giving wings to autonomous unmanned aerial mobility with purpose and
            excellence
          </p>
        </AnimateText>
      </div>
    </section>
  );
}
