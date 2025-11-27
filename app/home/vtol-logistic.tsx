import { Button } from '@/src/components/atoms/button'
import Image from 'next/image'

export default function VtolLogistics() {
    return (
        <section className="bg-[#EEEEEE]">
            <div className="blade-top-padding-lg  w-container ">
                
                <div className="  w-full h-[32rem] md:h-[22rem] xl:h-[27rem] 2xl:h-[32rem]  relative " > 
                    <div className='absolute inset-0 z-0  '>
                    <Image src="/assets/home/logistic/backgroundImage.png" alt="VTOL-logistics and UAM-Eagleray" quality={95} fill className='object-cover md:block hidden' />
                    <Image src="/assets/home/logistic/backgroundImageMobile.png" alt="VTOL-logistics and UAM-Eagleray" quality={90} fill className=' object-top object-cover md:hidden' />
                    </div>
                    <div className="relative  md:absolute p-6 md:left-14 lg:left-20 md:top-1/2 md:-translate-y-1/2 space-y-2 md:space-y-3 lg:space-y-6">
                        <h2  className="bg-lightGray/50 text-white w-fit px-3 font-medium py-1 custom-text-16">COMING SOON</h2>
                        <h4 className="custom-text-48 text-white font-medium py-4 2xl:py-0">VTOL logistics and <br /> UAM – Eagleray</h4>
                        <Button
                            text="Notify me"
                            theme="blue"
                            size="base"
                            role="link"
                             className="px-6 lg:px-10 lg:py-3.5 font-medium"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
