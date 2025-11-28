import React from "react";
import Image from "next/image";
import AnimateText from "@/src/components/molecules/AnimateText";

export const Banner = () => {
  return (
    <section className="relative  w-full md:h-screen min-h-[500px] max-h-[1024px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/banner/mirach-banner-image.png"
          alt="Mirach Aerospace Banner"
          fill
          className="object-cover mask-b-from-95%"
          priority
          quality={100}
        />
      </div>

      <div className=" z-10   absolute bottom-8 md:bottom-30  w-container text-center   flex flex-col items-center   ">
        <AnimateText finalColor="#ffffff" intialColor="#d0d0d1">
          <h1 className="custom-text-64 font-medium  font-neue-montreal animate-fade-up-slow ">
            Airborne innovation with precision
          </h1>
        </AnimateText>
        <AnimateText finalColor="#d0d0d1" intialColor="#363636">
          <p className="custom-text-24 font-normal mt-2 md:mt-4  max-w-lg    animate-fade-up-slower">
            Giving wings to autonomous unmanned aerial mobility with purpose and
            excellence
          </p>
        </AnimateText>
      </div>
    </section>
  );
};
