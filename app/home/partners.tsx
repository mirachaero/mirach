import AnimateText from "@/src/components/molecules/AnimateText";
import Image from "next/image";

type PartnerProps = {
  image: string;
  label?: string;
  alt: string;
};

const partnerData: PartnerProps[] = [
  {
    image: "/assets/home/partners/drishti-cps-foundation.png",
    alt: "Drishti CPS Foundation IIT Indore",
    label: "Incubated at",
  },
<<<<<<< HEAD
  // {
  //   image: "/assets/home/partners/electro-pneumatics.png",
  //   alt: "Electro Pneumatics",
  // },
  // {
  //   image: "/assets/home/partners/hydraulic-india.png",
  //   alt: "Hydraulic India",
  // },

=======
>>>>>>> d5e9f7587f0d86ef23bc1b065100e5d0959b7308
  {
    image: "/assets/home/partners/elected.png",
    alt: "Electro Pneumatics",
    label: "",
  },
  {
    image: "/assets/home/partners/IIMU.png",
    alt: "Indian Institute of Management Udaipur",
    label: "Incubated at",
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(238,238,238,1)_90%)]"
    >
      <div className="xl:w-[80%] mx-auto border-t-2 border-white blade-top-padding blade-bottom-padding">
        <AnimateText finalColor="#2a2b7d" intialColor="#9E9FBF">
          <h2 className="custom-text-48 font-medium text-blue text-center">
            Our esteemed partners
          </h2>
        </AnimateText>
<<<<<<< HEAD
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 2xl:gap-6 mx-auto w-full max-w-4xl xlg:max-w-6xl px-4 mt-6 md:mt-10">
          {partnerData.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center relative w-full h-[80px] lg:h-[140px]   2xl:h-[168px] border border-skyBlue"
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                fill
                quality={100}
                className="object-cover"
              />
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 2xl:gap-6 mx-auto w-full max-w-6xl px-4 mt-8 md:mt-16">
          {partnerData.map((partner, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-8 md:h-10 flex items-center justify-center">
                <p className="text-[#656565] text-center custom-text-16 font-medium">
                  {partner.label}
                </p>
              </div>
              <div className="flex items-center justify-center relative w-full h-[120px] lg:h-[130px] xl:h-[140px] xlg:h-[150px] 2xl:h-[168px] border border-skyBlue bg-white/30 px-6 py-4">
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
>>>>>>> d5e9f7587f0d86ef23bc1b065100e5d0959b7308
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
