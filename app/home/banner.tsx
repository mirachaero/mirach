import React from "react";
import Image from "next/image";

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
        />
      </div>

      <div className=" z-10   absolute bottom-8 md:bottom-30  w-container text-center text-white flex flex-col items-center   ">
        <h1 className="custom-text-64 font-medium  font-neue-montreal animate-fade-up-slow ">
          Airborne innovation <br className="block md:hidden" /> with precision
        </h1>
        <p className="custom-text-24 font-normal mt-2 md:mt-4  max-w-lg text-gray-200 animate-fade-up-slower">
          Giving wings to autonomous unmanned aerial mobility with purpose and
          excellence
        </p>
      </div>
    </section>
  );
};
