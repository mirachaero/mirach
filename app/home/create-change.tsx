import { Button } from "@/src/components/atoms/button";
import AnimateText from "@/src/components/molecules/AnimateText";
import Image from "next/image";
// import logo from "@/public/assets/home/create-changes/background.webp"
export default function CreateChange() {
  return (
    <section className="bg-[#EEEEEE]  relative ">
      <div className="w-container   relative bg-black grid grid-cols-1 lg:grid-cols-2 p-4 md:p-10">
        <Image
          src="/assets/home/create-changes/background.webp"
          alt="create change"
          fill
          quality={100}
          className="object-cover md:object-center object-left z-0"
        />

        <div className="max-w-xl z-1 xl:p-5 2xl:p-10 pt-5 ">
          <AnimateText onscroll finalColor="#fff" intialColor="#656565">
            <h2 className="text-white font-medium custom-text-48 mb-4 xl:mb-8">
              Let's{" "}
              <span
                className="bg-gradient-to-r from-[#2582FE] via-[#5BA3FF] to-[#2582FE] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                style={{ backgroundPosition: "0% center" }}
              >
                create change
              </span>{" "}
              that takes India higher
            </h2>
          </AnimateText>
          <div className="w-full max-w-md">
            <div className="custom-text-24 w-full   xl:max-w-md xlg:max-w-xl space-y-3 lg:space-y-4 ">
              <AnimateText onscroll finalColor="#fff" intialColor="#656565">
                <p className="text-white font-medium">
                  Change doesn't wait for the right moment. It begins with
                  commitment.
                </p>
              </AnimateText>
              <AnimateText
                onscroll
                finalColor="#FFFFFFCC"
                intialColor="#656565"
              >
                <p className=" text-white/90 ">
                  At Mirach Aerospace, every contribution counts. Whether you
                  are a professional, student, partner, volunteer, there is a
                  place for you here.
                </p>
              </AnimateText>
              <AnimateText
                onscroll
                finalColor="#FFFFFFCC"
                intialColor="#656565"
              >
                <p className=" text-white/90 ">
                  Join our mission to advance India's aerospace innovation in
                  any capacity. As an equal-opportunity organization that values
                  initiative, collaboration, and shared purpose, we will be
                  happy to have you.
                </p>
              </AnimateText>
              <div className="pb-6 md:pb-0">
                <Button
                  text="Join us"
                  theme="blue"
                  size="base"
                  role="link"
                  className="w-fit mt-4 px-10 font-medium "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-start-1 row-start-1 lg:h-auto h-100 lg:col-start-2">
          <Image
            src="/assets/home/create-changes/india-map.webp"
            alt="india map"
            fill
            quality={100}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
