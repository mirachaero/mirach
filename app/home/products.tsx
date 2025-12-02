"use client";

import { Button } from "@/src/components/atoms/button";
import { cn } from "@/src/utils/cn";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CloudCog } from "lucide-react";
import AnimateText from "@/src/components/molecules/AnimateText";

type ProductsData = {
  status: "available" | "coming soon";
  label: string;
  title: React.ReactNode;
  features: string[];
  images: string[];
  ctaText: string;
  ctaLink: string;
  id:number;
};

const productsData: ProductsData[] = [
  {  id:0,
    status: "available",
    label: "Tailsitter – Zeus Alpha",
    title: (
      <h3 className="custom-text-48 font-medium text-lightGray/50 max-w-sm xlg:max-w-md">
        Survelliance Tailsitter - <span className="text-white">Zeus (β)</span>
      </h3>
    ),
    features: [
      "Payload: Up to 1.5 kg",
      "Speed: Up to 120 km/hr",
      "Flight time: Up to 60 min",
      "Range: Up to 60 km",
    ],
    images: ["/assets/home/products/tailsitter–zeus-alpha.png"],
    ctaText: "Know more",
    ctaLink: "#",
  },
  { id:1,
    status: "available",
    label: "Loiter Munition Multicopter – Bolt",
    title: (
      <h3 className="custom-text-48 font-medium text-lightGray/50 max-w-sm xlg:max-w-md">
        Loiter Munition Multicopter – <span className="text-white">Bolt</span>
      </h3>
    ),
    features: [
      "Flight time: <20 min",
      "Speed: Up to 210 km/h",
      "Altitude serviceable (AMSL): 4,000 m",
      "Range: <5 km",
      "Target destruction: Air-to-air and Air-to-ground",
      "FPV feed: Analog",
      "Surveillance with EO/IR camera: Target detection up to 1 km",
      "Features: Live FPV feed, GPS free navigation, Reconnaissance with target locking",
    ],
    images: ["/assets/home/products/loiter-munition-multicopter–bolt.png"],
    ctaText: "Know more",
    ctaLink: "#",
  },

  { id:2,
    status: "available",
    label: "Helicopter – Bumblebee MK I",
    title: (
      <h3 className="custom-text-48 font-medium text-lightGray/50 max-w-sm xlg:max-w-md">
        Helicopter – <span className="text-white">Bumblebee MK I</span>
      </h3>
    ),
    features: [
      "Payload: up to 1 kg",
      "Speed: Up to 60 km/h",
      "Flight time: Up to 60 min",
      "Range: Up to 20 km",
      "Use case: Surveillance, Tactical Helicopter UAV for high altitude, high-resolution, aerial eye and surveillance.",
    ],
    images: [
      "/assets/home/products/helicopter–bumblebee-MK-I-v1.png",
      "/assets/home/products/helicopter–bumblebee-MK-I-v2.png",
    ],
    ctaText: "Know more",
    ctaLink: "#",
  },
  { 
    id:3,
    status: "available",
    label: "Fixed Wing – X777",
    title: (
      <h3 className="custom-text-48 font-medium text-lightGray/50 max-w-sm xlg:max-w-md">
        Surveillance and Loiter Munition Fixed Wing –{" "}
        <span className="text-white">X777</span>
      </h3>
    ),
    features: [
      "Payload: Up to 2 kg",
      "Speed: Up to 140 km/hr",
      "Flight time: Up to 120 min",
      "Range: Up to 100 km",
      "Use case: Surveillance and Loiter munition.",
    ],
    images: ["/assets/home/products/fixed-wing–X777.png"],
    ctaText: "Know more",
    ctaLink: "#",
  },
  { 
    id:4,
    status: "coming soon",
    label: "VTOL logistics and UAM – Eagleray",
    title: (
      <h3 className="custom-text-48 font-medium text-lightGray/50 max-w-sm xlg:max-w-md">
        VTOL logistics and UAM – <span className="text-white">Eagleray</span>
      </h3>
    ),
    features: [
      "Payload: up to 5 kg",
      "Speed: Up to 120 km/h",
      "Altitude serviceable (AMSL): 4,000 m",
      "Range: 60 km",
      "Flight time: <120 min, extended up to 240 min with payload replaceable batteries",
      "Features: Live FPV feed, GPS free navigation, Reconnaissance with target locking",
    ],
    images: [
      "/assets/home/products/VTOL-logistics-and-UAM–eagleray-v1.png",
      "/assets/home/products/VTOL-logistics-and-UAM–eagleray-v2.png",
    ],
    ctaText: "Know more",
    ctaLink: "#",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLButtonElement[]>([]);
  const [activeProduct, setActiveProduct] = useState<number>(0);
  const [activeProductData, setActiveProductData] = useState<ProductsData>(
    productsData[activeProduct]
  );

  const handleScroll = (idx: number) => {
    const container = containerRef.current;
    const tab = tabRef.current[idx];

    if (container && tab) {
      const offset =
        tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
      console.log(offset);
    }
  };
  const handleProductChange = (idx: number) => {
    setActiveProduct(idx);
    setActiveProductData(productsData[idx]);
    handleScroll(idx);
  };

  return ( 
 

    <div className="bg-white -mt-[1px]  ">

    <section id="products" className="bg-[url(/assets/home/products/background.jpg)] bg-cover bg-center bg-no-repeat  clip-path-wave-top  ">
      <div className=" relative blade-top-padding blade-bottom-padding">
        <div className="w-container ">
          <h2 className="custom-text-48 font-medium text-white text-center">
            Products
          </h2>

          <p className="custom-text-24 text-lightGray text-center mt-2 lg:mt-4">
            Engineered for performance and reliability
          </p>
        </div>
        <div ref={containerRef} className="overflow-x-auto no-scrollbar px-4">
          <div className="flex text-nowrap md:flex-wrap xl:justify-center mx-auto w-fit gap-x-4 gap-y-6 xlg:gap-x-6 mt-8 lg:mt-12 ">
            {productsData.map((product, idx) => (
              <button
                onClick={() => handleProductChange(idx)}
                key={idx}
                ref={(el: HTMLButtonElement) => {
                  if (tabRef.current) {
                    tabRef.current[idx] = el;
                  }
                }}
                className={cn(
                  "relative border-white/50 border-[1px] custom-text-18 font-medium text-white/50 hover:bg-skyBlue/30 py-3 xlg:py-4 2xl:py-5 px-3 2xl:px-9 cursor-pointer transition-all  duration-300",
                  {
                    "border-white": activeProduct === idx,
                    "text-white ": activeProduct === idx,
                  }
                )}
              >
                {product.label}
                {product.status === "coming soon" && (
                  <span className="uppercase inline-block absolute -top-2.5 right-4 bg-[#3382FB] text-white px-2 text-sm">
                    {" "}
                    Coming soon{" "}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="w-container ">
          <ProductCard product={activeProductData} />
        </div>
      </div>
    </section>
    
    </div>

  );
}

const ProductCard = ({ product }: { product: ProductsData }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const currentImageIndexRef = useRef<number>(0);
  const autoRotateTimelineRef = useRef<gsap.core.Tween | null>(null);

  // Function to switch images with GSAP animation
  const switchToImage = (newIndex: number) => {
    if (!imageContainerRef.current) return;
    if (newIndex === currentImageIndexRef.current) return;

    const images =
      imageContainerRef.current.querySelectorAll(".carousel-image");
    const bullets =
      imageContainerRef.current.querySelectorAll(".bullet-indicator");

    if (images.length <= 1) return;

    const currentImage = images[currentImageIndexRef.current];
    const nextImage = images[newIndex];

    // Animate image transition with crossfade
    const tl = gsap.timeline();
    tl.fromTo(currentImage, {
      opacity: 1,
      // scale: 0.95,
      x:0,
    
    },{  
      x:-100,
      opacity: 0,
          duration: 0.4,
      ease: "power1.inOut",
    });
    tl.fromTo(
      nextImage,
      {
        opacity: 0,
         x:200,
         
      },
      {
        x:0,
        opacity: 1, 
        duration: 0.4,
        ease: "power1.inOut",
      },
      
      "+=0.01"
    ); // Overlap animations for smooth crossfade

    // Update bullet indicators
    bullets.forEach((bullet, idx) => {
      if (idx === newIndex) {
        gsap.to(bullet, {
          backgroundColor: "rgba(255, 255, 255, 1)",
          scale: 1.1,
          duration: 0.3,
        });
      } else {
        gsap.to(bullet, {
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          scale: 1,
          duration: 0.3,
        });
      }
    });

    currentImageIndexRef.current = newIndex;
  };

  // Setup auto-rotation with GSAP
  useEffect(() => {
    if (product.images.length <= 1) return;

    // Clear any existing timeline
    if (autoRotateTimelineRef.current) {
      autoRotateTimelineRef.current.kill();
    }

    // Create auto-rotation timeline
    const autoRotate = () => {
      const nextIndex =
        (currentImageIndexRef.current + 1) % product.images.length;
      switchToImage(nextIndex);
    };

    // Use GSAP delayedCall for auto-rotation
    const createAutoRotation = () => {
      autoRotateTimelineRef.current = gsap.delayedCall(3, () => {
        autoRotate();
        createAutoRotation(); // Recursively create next rotation
      });
    };

    createAutoRotation();

    return () => {
      if (autoRotateTimelineRef.current) {
        autoRotateTimelineRef.current.kill();
      }
    };
  }, [product.images.length]);

  // Reset to first image when product changes
  useEffect(() => {
    if (!imageContainerRef.current) return;

    const images =
      imageContainerRef.current.querySelectorAll(".carousel-image");
    const bullets =
      imageContainerRef.current.querySelectorAll(".bullet-indicator");

    // Reset all images and bullets without animation
    images.forEach((img, idx) => {
      gsap.set(img, {
        opacity: idx === 0 ? 1 : 0,
        scale: 1,
      });
    });

    bullets.forEach((bullet, idx) => {
      gsap.set(bullet, {
        backgroundColor:
          idx === 0 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
        scale: idx === 0 ? 1.1 : 1,
      });
    });

    currentImageIndexRef.current = 0;
  }, [product]);

  // Animation when the product changes
  useEffect(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out", duration: 0.5 },
        });

        // Image animation
        tl.from(".pc-image-container", {
          opacity: 0,
          x:100
        });

        // Left block (title + button)
        tl.from(
          ".pc-left",
          {
            opacity: 0,
            y: 30,
          },
          "-=0.3"
        );

        // Feature list stagger
        tl.from(
          ".pc-feature",
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
          },
          "-=0.2"
        );
      }, cardRef);

      return () => ctx.revert();
    },
    [product] // runs whenever product changes
  );

  return (
    <div ref={cardRef} className="">
      <div
        ref={imageContainerRef}
        className=" h-60 md:h-70 2xl:h-70 relative mt-2 "
      >  
        {
          product.id === 4 &&
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45px] md:text-[60px] lg:text-[80px] xlg:text-[100px] 2xl:text-[120px]  text-nowrap font-medium text-white/10  ">
              COMING SOON
            </h3>
        }
        {/* Render all images stacked, control visibility with GSAP */}
        {product.images.map((imageSrc, idx) => (
          <Image
            key={idx}
            src={imageSrc}
            className="object-contain  pc-image-container carousel-image absolute inset-0 "
            fill
            unoptimized
            alt={`${product.label} - Image ${idx + 1}`}
            style={{ opacity: idx === 0 ? 1 : 0 }}
          />
        ))}

        {/* Bullet indicators - only show if there are 2+ images */}
        {product.images.length > 1 && (
          <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  // Kill auto-rotation temporarily and restart it
                  if (autoRotateTimelineRef.current) {
                    autoRotateTimelineRef.current.kill();
                  }
                  switchToImage(idx);

                  // Restart auto-rotation after manual selection
                  autoRotateTimelineRef.current = gsap.delayedCall(3, () => {
                    const nextIndex =
                      (currentImageIndexRef.current + 1) %
                      product.images.length;
                    switchToImage(nextIndex);

                    // Continue auto-rotation
                    const createAutoRotation = () => {
                      autoRotateTimelineRef.current = gsap.delayedCall(
                        3,
                        () => {
                          const next =
                            (currentImageIndexRef.current + 1) %
                            product.images.length;
                          switchToImage(next);
                          createAutoRotation();
                        }
                      );
                    };
                    createAutoRotation();
                  });
                }}
                className="bullet-indicator  w-3 h-3 rounded-full transition-all duration-300 bg-white/40 hover:bg-white/60"
                style={{
                  backgroundColor:
                    idx === 0
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.4)",
                  scale: idx === 0 ? "1.1" : "1",
                }}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr]  gap-x-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-20 xlg:gap-x-30 mt-2">
        <div className="justify-self-center pc-left ">
          {product.title}
          {/* <div className="mt-8 md:block hidden  w-fit">
            <Button
              text={product.ctaText}
              link={product.ctaLink}
              role="link"
              type="button"
              theme="blue"
              size="large"
              className="px-8 font-medium"
            />
          </div> */}
        </div>

        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 list-disc md:list-none ml-3 md:ml-0  gap-y-2 md:gap-y-4 text-white custom-text-20 mt-4 md:mt-0 items-end">
            {product.features.map((feature, idx) => (
              <li
                key={idx}
                className=" md:border-b   border-white/50 pb-1 xlg:pb-3 pr-4 md:pr-10 lg:pr-12 pc-feature md:h-full "
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
