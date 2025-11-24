"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/atoms/button";
import { cn } from "@/src/utils/cn";

const navLinks = [
  { name: "About us", href: "/about-us" },
  { name: "Applications", href: "/applications" },
  { name: "Products", href: "/products" },
  { name: "Why choose us", href: "/why-choose-us" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? " bg-black/10 backdrop-blur-3xl py-2 2xl:py-4"
          : "bg-transparent py-3 2xl:py-4"
      )}
    >
      <div className="w-container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`relative    transition-all duration-300  ${
            scrolled
              ? "w-32 h-12 md:w-60 md:h-16 "
              : " w-32 h-12 md:w-60 md:h-16 2xl:h-18 "
          }`}
        >
          <Image
            src="/mirach-logo.png"
            alt="Mirach Aerospace"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-sm lg:text-lg tracking-wide hover:text-skyBlue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Button
            text="Join us"
            theme="blue"
            size="large"
            link="#join-us"
            role="link"
            className="lg:px-12 xlg:py-3.5"
          />
        </div>

        {/* Mobile Menu Toggle (Placeholder for now) */}
        <button className="lg:hidden text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
