
"use client";

import { Button } from "@/src/components/atoms/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreateChange() {

  return (
    <section className="bg-[#EEEEEE]  relative ">
      <div className="absolute w-[2px] xl:border xl:border-white h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ms-3"></div>
      <div className="w-container lg:mx-auto  xl:border-t-2 xl:border-b-2 xl:border-white blade-top-padding-sm blade-bottom-padding-sm">
        <div className=" relative h-auto bg-black xl:h-[28rem] 2xl:h-[33rem] overflow-hidden  ">
          
          <div className="absolute inset-0 backdrop-blur-[60px] z-10"></div>

          <div

            className="absolute left-0 bottom-0 w-[600px] h-[100px] md:h-[350px] xl:h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(37,130,254,0.9),transparent_70%)] opacity-70 z-0"
          ></div>

          <div

            className="absolute top-0 right-0 w-[600px] h-[100px] md:h-[350px] xl:h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,130,254,0.9),transparent_80%)] opacity-90 z-0"
          ></div>

          <div className="relative z-20 h-full flex flex-col  xl:flex-row gap-4 lg:gap-8  py-8 p-6 md:p-8 xl:p-12 xlg:p-18">
            <div className="w-full md:w-[70%]">
              <h2

                className="text-white font-medium custom-text-48 mb-4 xl:mb-8"
              >
                Let's{" "}
                <span

                  className="bg-gradient-to-r from-[#2582FE] via-[#5BA3FF] to-[#2582FE] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  style={{ backgroundPosition: "0% center" }}
                >
                  create change
                </span>{" "}
                that <br />
                takes India higher
              </h2>

              <div >
                <Button
                  text="Join us"
                  theme="blue"
                  size="base"
                  role="link"
                  className="px-4 md:px-16 lg:py-3.5 font-medium xl:block hidden"
                />
              </div>
            </div>

            <div className="w-full ">
              <div

                className="custom-text-24 w-full ms-auto xl:max-w-md xlg:max-w-xl space-y-3 lg:space-y-4 "
              >
                <p className="text-white font-medium">
                  Change doesn't wait for the right moment. It begins with
                  commitment.
                </p>

                <p className=" text-white/90 ">
                  At Mirach Aerospace, every contribution counts. Whether you are
                  a professional, student, partner, volunteer, there is a place
                  for you here.
                </p>

                <p className=" text-white/90 ">
                  Join our mission to advance India's aerospace innovation in any
                  capacity. As an equal-opportunity organization that values
                  initiative, collaboration, and shared purpose, we will be happy
                  to have you.
                </p>
              </div>
            </div>


            <div>
              <Button
                text="Join us"
                theme="blue"
                size="base"
                role="link"
                className="w-fit mt-4 px-10 font-medium xl:hidden block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

