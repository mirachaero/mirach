
"use client";

import { Button } from "@/src/components/atoms/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreateChange() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gradientTextRef = useRef<HTMLSpanElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const buttonDesktopRef = useRef<HTMLDivElement>(null);
  const buttonMobileRef = useRef<HTMLDivElement>(null);
  const bgGradientLeftRef = useRef<HTMLDivElement>(null);
  const bgGradientRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate heading with slide and fade
      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animated gradient text with shimmer effect
      if (gradientTextRef.current) {
        tl.from(
          gradientTextRef.current,
          {
            backgroundPosition: "200% center",
            duration: 1.5,
            ease: "power2.inOut",
          },
          "-=0.5"
        );

        // Continuous shimmer animation
        gsap.to(gradientTextRef.current, {
          backgroundPosition: "200% center",
          duration: 3,
          ease: "linear",
          repeat: -1,
          yoyo: true,
        });
      }

      // Stagger animation for paragraphs
      if (paragraphsRef.current) {
        const paragraphs = paragraphsRef.current.querySelectorAll("p");
        tl.from(
          paragraphs,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.8"
        );
      }

      // Button animations
      tl.from(
        buttonDesktopRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      tl.from(
        buttonMobileRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Breathing/pulsing background gradients
      gsap.to(bgGradientLeftRef.current, {
        scale: 1.2,
        opacity: 0.9,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(bgGradientRightRef.current, {
        scale: 1.15,
        opacity: 1,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#EEEEEE]   ">
      <div className="w-container lg:mx-auto  xl:border-t-2 xl:border-b-2 xl:border-white blade-top-padding-sm blade-bottom-padding-sm">
        <div className=" relative bg-black h-auto xl:h-[28rem] 2xl:h-[33rem] overflow-hidden  ">
          <div className="absolute inset-0 backdrop-blur-[60px] z-10"></div>

          <div
            ref={bgGradientLeftRef}
            className="absolute left-0 bottom-0 w-[600px] h-[100px] md:h-[350px] xl:h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(37,130,254,0.9),transparent_70%)] opacity-70 z-0"
          ></div>

          <div
            ref={bgGradientRightRef}
            className="absolute top-0 right-0 w-[600px] h-[100px] md:h-[350px] xl:h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,130,254,0.9),transparent_80%)] opacity-90 z-0"
          ></div>

          <div className="relative z-20 h-full flex flex-col xl:flex-row gap-4 lg:gap-8 xl:justify-between py-8 p-6 md:p-8 xl:p-12 xlg:p-18 2xl:p-28">
            <div>
              <h2
                ref={headingRef}
                className="text-white font-medium custom-text-48 mb-4 xl:mb-8"
              >
                Let's{" "}
                <span
                  ref={gradientTextRef}
                  className="bg-gradient-to-r from-[#2582FE] via-[#5BA3FF] to-[#2582FE] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  style={{ backgroundPosition: "0% center" }}
                >
                  create change
                </span>{" "}
                that <br />
                takes India higher
              </h2>

              <div ref={buttonDesktopRef}>
                <Button
                  text="Join us"
                  theme="blue"
                  size="base"
                  role="link"
                  className="px-4 md:px-16 lg:py-3.5 font-medium xl:block hidden"
                />
              </div>
            </div>

            <div
              ref={paragraphsRef}
              className="custom-text-24 w-full  xl:max-w-xl space-y-3 lg:space-y-4"
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

            <div ref={buttonMobileRef}>
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

