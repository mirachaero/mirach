import React from "react";
import Image from "next/image";

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
  return (
    <div className="relative w-full  blade-top-margin blade-bottom-margin overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/assets/home/our-values/backgroung-grid.png"
          alt="Background Grid"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-container relative z-10">
        {/* Top Section: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-30 xl:gap-x-60 blade-bottom-margin">
          <div className=" max-w-md justify-self-end">
            <h3 className="text-white custom-text-28 font-medium mb-2 md:mb-4">
              Vision
            </h3>
            <p className="text-lightGray custom-text-24 font-light ">
              To create{" "}
              <b className="text-white font-medium">
                sustainable transformation
              </b>{" "}
              with reliable, accessible, and{" "}
              <b className="text-white font-medium">Made-in-India aerial</b>{" "}
              systems with Artificial Intelligence inbuilt.
            </p>
          </div>
          <div className="  max-w-md justify-self-start">
            <h3 className="text-white custom-text-28 font-medium mb-2 md:mb-4">
              Mission
            </h3>
            <p className="text-lightGray custom-text-24  font-light ">
              To engineer innovative, mission-ready drone solutions that deliver
              reliability where it matters through{" "}
              <b className="text-white font-medium">precision</b> and{" "}
              <b className="text-white font-medium">actionable intelligence</b>.
            </p>
          </div>
        </div>

        {/* Central Section: Values */}
        <div className="relative flex flex-col items-center justify-center  ">
          {/* Center Circle */}
          <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[50%] h-[50%] lg:w-[80%] lg:h-[80%] xl:w-[90%] xl:h-[90%]  xlg:w-full xlg:h-full  hidden lg:flex items-center justify-center">
            <Image
              src="/assets/home/our-values/our-values.png"
              alt="Our Values"
              fill
              className="animate-pulse-slow object-contain"
            />
            {/* <span className="absolute text-white custom-text-28   font-medium">
              Our values
            </span> */}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10 gap-y-6 md:gap-y-10 lg:gap-y-40  xlg:gap-y-60   relative z-10 ">
            {values.map((value, index) => (
              <div
                key={value.id}
                style={{
                  background:
                    "linear-gradient(249deg, rgba(255, 255, 255, 0.03) 39.75%, rgba(255, 255, 255, 0.18) 97.22%)",
                  backdropFilter: "blur(163.5093231201172px)",
                }}
                className={`relative  bg-white/5 backdrop-blur-sm border border-white/30 p-4 md:p-6  max-w-[400px] xlg:max-w-[460px] mx-auto lg:mx-0 
                  ${
                    index % 2 === 0
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
                  <span className="text-lightGray text-lg">/{value.id}</span>
                </div>
                <h4 className="text-skyBlue custom-text-28 mb-2 md:mb-3">
                  {value.title}
                </h4>
                <p className="text-lightGray custom-text-16 font-normal  pr-6 xl:pr-10">
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
