import { Button } from '@/src/components/atoms/button'
import Image from 'next/image'

export default function VtolLogistics() {
    return (
        <section className="bg-[#EEEEEE]">
            <div className="blade-top-padding-lg  w-container ">
                
                <div className=" w-full md:h-[22rem] xl:h-[27rem] 2xl:h-[32rem]  relative">
                    <Image src="/assets/home/logistic/backgroundImage.png" alt="VTOL-logistics and UAM-Eagleray" fill />

                    <div className="absolute left-14 lg:left-20 top-1/2 -translate-y-1/2 space-y-3">
                        <h2  className="bg-lightGray/50 text-white w-fit px-3 font-medium py-1 custom-text-16">COMING SOON</h2>
                        <h4 className="custom-text-48 text-white font-medium py-4 2xl:py-0">VTOL logistics and <br /> UAM – Eagleray</h4>
                        <Button
                            text="Notify me"
                            theme="blue"
                            size="base"
                            role="link"
                             className="px-4 lg:px-10 lg:py-3.5 font-medium"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}