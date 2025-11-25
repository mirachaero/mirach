import Image from 'next/image'


type profileProps = {
    image: string;
    name: string;
    designation: string;
    linkedinUrl: string;
}

const profileData: profileProps[] = [
    {
        image: "/assets/home/why-choose/gurav-singh.png",
        name: "Gaurav Singh",
        designation: "Founder and CEO",
        linkedinUrl: "#"
    },
    {
        image: "/assets/home/why-choose/kamlesh-suryawanshi.jpg",
        name: "Kamlesh Suryawanshi",
        designation: "Founder and COO",
        linkedinUrl: "#"
    },
]



export default function WhyChooseMirach() {
    return (
        <section className="  overflow-hidden">
            <div className="w-container  relative ">


                <div className="absolute  inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(238,238,238,1)_90%)]   scale-125 z-0"> </div>

                <div className="relative z-10 flex flex-col xl:flex-row gap-6 ">

                    <div className="w-full   xl:w-1/2  blade-top-padding-lg  ">
                        <h3 className="text-blue font-medium custom-text-48">
                            Why choose <b className="text-skyBlue font-normal">Mirach</b>
                        </h3>

                        <div className="w-full lg:max-w-3xl xl:max-w-xl custom-text-24 text-darkGray">
                            <p className="py-4 lg:py-6">
                                With a combined experience of over two decades in
                                <span className="text-black"> designing, manufacturing, and deploying UAS in Defence, government, and civil operations,</span>
                                Mirach Aerospace empowers clients with scale and reliability.
                            </p>
                            <p>
                                It’s a mix of seasoned professionals and young drone enthusiasts, collaborating to deliver reliable, cutting-edge performance across all applications.
                            </p>
                        </div>
                    </div>

                    <div className="w-full  xl:w-1/2  xl:border-l-2 border-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 xl:gap-12 xl:mx-6 blade-bottom-margin-sm xlg:mx-10 mt-6 xl:mt-28">
                            {profileData.map((ele, index) => {
                                return (
                                    <div key={index} >
                                        <Card data={ele} />
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}


const Card = ({ data }: { data: profileProps }) => {
    return (
        <div className="">
            <div className="p-4  border border-skyBlue">
                <div className="h-80 lg:h-96 xl:h-64 xlg:h-72 2xl:h-80  relative ">
                    <Image src={data.image} fill alt={data.name} className="object-cover object-top " />
                </div>
            </div>
            <div className="flex justify-between items-center mt-2  lg:mt-4  mx-2">
                <div>
                    <h6 className="custom-text-20 font-medium text-[#3A3A3A]">{data.name}</h6>
                    <p className="text-[#484848CC]/80 text-lg">{data.designation}</p>
                </div>
                <div className="border border-blue rounded-sm ">
                    <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                        <g clip-path="url(#clip0_1_7840)">
                            <path d="M1.43523 7.32581H6.15009V21.5143H1.43523V7.32581ZM3.82422 0.486328C2.21052 0.486328 1.15625 1.54574 1.15625 2.93624C1.15625 4.29815 2.17967 5.38834 3.76251 5.38834H3.79258C5.43714 5.38834 6.46129 4.2981 6.46129 2.93624C6.43044 1.54574 5.43719 0.486328 3.82422 0.486328ZM17.7264 6.99251C15.2237 6.99251 14.1025 8.36909 13.4769 9.33447V7.32581H8.7607C8.82315 8.65687 8.7607 21.5143 8.7607 21.5143H13.4769V13.5904C13.4769 13.1661 13.5079 12.7433 13.6319 12.4392C13.9734 11.592 14.7494 10.7147 16.0509 10.7147C17.7587 10.7147 18.4407 12.0164 18.4407 13.9229V21.5143H23.1562V13.3784C23.1562 9.02029 20.8304 6.99251 17.7264 6.99251Z" fill="#21225D" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_7840">
                                <rect width="23.2222" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>


        </div>
    )
}


