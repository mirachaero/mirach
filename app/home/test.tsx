"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Test() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return

    const gridSize = 100
    const cols = Math.ceil(window.innerWidth / gridSize) + 1
    const rows = Math.ceil(window.innerHeight / gridSize) + 1
    const squares = []

    // Create grid squares
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const square = document.createElement("div")
        square.className = "absolute border-[1px] border-[#6da7ff] bg-[#6da7ff]/5"
        square.style.width = gridSize + "px"
        square.style.height = gridSize + "px"
        square.style.left = x * gridSize + "px"
        square.style.top = y * gridSize + "px"
        square.style.opacity = "0"
        gridRef.current.appendChild(square)
        squares.push({ element: square, x, y })
      }
    }

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 3 })

    squares.forEach(({ element, x, y }) => {
      const delay = (x + y) * 0.06 // Diagonal sweep delay based on position sum
      timeline.to(
        element,
        {
          opacity: 0.8,
          duration: 0.3,
        },
        delay,
      )
      timeline.to(
        element,
        {
          opacity: 0,
          duration: 0.3,
        },
        delay + 0.5,
      )
    })

    return () => {
      timeline.kill()
      if (gridRef.current) {
        gridRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <main className="h-screen w-full   overflow-hidden flex items-center justify-center relative bg-[url('/assets/home/banner/mirach-banner-image.png')] bg-cover">
      {/* Dark background */}
      <div className="absolute inset-0 b " />

      {/* Grid container */}
      <div
        ref={gridRef}
        className="absolute inset-0"
        style={{
          perspective: "1000px",
        }}
      />

      {/* Text content on top */}
        <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">GSAP Grid Animation</h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Grid lines sweeping diagonally from top-left to bottom-right
        </p>
      </div>  
    </main>
  )
}
