"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import gsap from "gsap";
import AnimateText from "@/src/components/molecules/AnimateText";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);
const values = [
  {
    id: "01",
    title: "Leadership focused",
    description:
      "Own outcomes, act decisively and solve problems proactively to prevent mistakes and lead the team to excellence.",
    icon: "/assets/home/our-values/leadership-focused.svg",
    position: "top-left",
  },
  {
    id: "02",
    title: "Quality first",
    description:
      "Refuse to settle for less. Prioritize details, critical analysis, and excellence, delivering results that consistently meet the highest aerospace standards.",
    icon: "/assets/home/our-values/quality-first.svg",
    position: "top-right",
  },
  {
    id: "03",
    title: "Growth and skill development",
    description:
      "Foster continuous learning and upskilling. Reward initiative and dedication to drive personal development and aerospace innovation.",
    icon: "/assets/home/our-values/growth.svg",
    position: "bottom-left",
  },
  {
    id: "04",
    title: "Trust and teamwork",
    description:
      "Build trust through clear communication, collaboration, and accountability. Share knowledge and follow through to grow together.",
    icon: "/assets/home/our-values/trust.svg",
    position: "bottom-right",
  },
];

export default function OurValuesPartTwo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);
  const pathRef4 = useRef<SVGPathElement>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (
      !pathRef1.current ||
      !pathRef2.current ||
      !pathRef3.current ||
      !pathRef4.current ||
      !containerRef.current
    ) {
      return;
    }
    const path1 = pathRef1.current;
    const path2 = pathRef2.current;
    const path3 = pathRef3.current;
    const path4 = pathRef4.current;

    console.log(pathRef1.current);
    gsap.set([path1, path2, path3, path4], {
      drawSVG: "100% 100%",
    });
    gsap.set(".main-svg-path", {
      drawSVG: "100% 100%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        // markers: true,
        end: "+=4000",
        scrub: 1,
        pin: ".home-page-wapper",
      },
    });

    tl.to(".main-svg-path", {
      drawSVG: "0% 100%",
    });
    tl.fromTo(
      ".main-svg-decorate-elements",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    tl.to(path1, {
      drawSVG: "0% 100%",
    });
    tl.fromTo(
      cardsRef.current[0],
      {
        opacity: 0,
        duration: 0.3,
        x: 20,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
      },
      "-=0.35"
    );
    tl.to(path2, {
      drawSVG: "0% 100%",
    });
    tl.fromTo(
      cardsRef.current[1],
      {
        opacity: 0,
        duration: 0.3,
        x: -20,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
      },
      "-=0.35"
    );
    tl.to(path3, {
      drawSVG: "0% 100%",
    });
    tl.fromTo(
      cardsRef.current[2],
      {
        opacity: 0,
        duration: 0.3,
        x: 20,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
      },
      "-=0.35"
    );
    tl.to(path4, {
      drawSVG: "0% 100%",
    });
    tl.fromTo(
      cardsRef.current[3],
      {
        opacity: 0,
        duration: 0.3,
        x: -20,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
      },
      "-=0.35"
    );
  });
  return (
    <div className="relative w-full  blade-top-margin blade-bottom-margin overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/assets/home/our-values/backgroung-grid.png"
          alt="Background Grid"
          fill
          className="object-cover fixed"
        />
      </div>

      <div className="w-container relative z-10">
        {/* Top Section: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-30 xl:gap-x-60 blade-bottom-margin">
          <div className=" max-w-md justify-self-end">
            <h3 className="text-white custom-text-28 font-medium mb-2 md:mb-4">
              Vision
            </h3>
            <AnimateText onscroll>
              <p className="text-white/30 custom-text-24 ">
                To create{" "}
                <b className="text-white font-medium">
                  sustainable transformation
                </b>{" "}
                with reliable, accessible, and{" "}
                <b className="text-white font-medium">Made-in-India aerial</b>{" "}
                systems with Artificial Intelligence inbuilt.
              </p>
            </AnimateText>
          </div>
          <div className="  max-w-md justify-self-start">
            <h3 className="text-white custom-text-28 font-medium mb-2 md:mb-4">
              Mission
            </h3>
            <AnimateText onscroll>
              <p className="text-lightGray custom-text-24    ">
                To engineer innovative, mission-ready drone solutions that
                deliver reliability where it matters through{" "}
                <b className="text-white font-medium">precision</b> and{" "}
                <b className="text-white font-medium">actionable</b>
                <b className="text-white font-medium">intelligence</b>.
              </p>
            </AnimateText>
          </div>
        </div>

        {/* Central Section: Values */}
        <div
          ref={containerRef}
          className="relative flex flex-col items-center justify-center  "
        >
          {/* Center Circle */}
          <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[50%] h-[50%] lg:w-[80%] lg:h-[80%] xl:w-[90%] xl:h-[90%]  xlg:w-full xlg:h-full  hidden lg:flex items-center justify-center">
            {/* <Image
              src="/assets/home/our-values/our-values.svg"
              alt="Our Values"
              fill
              className="animate-pulse-slow object-contain spin "
            /> */}

            <svg
              width="1478"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
              height="536"
              viewBox="0 0 1478 536"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_215_2078)">
                <path
                  className="main-svg-path"
                  d="M929.534 209.436C937.475 245.689 934.667 283.472 921.455 318.153C908.243 352.835 885.2 382.909 855.151 404.689C825.101 426.47 789.35 439.012 752.279 440.777C715.208 442.542 678.428 433.455 646.445 414.628C614.461 395.801 588.665 368.053 572.217 334.784C555.769 301.515 549.384 264.17 553.843 227.326C558.303 190.482 573.415 155.739 597.325 127.356C621.236 98.9718 652.908 78.1799 688.46 67.5279"
                  stroke="#D9D9D9"
                  strokeOpacity="0.49"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M688.524 84.1879L690.382 76.7661L692.273 83.0616L688.524 84.1879Z"
                  fill="white"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M628.931 184.377L632.816 190.968L627.05 187.811L628.931 184.377Z"
                  fill="white"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M801.944 132.4L802.357 140.04L805.411 134.219L801.944 132.4Z"
                  fill="white"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M858.536 322.742L855.411 315.758L860.788 319.54L858.536 322.742Z"
                  fill="white"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M797.809 416.148L795.951 423.569L794.06 417.274L797.809 416.148Z"
                  fill="white"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M686.088 374.468L685.574 366.834L682.597 372.695L686.088 374.468Z"
                  fill="white"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M806.744 445.89L801.103 440.72L802.994 447.016L806.744 445.89Z"
                  fill="white"
                />
                <path
                  className="main-svg-decorate-elements"
                  d="M679.732 54.9199L685.372 60.0892L683.481 53.7936L679.732 54.9199Z"
                  fill="white"
                />
                <path
                  className="main-svg-path"
                  d="M693.379 56.283L696.556 66.8599"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M702.499 54.3357L705.164 65.0532"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M712.53 52.5837L714.397 63.4687"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M722.462 51.1121L723.759 62.0794"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M732.264 50.5388L733.192 61.5436"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M742.23 50.1558L742.622 61.1927"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M752.215 50.1871L751.904 61.2266"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M762.009 51.0034L761.257 62.0217"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M771.995 52.0378L770.47 62.9759"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M781.843 53.8364L779.645 64.6594"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M791.189 55.5984L788.992 66.4214"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M801.047 58.5935L797.995 69.2074"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M810.828 61.8865L806.597 72.0875"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M819.839 65.4949L815.521 75.6594"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M837.724 73.6746L832.572 83.443"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M846.364 78.687L840.759 88.2028"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M854.663 83.783L848.831 93.1611"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M862.895 89.5671L856.311 98.4339"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M870.706 95.7241L863.746 104.299"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M878.404 102.09L871.067 110.343"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M885.678 109.092L877.983 117.013"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M892.333 115.838L884.416 123.538"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M899.081 123.667L890.249 130.297"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M905.046 131.329L896.214 137.959"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M911.109 139.457L901.84 145.46"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M916.522 147.83L906.78 153.031"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M921.047 156.684L911.058 161.396"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M925.962 165.369L915.703 169.458"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M929.802 174.742L919.319 178.218"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M933.005 183.659L922.428 186.836"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M858.184 15.7927L823.996 79.3393"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M682.084 380.512L644.916 449.599"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M592.074 296.368L546.237 309.796"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M889.63 207.031L936.289 193.014"
                  stroke="white"
                />
                <circle
                  className="main-svg-path"
                  cx="4.30691"
                  cy="4.30691"
                  r="3.80691"
                  transform="matrix(0.957722 -0.287695 -0.287695 -0.957722 640.372 458.449)"
                  stroke="white"
                />
                <circle
                  className="main-svg-path"
                  cx="4.30691"
                  cy="4.30691"
                  r="3.80691"
                  transform="matrix(0.957722 -0.287695 -0.287695 -0.957722 593.192 300.974)"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M691.955 391.477L694.741 385.34"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M705.009 395.812L707.158 389.425"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M718.7 398.482L720.251 391.923"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M732.566 400.296L733.298 393.597"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M746.776 400.568L746.006 393.873"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M760.431 399.663L759.367 393.008"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M773.964 397.637L772.303 391.106"
                  stroke="white"
                />
                <path
                  className="main-svg-path"
                  d="M787.201 394.374L785.465 387.863"
                  stroke="white"
                />
                <circle
                  className="main-svg-path"
                  cx="744.254"
                  cy="253.729"
                  r="106.865"
                  transform="rotate(-16.72 744.254 253.729)"
                  stroke="#D9D9D9"
                  strokeOpacity="0.49"
                />
                <path
                  className="main-svg-path"
                  d="M690.036 354.511C663.307 340.13 643.385 315.721 634.652 286.652C625.92 257.583 629.093 226.235 643.474 199.506"
                  stroke="#D9D9D9"
                  strokeOpacity="0.49"
                />
                <path
                  className="main-svg-path"
                  d="M845.325 307.863C859.706 281.134 862.879 249.787 854.146 220.718C845.414 191.648 825.492 167.239 798.762 152.858"
                  stroke="#D9D9D9"
                  strokeOpacity="0.49"
                />
                <path
                  className="main-svg-path"
                  d="M621.886 166.32C641.306 139.888 668.76 120.451 700.143 110.917C731.527 101.383 765.153 102.264 795.994 113.428"
                  stroke="#D9D9D9"
                  strokeOpacity="0.49"
                  strokeWidth="1.14271"
                />
                <path
                  className="main-svg-path"
                  d="M622.317 166.482L613.192 161.408"
                  stroke="#D9D9D9"
                  strokeOpacity="0.49"
                />
                <path
                  className="main-svg-path"
                  d="M795.875 113.99L800.903 105.438"
                  stroke="#D9D9D9"
                  strokeOpacity="0.49"
                />
              </g>
              <defs>
                <clipPath id="clip0_215_2078">
                  <rect width="1478" height="536" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg width="1478" height="536" viewBox="0 0 1478 536" fill="none">
              <g opacity="1">
                <path
                  ref={pathRef1}
                  d="M444 1H538.654L608.87 116.012"
                  stroke="#66676A"
                />
                <path
                  ref={pathRef2}
                  d="M1046.7 1H945.445L874.724 105.121"
                  stroke="#66676A"
                />
                <path
                  ref={pathRef3}
                  d="M444 531.57H538.662C577.997 462.748 578.513 463.554 617.848 394.732"
                  stroke="#66676A"
                />
                <path
                  ref={pathRef4}
                  d="M1046.7 531.219H945.421L858.527 402.941"
                  stroke="#66676A"
                />
              </g>
            </svg>
            <div className="absolute left-[50.3%] top-[48.2%] bg-blue aspect-square w-[14.3%] rounded-full -translate-x-1/2 flex items-center justify-center -translate-y-1/2 text-white custom-text-28 font-medium">
              Our values
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10 gap-y-6 md:gap-y-10 lg:gap-y-40  xlg:gap-y-60   relative z-10 ">
            {values.map((value, index) => (
              <div
                key={value.id}
                ref={(el: HTMLDivElement) => {
                  if (cardsRef.current && el) {
                    cardsRef.current[index] = el;
                  }
                }}
                style={{
                  background:
                    "linear-gradient(249deg, rgba(255, 255, 255, 0.03) 39.75%, rgba(255, 255, 255, 0.18) 97.22%)",
                  backdropFilter: "blur(163.5093231201172px)",
                }}
                className={`relative  bg-white/5 backdrop-blur-sm border border-white/30 p-4 md:p-6  max-w-[400px] xlg:max-w-[460px] mx-auto lg:mx-0 
                  ${index % 2 === 0
                    ? " justify-self-start "
                    : " justify-self-end "
                  }
                 
                `}
              >
                <div className="flex justify-between items-start mb-10 lg:mb-4">
                  <div className="relative w-12 h-12 xl:w-14 xl:h-14 xlg:w-20 xlg:h-20 ">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lightGray font-medium text-lg">/{value.id}</span>
                </div>
                <h4 className="text-skyBlue custom-text-28 mb-2 md:mb-3 font-medium">
                  {value.title}
                </h4>
                <p className="text-lightGray text-base xl:text-lg font-normal  pr-6 xl:pr-10">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
