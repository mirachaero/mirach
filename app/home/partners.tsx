import AnimateText from "@/src/components/molecules/AnimateText";
import Image from "next/image";

type PartnerProps = {
  image: string;
  alt: string;
};

const partnerData: PartnerProps[] = [
  {
    image: "/assets/home/partners/drishti-cps-foundation.png",
    alt: "Drishti CPS Foundation IIT Indore",
  },
  {
    image: "/assets/home/partners/electro-pneumatics.png",
    alt: "Electro Pneumatics",
  },
  {
    image: "/assets/home/partners/hydraulic-india.png",
    alt: "Hydraulic India",
  },
  {
    image: "/assets/home/partners/IIMU.png",
    alt: "Indian Institute of Management Udaipur",
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(238,238,238,1)_90%)]"
    >
      <div className="xl:w-[80%] mx-auto  border-t-2 border-white blade-top-padding blade-bottom-padding">
        <AnimateText finalColor="#2a2b7d" intialColor="#9E9FBF">
          <h2 className="custom-text-48 font-medium text-blue text-center">
            Our esteemed partners
          </h2>
        </AnimateText>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 2xl:gap-6 w-container mt-6 md:mt-10">
          {partnerData.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center relative w-full h-[80px] lg:h-[100px] xl:h-[120px] xlg:h-[140px] 2xl:h-[168px] border border-skyBlue"
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
