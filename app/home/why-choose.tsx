"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateText from "@/src/components/molecules/AnimateText";
import { Activity, ReactNode, useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { ProfileDetailsModal } from "@/src/components/molecules/profileDetailsModal";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type profileProps = {
  image: string;
  name: string;
  designation: string;
  linkedinUrl?: string;
  content: ReactNode;
};

const profileData: profileProps[] = [
  {
    image: "/assets/home/why-choose/gurav-singh.png",
    name: "Gaurav Singh",
    designation: "Founder and CEO",
    linkedinUrl:
      "https://www.linkedin.com/in/gsaero?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    content: (
      <>
        <p className="text-base md:text-lg">
          Mr Gaurav is a Fixed Wing VTOL Unmanned Aerial Systems Architect with
          over a decade of extensive experience leading multidisciplinary UAV
          projects across India and Globally. His expertise spans Aircraft
          Design, Composite Manufacturing, Business Development, and end-to-end
          UAV product development, including flight operations for both defense
          and civil applications. Also, a 2 seater Microlight Aircraft Pilot.
        </p>
        <p className="text-base md:text-lg">
          {" "}
          PhD Scholar in Strategy & Entrepreneurship Management| Executive MBA ,
          IIM Lucknow | Master's Aeronautical Engineering, Moscow Aviation
          Institute, Russia & Beihang University, China | DGCA Certified Small
          Class RPAS Flight Instructor.
        </p>
      </>
    ),
  },
  {
    image: "/assets/home/why-choose/kamlesh-suryawanshi.jpg",
    name: "Kamlesh Suryawanshi",
    designation: "Founder and COO",
    // linkedinUrl: "#",
    content: (
      <>
        <p className="text-base md:text-lg">
          Mr Kamlesh is a seasoned Businessman for more than 2 decades in
          Flying, Airshows, Building, Training, Workshops of model Airplanes,
          Helicopter and All kinds of flying machine.
        </p>
        <p className="text-base md:text-lg">
          Self taught Prodigy, with ability to understand practical concepts of
          Aviaiton.
        </p>
        <p className="text-base md:text-lg">
          Masters and Bachelor's in Physical Education, DAVV Indore | CFI for
          Experimental Model Planes & DGCA RPAS Pilot.
        </p>
      </>
    ),
  },
];

export default function WhyChooseMirach() {
  return (
    <section id="why-choose-us" className="overflow-hidden why-choose-section">
      <div className="w-container relative">
        <div className="why-choose-bg absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(238,238,238,1)_90%)] scale-125 z-0">
          {" "}
        </div>

        <div className="relative z-10 flex flex-col xl:flex-row gap-6">
          <div
            className="why-choose-left w-full xl:w-1/2 blade-top-padding-lg"
            style={{ perspective: "1000px" }}
          >
            <AnimateText onscroll finalColor="#2a2b7d" intialColor="#656565">
              <h3 className="  text-blue font-medium custom-text-48">
                Why choose <b className="text-skyBlue font-normal">Mirach</b>
              </h3>
            </AnimateText>

            <div className="  w-full lg:max-w-3xl xl:max-w-lg 2xl:max-w-[520px] custom-text-24 text-darkGray">
              <AnimateText onscroll finalColor="#656565" intialColor="#d0d0d1">
                <p className="py-4 lg:py-6">
                  With a combined experience of over two decades in
                  <span className="text-black font-medium">
                    {" "}
                    Designing, Manufacturing, and Deploying UAS in Defence,
                    Government, and Civil Operations,{" "}
                  </span>
                  Mirach Aerospace empowers clients with scale and reliability.
                </p>
              </AnimateText>
              <AnimateText onscroll finalColor="#656565" intialColor="#d0d0d1">
                <p>
                  It's a mix of seasoned professionals and young drone
                  enthusiasts, collaborating to deliver reliable, cutting-edge
                  performance across all applications.
                </p>
              </AnimateText>
            </div>
          </div>

          <div className="w-full xl:w-1/2 xl:border-l-2 border-white">
            <div className="profile-cards-container grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 xl:gap-12 xl:mx-6 blade-bottom-margin-sm xlg:mx-10 mt-6 xl:mt-28">
              {profileData.map((ele, index) => {
                return (
                  <div key={index} className="profile-card">
                    <Card data={ele} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ data }: { data: profileProps }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Activity mode={open ? "visible" : "hidden"}>
        <ProfileDetailsModal data={data} onClose={() => setOpen(false)} />
      </Activity>

      <div onClick={() => setOpen(true)} className="group cursor-pointer">
        <div className="p-4  z-1 border border-skyBlue">
          <div className="h-80  lg:h-96 xl:h-64 xlg:h-72 2xl:h-80 relative group-hover:scale-105 transition-all duration-400 ease-in-out">
            <Image
              src={data.image}
              fill
              alt={data.name}
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 lg:mt-4 mx-2">
          <div>
            <h6 className="custom-text-20 font-medium text-[#3A3A3A] group-hover:text-blue group-hover:underline transition-all duration-400 ease-in-out underline-offset-2">
              {data.name}
            </h6>
            <p className="text-darkGray/90 text-base xl:text-lg">
              {data.designation}
            </p>
          </div>
          {data.linkedinUrl && (
            <div
              onClick={(e: any) => e.stopPropagation()}
              className="border border-blue rounded-sm"
            >
              <Link href={data.linkedinUrl} target="_blank">
                <svg
                  className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_7840)">
                    <path
                      d="M1.43523 7.32581H6.15009V21.5143H1.43523V7.32581ZM3.82422 0.486328C2.21052 0.486328 1.15625 1.54574 1.15625 2.93624C1.15625 4.29815 2.17967 5.38834 3.76251 5.38834H3.79258C5.43714 5.38834 6.46129 4.2981 6.46129 2.93624C6.43044 1.54574 5.43719 0.486328 3.82422 0.486328ZM17.7264 6.99251C15.2237 6.99251 14.1025 8.36909 13.4769 9.33447V7.32581H8.7607C8.82315 8.65687 8.7607 21.5143 8.7607 21.5143H13.4769V13.5904C13.4769 13.1661 13.5079 12.7433 13.6319 12.4392C13.9734 11.592 14.7494 10.7147 16.0509 10.7147C17.7587 10.7147 18.4407 12.0164 18.4407 13.9229V21.5143H23.1562V13.3784C23.1562 9.02029 20.8304 6.99251 17.7264 6.99251Z"
                      fill="#21225D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_7840">
                      <rect width="23.2222" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
