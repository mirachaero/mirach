import { Button } from "@/src/components/atoms/button";
import Image from "next/image";
import Link from "next/link";
import OurValuesPartTwo from "./our-values-part-two";
import AnimateText from "@/src/components/molecules/AnimateText";

export default function OurValues() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-container blade-top-padding-lg">
        <div className="">
          <AnimateText onscroll={true}>
            <h2 className="custom-text-48 text-white md:max-w-3xl xl:max-w-[60vw] 2xl:max-w-[50vw]   font-medium">
              From concept to build, we create{" "}
              <span className="text-skyBlue"> Unmanned</span>{" "}
              <span className="text-skyBlue"> Aerial </span>{" "}
              <span className="text-skyBlue"> Systems </span>{" "}
              <span className="text-skyBlue"> (UAS) </span> that deliver
            </h2>
          </AnimateText>
        </div>
        <div className="border-y border-darkGray grid grid-cols-1 xl:grid-cols-2 mt-6 xl:mt-12">
          <div className="pt-4 md:pt-8 xl:p-8 xl:pl-0 h-80 md:h-100 xl:h-auto xl:border-r xl:border-darkGray">
            <div
              style={{
                background:
                  "linear-gradient(180deg, #CDCDCD 18.18%, #5387D8 115.7%)",
              }}
              className="h-full w-full flex items-center"
            >
              <div className="relative h-[85%] xl:h-1/2 w-full ">
                <Image
                  src="/assets/home/our-values/mirach-tailsitter-UAV.png"
                  alt="Mirach Tailsitter UAV"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="our-value-trigger text-lightGray font-normal space-y-4 2xl:space-y-6 py-4 md:py-8 xl:p-8  2xl:pl-[5vw] 2xl:py-12">
              <AnimateText onscroll={true}>
                <p className="custom-text-24">
                  As a Defence deep-tech manufacturing company driven by
                  research and development, we, at Mirach Aerospace, deliver
                  India-made, purpose-specific aerial mobility, manufacturing
                  and autonomous drone technology solutions for{" "}
                  <span className="text-white font-medium">
                    Defence, Government, and Civil operations applications.
                  </span>
                </p>
              </AnimateText>
              <AnimateText onscroll={true}>
                <p className="custom-text-24">
                  The unmanned vertical we cater is Loiter Munition UASs for
                  tactical operations, logistic UAVs for emergency medicine
                  supplies, or Army Payloads at high terrain regions, and
                  surveillance reconnaissance UAVs for live tracking intruders
                  or thefts by the armed forces.
                </p>
              </AnimateText>
              <AnimateText onscroll={true}>
                <p className="custom-text-24">
                  Attuned to the wide applications, we design, manufacture and
                  develop sophisticated UAS with Artificial Intelligence onboard
                  from the ground up (up to large class). Embellished with
                  proficient drone technology champions, our end-to-end hardware
                  and software solutions span all aircraft types (fixed wing,
                  hybrid VTOL, helicopters, multicopters and tailsitters)
                </p>
              </AnimateText>
              <div className="pt-6 space-x-6 md:space-x-10 space-y-6">
                <Button
                  text="Join us"
                  theme="blue"
                  size="large"
                  role="link"
                  className="px-10 md:px-16 lg:py-3.5"
                />
                <Link
                  className="custom-text-20 text-lg md:text-xl inline-block text-skyBlue relative after:absolute after:-bottom-2 after:left-0 after:w-8 hover:after:w-full after:h-px after:bg-skyBlue after:transition-all after:duration-600"
                  href="/initiatives"
                >
                  Explore our initiatives
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurValuesPartTwo />

      <div className="absolute inset-0 backdrop-blur-[100px] bg-black/5 -z-1"></div>
      <div className="absolute bottom-[30%] left-[85%] bg-radial from-30% to-90% from-[#3382FB]/60 to-[#3382FB]/10 rounded-full w-[30rem] h-[20rem] -z-2 scale-y-[4] scale-x-[2]"></div>
      <div className="absolute bottom-[1%] right-[85%] bg-radial from-30% to-90% from-[#3382FB]/60 to-[#3382FB]/10 rounded-full w-[30rem] h-[20rem] -z-2 scale-y-[3] scale-x-[2]"></div>
    </section>
  );
}
