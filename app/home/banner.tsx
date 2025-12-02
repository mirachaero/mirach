import React from "react";
import Image from "next/image";
import AnimateText from "@/src/components/molecules/AnimateText";

export const Banner = () => {
  return (
    <section className="relative  w-full md:h-screen min-h-[500px] max-h-[1024px] flex items-center justify-center overflow-hidden">
        <svg
              className="w-full h-full absolute"
              // viewBox="0 0 1920 1024"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="myClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0 0 L 1 0 L 1 1 L 0.79 1 Q 0.7 0.9277 0.8 0.98 L 0.286 0.98 Q 0 1.25 0.2 1 L 0 1 L 0 0 z" />
                </clipPath>
              </defs>
            </svg> 

      <div className="absolute inset-0 z-0 clip-path-wave">
        <Image
          src="/assets/home/banner/mirach-banner-image.png"
          alt="Mirach Aerospace Banner"
          fill
          className="object-cover  "
          priority
          quality={100}
        />
      </div>

      <div className=" z-10   absolute bottom-8 lg:bottom-14 xlg:bottom-20 2xl::bottom-30  w-container text-center   flex flex-col items-center   ">
        <AnimateText finalColor="#ffffff" intialColor="#d0d0d1">
          <h1 className="custom-text-64 font-medium text-lightGray font-neue-montreal   ">
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
