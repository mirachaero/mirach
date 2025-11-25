"use client";

import Link from "next/link";

import React from "react";
import { cn } from "@/src/utils/cn";
import LoadingSpinner from "@/src/components/atoms/loading";

type ButtonTheme = "blue" | "transparent";
type ButtonSize = "small" | "base" | "large";

type HeroBtnProps = {
  text: string;
  theme: ButtonTheme;
  size?: ButtonSize;
  type?: "button" | "submit";
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  link?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  role?: "button" | "link";
  className?: string;
  isArrow?: boolean;
  innerRef?: React.Ref<HTMLButtonElement | HTMLAnchorElement>;
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "text-base px-2 py-2",
  base: "text-lg px-5 py-2.5",
  large: "md:text-xl text-lg px-6 md:py-3 py-2",
};

const themeClasses: Record<ButtonTheme, string> = {
  blue: " bg-linear-90 from-10% from-[#0B346F] to-[#5978FF] hover:bg-linear-180  border text-white border-white hover:shadow-lg ",
  transparent:
    "bg-transparent text-blue border-[2px] border-skyBlue/50   hover:bg-skyBlue/20 hover:text-blue   ",
};

export function Button({
  text,
  theme,
  size = "base",
  type = "button",
  isDisabled = false,
  isArrow,
  isLoading = false,
  onClick,
  link,
  target = "_self",
  role = "button",
  className = "",
  innerRef,
}: HeroBtnProps) {
  const sizeClass = sizeClasses[size];
  const themeClass = themeClasses[theme];

  const content = isLoading ? (
    <LoadingSpinner classes="w-6 h-6" />
  ) : (
    <span dangerouslySetInnerHTML={{ __html: text }} />
  );

  if (role === "link" && link) {
    return (
      <Link
        ref={innerRef as React.Ref<HTMLAnchorElement>}
        href={link}
        target={target}
        className={cn(
          ` inline-flex items-center justify-center cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed  `,
          themeClass,
          sizeClass,
          className
        )}
      >
        {content}
        {isArrow ? (
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.681641 8.45508H17.6816M17.6816 8.45508L9.71289 1.45508M17.6816 8.45508L9.71289 15.4551"
              // stroke="black"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeDasharray="1.6 1.6"
            />
          </svg>
        ) : (
          ""
        )}
      </Link>
    );
  }

  return (
    <button
      ref={innerRef as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        ` inline-flex items-center justify-center cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed font-nunito gap-3`,
        themeClass,
        sizeClass,
        className
      )}
    >
      {content}

      {isArrow ? (
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.681641 8.45508H17.6816M17.6816 8.45508L9.71289 1.45508M17.6816 8.45508L9.71289 15.4551"
            // stroke="black"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeDasharray="1.6 1.6"
          />
        </svg>
      ) : (
        ""
      )}
    </button>
  );
}
