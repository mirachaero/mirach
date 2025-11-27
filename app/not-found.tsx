"use client";

import { Button } from "@/src/components/atoms/button";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-lightBlack">
      {/* Main content */}
      <div className="relative z-10 w-container flex flex-col items-center text-center blade-top-padding blade-bottom-padding">
        {/* 404 Number with gradient text */}
        <div
          className={`relative mb-8 md:mb-12 lg:mb-8 transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="bg-gradient-to-br from-skyBlue via-blue to-skyBlue bg-clip-text text-[140px] font-bold leading-none text-transparent sm:text-[180px] md:text-[240px] xlg:text-[320px] 2xl:text-[380px]  ">
            404
          </h1>
        </div>

        {/* Error message */}
        <div
          className={`mb-10 md:mb-14 lg:mb-10 space-y-4 md:space-y-5 lg:space-y-6 transition-all delay-200 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="custom-text-64 font-medium text-white">
            Page Not Found
          </h2>
          <p className="custom-text-24 mx-auto max-w-xl text-lightGray md:max-w-2xl lg:max-w-3xl leading-relaxed">
            Oops! This page flew away. Let's get you back home.
          </p>
        </div>

        {/* Action buttons */}
        <div
          className={`flex flex-col gap-5 md:gap-6 transition-all delay-300 duration-1000 sm:flex-row ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button
            text="Return Home"
            theme="blue"
            size="large"
            role="link"
            link="/"
            className="px-12 md:px-16 lg:px-20"
          />

          <Button
            text="Go Back"
            theme="transparent"
            size="large"
            onClick={() => window.history.back()}
            className="px-12 md:px-16 lg:px-20 text-white border-white hover:text-white hover:border-white hover:bg-skyBlue/20"
          />
        </div>

        {/* Error code */}
        <div
          className={`mt-16 md:mt-10 transition-all delay-500 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="custom-text-20 text-darkGray tracking-wider">
            ERROR CODE: 404
          </span>
        </div>
      </div>
    </div>
  );
}
