"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/atoms/button";
import { cn } from "@/src/utils/cn";
import gsap from 'gsap';





const navLinks = [
  { name: "About us", href: "#about-us" },
  { name: "Applications", href: "#applications" },
  { name: "Products", href: "#products" },
  { name: "Why choose us", href: "#why-choose-us" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setScrolled(currentScrollY > 50);

      // Only apply hide/show logic for desktop (lg and above)
      // Check if screen width is >= 1024px (lg breakpoint)
      if (window.innerWidth >= 1024) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always visible on mobile/tablet
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {

    setMobileMenuOpen(false);
  };



  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          scrolled
            ? "bg-black/30 backdrop-blur-3xl py-2 2xl:py-4"
            : "bg-transparent py-3 2xl:py-4",
          // Hide/show on scroll for desktop only
          !isVisible && "lg:-translate-y-full"
        )}
      >
        <div className="w-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/" 
            onClick={closeMobileMenu}
            className={cn(
              "relative transition-all duration-300",
              scrolled
                ? "w-32 h-12 md:w-60 md:h-16"
                : "w-32 h-12 md:w-60 md:h-16 2xl:h-18"
            )}
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
          <nav className="hidden lg:flex items-center gap-x-14">
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

          {/* Action Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              text="Join us"
              theme="blue"
              size="large" 
              target="_blank"
              link="mailto:info@mirachaerospace.com"
              role="link"
              className="lg:px-12 xlg:py-3.5"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 z-50 relative"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-8 h-6 flex flex-col justify-between items-end">
              <span
                className={cn(
                  "block h-0.5 bg-white transition-all duration-300 ease-out",
                  mobileMenuOpen ? "w-8 rotate-45 translate-y-[11px]" : "w-8"
                )}
              />

              <span
                className={cn(
                  "block h-0.5 bg-white transition-all duration-300 ease-out",
                  mobileMenuOpen ? "w-8 opacity-0" : "w-6"
                )}
              />

              <span
                className={cn(
                  "block h-0.5 bg-white transition-all duration-300 ease-out",
                  mobileMenuOpen ? "w-8 -rotate-45 -translate-y-[11px]" : "w-8"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-2xl transition-opacity duration-500",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full sm:w-[400px] bg-gradient-to-br from-blue/95 via-[#1a1b5d]/95 to-black/95 backdrop-blur-3xl shadow-2xl transition-transform duration-500 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            <nav className="flex flex-col gap-2 mb-12">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}

                  className={cn(
                    "text-white text-2xl sm:text-3xl font-medium text-center tracking-wide py-4 border-b border-white/10 hover:text-skyBlue hover:pl-4 transition-all duration-300",
                    mobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  )}
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${index * 100 + 100}ms`
                      : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div
              className={cn(
                "mt-auto transition-all duration-500",
                mobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: mobileMenuOpen ? "500ms" : "0ms",
              }}
            >
              <Button
                text="Join us"
                theme="blue"
                size="large"
                link="mailto:info@mirachaerospace.com"
                role="link"
                className="w-full justify-center py-4 text-xl shadow-lg shadow-skyBlue/20 hover:shadow-skyBlue/40"
                onClick={closeMobileMenu}
              />
            </div>

            <div
              className={cn(
                "absolute bottom-0 right-0 w-64 h-64 bg-skyBlue/10 rounded-full blur-3xl transition-all duration-700",
                mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}
              style={{
                transitionDelay: mobileMenuOpen ? "300ms" : "0ms",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
