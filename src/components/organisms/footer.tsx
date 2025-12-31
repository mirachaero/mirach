import Image from "next/image";
import { Button } from "@/src/components/atoms/button";
import Link from "next/link";
import AnimateText from "../molecules/AnimateText";

const footerLinks = [
  { name: "Invest", href: "mailto:info@mirachaerospace.com" },
  // { name: "CSR collaborations", href: "mailto:info@mirachaerospace.com" },
  // { name: "Donate", href: "mailto:info@mirachaerospace.com" },
  { name: "Careers", href: "mailto:info@mirachaerospace.com" },
  // { name: "Skill-based contributions", href: "mailto:info@mirachaerospace.com" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gray blade-top-padding-lg">
      <div className="w-container">
        <div className="text-center">
          <AnimateText finalColor="#2a2b7d" intialColor="#9E9FBF">
            <h2 className="custom-text-48 text-blue font-medium ">
              Partner with Mirach Aerospace <br /> to shape the future of
              unmanned aerial missions.
            </h2>
          </AnimateText>

          {/* <div className="grid md:flex flex-wrap justify-center xl:grid grid-cols-2 md:grid-cols-5 text-nowrap gap-3 md:gap-4 lg:gap-6 mt-8 md:mt-10 "> */}
          <div className="grid grid-cols-2 max-w-2xl  mx-auto text-nowrap gap-3 md:gap-4 lg:gap-6 mt-8 md:mt-10 ">
            {footerLinks.map((link, idx) => (
              <Button
                key={link.name}
                text={link.name}
                theme="transparent"
                size="large"
                link={link.href}
                role="link"
                className={` text-black border-white xl:text-lg font-medium   xl:w-full xl:py-4 2xl:py-6 ${idx === 4 ? "col-span-2" : ""
                  } md:col-span-1`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center leading-none      ">
          <div className="relative w-30 h-30 md:w-40 md:h-40 py-25 md:py-30 ">
            <Image
              src="/mirach-aerospace-footer.png"
              alt="Mirach Aerospace Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Brand Name */}
          <AnimateText intialColor="#2a2b7d" finalColor="#9E9FBF">
            <h3 className="text-[35px] md:text-[60px] lg:text-[80px] xl:text-[100px] xlg:text-[116px] font-medium text-[#9E9FBF]/80  ">
              MIRACH AEROSPACE
            </h3>
          </AnimateText>
        </div>

        <div className="flex items-center justify-center gap-4 pb-10 md:pb-12">
          {/* <Link href="#" target="_blank">
            <div className="border-1 border-blue rounded-md p-2.5 hover:scale-105 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clipPath="url(#clip0_1_7760)">
                  <path
                    d="M14.6239 10.8198C14.5792 9.92279 14.2028 9.07207 13.5647 8.43398C12.9266 7.79588 12.0758 7.41941 11.1788 7.3748L10.9983 7.37051C10.0356 7.37051 9.11279 7.75322 8.43203 8.43398C7.75128 9.11473 7.36855 10.0376 7.36855 11.0003L7.37285 11.1808C7.41747 12.0777 7.79393 12.9285 8.43203 13.5666C9.11279 14.2474 10.0356 14.6301 10.9983 14.6301L11.1788 14.6258C12.0758 14.5811 12.9266 14.2047 13.5647 13.5666C14.2455 12.8858 14.6281 11.963 14.6281 11.0003L14.6239 10.8198ZM16.1621 11.257C16.0986 12.5347 15.5628 13.747 14.6539 14.6558C13.7451 15.5647 12.5328 16.1006 11.2551 16.164L10.9983 16.1705C9.62717 16.1705 8.31233 15.6255 7.34277 14.6558C6.43389 13.747 5.89804 12.5347 5.83457 11.257L5.82812 11.0003C5.82812 9.62911 6.37321 8.31428 7.34277 7.34472C8.31233 6.37516 9.62717 5.83008 10.9983 5.83008L11.2551 5.83651C12.5328 5.89999 13.7451 6.43584 14.6539 7.34472C15.6234 8.31428 16.1686 9.62911 16.1686 11.0003L16.1621 11.257Z"
                    fill="#21225D"
                  />
                  <path
                    d="M16.4846 4.43159C16.7706 4.11694 17.257 4.094 17.5716 4.38002C17.8862 4.66599 17.9101 5.15245 17.6243 5.46713L17.6124 5.47895C17.3265 5.79352 16.84 5.81737 16.5254 5.53159C16.2107 5.24553 16.1877 4.75807 16.4738 4.4434L16.4846 4.43159Z"
                    fill="#21225D"
                  />
                  <path
                    d="M20.1281 5.50029C20.1281 3.4955 18.5031 1.87051 16.4983 1.87051H5.49834C3.49355 1.87051 1.86856 3.4955 1.86856 5.50029V16.5003C1.86856 18.505 3.49355 20.1301 5.49834 20.1301H16.4983C18.5031 20.1301 20.1281 18.505 20.1281 16.5003V5.50029ZM21.6686 16.5003C21.6686 19.3556 19.3536 21.6705 16.4983 21.6705H5.49834C2.64302 21.6705 0.328125 19.3556 0.328125 16.5003V5.50029C0.328125 2.64498 2.64302 0.330078 5.49834 0.330078H16.4983C19.3536 0.330078 21.6686 2.64498 21.6686 5.50029V16.5003Z"
                    fill="#21225D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_7760">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <Link href="#" target="_blank">
            <div className="border-1 border-blue rounded-md p-2.5 hover:scale-105 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.929 2.0625H19.817L13.5077 9.63416L20.9301 19.9375H15.1184L10.5665 13.6886L5.35809 19.9375H2.4684L9.21682 11.8388L2.0965 2.0625H8.05571L12.1702 7.77425L16.929 2.0625ZM15.9155 18.1225H17.5157L7.18619 3.78216H5.46896L15.9155 18.1225Z"
                  fill="#21225D"
                />
              </svg>
            </div>
          </Link>

          <Link href="#" target="_blank">
            <div className="border-1 border-blue rounded-md p-2.5 hover:scale-105 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M1.3597 7.32581H5.8264V21.5143H1.3597V7.32581ZM3.62295 0.486328C2.09418 0.486328 1.0954 1.54574 1.0954 2.93624C1.0954 4.29815 2.06496 5.38834 3.56449 5.38834H3.59297C5.15098 5.38834 6.12122 4.2981 6.12122 2.93624C6.092 1.54574 5.15103 0.486328 3.62295 0.486328ZM16.7934 6.99251C14.4225 6.99251 13.3602 8.36909 12.7676 9.33447V7.32581H8.29962C8.35878 8.65687 8.29962 21.5143 8.29962 21.5143H12.7676V13.5904C12.7676 13.1661 12.7969 12.7433 12.9144 12.4392C13.238 11.592 13.9731 10.7147 15.2061 10.7147C16.8241 10.7147 17.4702 12.0164 17.4702 13.9229V21.5143H21.9375V13.3784C21.9375 9.02029 19.7341 6.99251 16.7934 6.99251Z"
                  fill="#21225D"
                />
              </svg>
            </div>
          </Link> */}
        </div>
        <div className="mt-10 md:mt-16 lg:mt-24 pb-10">
          <div className="w-full h-[1px] bg-white opacity-50 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-[#656565]">
            <div className="">
              <p className="text-black font-medium custom-text-16 opacity-50">Email</p>
              <a
                href="mailto:info@mirachaerospace.com"
                className="text-black font-medium custom-text-16 mt-4"
              >
                info@mirachaerospace.com
              </a>
            </div>
            <div className="">
              <p className="text-black font-medium custom-text-16 opacity-50">Address</p>
              <p className="text-black font-medium custom-text-16 mt-2">
                423, Platinum Paradise, near Malwa <br />
                Institute of Technology, Nipania Bypass <br />
                Road, Indore, MP, 452016
              </p>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row gap-1">
                <p className="text-black font-medium custom-text-16 opacity-50">GSTIN: </p>
                <span className="text-black font-medium custom-text-16 ">23AATCM8995Q1Z2</span>
              </div>
              <div className="flex flex-row gap-1 mt-2">
                <p className="text-black font-medium custom-text-16 opacity-50">CIN: </p>
                <span className="text-black font-medium custom-text-16 ">U30305MP2025PTC079134</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
