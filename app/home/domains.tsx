"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/src/components/atoms/button";

export default function Domains() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    swiperInstance?.slideTo(index);
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="w-container blade-top-padding blade-bottom-padding">
        <div className="mb-8 md:mb-12">
          <h2 className="text-blue custom-text-48 font-medium text-center">
            Bringing designed and{" "}
            <span className="text-skyBlue">Made-in-India</span>
            <br /> drone intelligence to every domain
          </h2>
        </div>

        {/* Tabs - visible only on md (768px) and above */}
        <div className="hidden md:flex flex-wrap 2xl:justify-center gap-3 mb-8 2xl:mb-12">
          {DomainsData.map((domain, index) => (
            <Button
              key={index}
              text={domain.title}
              onClick={() => handleTabClick(index)}
              theme="transparent"
              role="button"
              type="button"
              size="base"
              className={`px-2 py-3 2xl:py-4 text-sm xlg:text-base font-medium  ${activeIndex === index
                ? "opacity-100 "
                : "opacity-30 hover:opacity-100"
                }`}
            />
          ))}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView={1.04}
          touchRatio={1}
          speed={1000}
          touchAngle={45}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
              speed: 0,
            },
          }}
          grabCursor={true}
          simulateTouch={true}
          autoHeight={false}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="!overflow-visible md:!overflow-hidden"
        >
          {DomainsData.map((domain, index) => (
            <SwiperSlide key={index}>
              <div className="h-120 lg:h-130 2xl:h-150 md:flex  border border-lightGray">
                {/* Image - Top on mobile, Right on desktop */}
                <div className="w-full h-60 md:h-full relative md:absolute inset-0 z-0">
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Content - Bottom on mobile, Left on desktop */}
                <div className="relative z-2 w-full  mt-auto px-3 py-3 md:px-8 md:py-6">
                  <h3 className=" custom-text-36 bg-clip-text text-transparent  bg-[linear-gradient(88deg,_#2a2b7d_10.4%,_#6da7ff_90.41%)] md:bg-[linear-gradient(88deg,_#FFF_1.4%,_#002FFF_152.41%)] lg:custom-text-48 font-medium w-fit ">
                    {domain.title}
                  </h3>
                  <ul className="flex flex-wrap gap-x-10 mt-2 lg:mt-6">
                    {domain.poins.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3  custom-text-18 text-black md:text-white"
                      >
                        <span className="inline-block  w-2 h-2 lg:w-2 lg:h-2 bg-skyBlue   mt-2 flex-shrink-0"></span>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const DomainsData = [
  {
    title: "Defence and Security",
    poins: [
      "Surveillance and reconnaissance",
      "Loiter Munition",
      "Target acquisition and intelligence gathering",
      "Swarming and autonomous operations",
    ],
    image: "/assets/home/domains/defence-and-security.png",
  },
  {
    title: "Research and Development",
    poins: [
      "Technology demonstration",
      "Experimental UAV programs",
      "Data collection and analysis",
      "Customized mission simulations",
    ],
    image: "/assets/home/domains/r-and-d.png",
  },
  {
    title: "Composite Manufacturing",
    poins: ["Custom composite UAV airframe and component design manufacturing"],
    image: "/assets/home/domains/composite-manufacturing.png",
  },
  {
    title: "Industrial and Commercial Applications",
    poins: [
      "Surveying and mapping Infrastructure inspection",
      "Agriculture and forestry monitoring.",
      "Cargo and logistics",
    ],
    image: "/assets/home/domains/industrial-and-commercial-applications.png",
  },
  {
    title: "Environmental and Scientific",
    poins: [
      "Disaster management and relief ops",
      "Wildlife and forest monitoring",
      "Pollution and environmental monitoring",
    ],
    image: "/assets/home/domains/environmental-and-scientific.png",
  },
  {
    title: "Mission-specific Applications",
    poins: [
      "Payload-specific drones (LiDAR, radar, sensors)",
      "Long-endurance and stealth designs",
      "Hybrid and tailsitter configurations for unique operational needs",
    ],
    image: "/assets/home/domains/mission-specific-applications.png",
  },
];
