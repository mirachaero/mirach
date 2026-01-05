"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ReactNode, useRef, useEffect } from "react";
import { X } from "lucide-react";
import Portal from "./portal";
import Link from "next/link";

type profileProps = {
  image: string;
  name: string;
  designation: string;
  linkedinUrl: string;
  content: ReactNode;
};

export const ProfileDetailsModal = ({
  onClose,
  data,
}: {
  onClose: () => void;
  data: profileProps;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    gsap.fromTo(
      containerRef.current,
      {
        y: 40,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.5)",
        delay: 0.1,
      }
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Portal>
      <div
        data-lenis-prevent
        className="fixed inset-0 flex max-w-screen items-center justify-center z-[9999] p-4 lg:p-6 "
      >
        {/* Background Overlay */}
        <div
          ref={overlayRef}
          onClick={() => onClose()}
          className="absolute inset-0 z-0 bg-black/70 backdrop-blur-md cursor-default"
        ></div>

        {/* Modal Container */}
        <div
          ref={containerRef}
          className="relative z-10 p-4 md:p-8 lg:p-12  w-full max-w-2xl bg-white  shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={() => onClose()}
            className="absolute top-3 right-3 md:top-4 md:right-4 z-20 group hover:bg-blue/10 bg-blue/5 cursor-pointer  backdrop-blur-md rounded-full p-1 md:p-2.5 transition-all duration-300 shadow-lg"
          >
            <X className="size-5  text-blue transition-colors" />
          </button>

          {/* Header Banner */}
          <div className="    relative"></div>

          {/* Profile Info Section (Overlapping) */}
          <div className="   relative z-10">
            <div className="flex flex-row gap-3 md:gap-6 items-end ">
              {/* Image Container - Fixed size to keep 400x400 crisp */}
              {/* <div className=" size-40 md:size-48   border-4 md:border-8 border-white shadow-2xl overflow-hidden bg-gray-100 shrink-0 relative group/img">
                <Image
                  src={data.image}
                  fill
                  alt={data.name}
                  className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                />
              </div> */}

              <div className="pb-2 md:pb-4 flex-grow">
                <h2 className="text-2xl md:text-2xl   font-semibold text-[#2a2b7d] leading-tight flex items-center gap-3">
                  {data.name}
                </h2>
                <p className="text-base md:text-lg text-skyBlue font-medium   tracking-wide ">
                  {data.designation}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="overflow-y-auto custom-scrollbar flex flex-col">
            <div className="space-y-4 custom-text-20 text-darkGray text-lg leading-relaxed mb-6 md:mb-8 prose prose-slate">
              {data.content}
            </div>

            <div className="mt-auto pt-6 md:pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-between">
              <Link
                href={data.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3.5 bg-[#0077B5] text-white   font-semibold hover:bg-[#005a8a] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,119,181,0.2)]"
              >
                <svg
                  className="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm   tracking-wider">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f8fafc;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #6da7ff;
            border-radius: 10px;
            border: 2px solid #f8fafc;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #cbd5e1;
          }
        `}</style>
      </div>
    </Portal>
  );
};
