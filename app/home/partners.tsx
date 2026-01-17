import AnimateText from "@/src/components/molecules/AnimateText";
import Image from "next/image";

type PartnerProps = {
  image: string;
  alt: string;
};

const incubatedData: PartnerProps[] = [
  {
    image: "/assets/home/partners/IIT-indore.png",
    alt: "Indian Institute of Technology Indore",
  },
  {
    image: "/assets/home/partners/drishti-cps-foundation.png",
    alt: "Drishti CPS Foundation IIT Indore",
  },
  {
    image: "/assets/home/partners/IIMU.png",
    alt: "Indian Institute of Management Udaipur",
  },
  {
    image: "/assets/home/partners/IIM-udaipur.png",
    alt: "Indian Institute of Management Udaipur",
  },
];

const partnerData: PartnerProps[] = [
  {
    image: "/assets/home/partners/elected.png",
    alt: "Electro Pneumatics",
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(238,238,238,1)_90%)]"
    >
      <div className="xl:w-[80%] mx-auto border-t-2 border-white blade-top-padding blade-bottom-padding">
        {/* Incubated At Section */}
        <div className="mb-12 md:mb-16">
          <AnimateText finalColor="#2a2b7d" intialColor="#9E9FBF">
            <h2 className="custom-text-48 font-medium text-blue text-center">
              Incubated At
            </h2>
          </AnimateText>
          <div className="flex flex-wrap gap-10 gap-y-14 mx-auto w-full max-w-4xl px-4 mt-8 md:mt-12 justify-center">
            <div className=" flex items-center justify-center relative w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-[100px] md:h-[140px] lg:h-[160px]  border border-skyBlue bg-white/30 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5">
              <div className="relative w-full h-full">
                <Image
                  src={incubatedData[0].image}
                  alt={incubatedData[0].alt}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src={incubatedData[1].image}
                  alt={incubatedData[1].alt}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
              <h4 className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-lg text-darkGray">
                IIT Indore
              </h4>
            </div>
            <div className="flex items-center justify-center relative w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-[100px] md:h-[140px] lg:h-[160px]  border border-skyBlue bg-white/30 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5">
              <div className="relative w-full h-full">
                <Image
                  src={incubatedData[2].image}
                  alt={incubatedData[2].alt}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src={incubatedData[3].image}
                  alt={incubatedData[3].alt}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
              <h4 className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-lg text-darkGray">
                IIM Udaipur
              </h4>
            </div>

            {/* {incubatedData.map((institute, index) => (
              <div
                key={index}
                className="flex items-center justify-center relative w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-[100px] md:h-[140px] lg:h-[160px] xl:h-[180px] border border-skyBlue bg-white/30 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={institute.image}
                    alt={institute.alt}
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>
              </div>
            ))} */}
          </div>
        </div>

        {/* Partners Section */}
        <div className="pt-4 md:pt-8">
          <AnimateText finalColor="#2a2b7d" intialColor="#9E9FBF">
            <h2 className="custom-text-48 font-medium text-blue text-center">
              Our Esteemed Partners
            </h2>
          </AnimateText>
          <div className="flex flex-wrap gap-6 md:gap-8 2xl:gap-10 mx-auto w-full max-w-4xl px-4 mt-8 md:mt-12 justify-center">
            {partnerData.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center relative w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-[100px] md:h-[140px] lg:h-[160px]  border border-skyBlue bg-white/30 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
