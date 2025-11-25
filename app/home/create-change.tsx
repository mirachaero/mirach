import { Button } from "@/src/components/atoms/button";

export default function CreateChange() {
    return (
        <section className="bg-[#EEEEEE] blade-bottom-padding-lg">
            <div className="w-container lg:mx-auto mx-4 relative bg-black h-auto xl:h-[27rem] 2xl:h-[32rem] overflow-hidden ">


                <div className="absolute inset-0 backdrop-blur-[60px] z-10"></div>


                <div className="absolute left-0 bottom-0 w-[600px] h-[150px] md:h-[350px] xl:h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(37,130,254,0.9),transparent_70%)] opacity-70 z-0"></div>

                <div className="absolute top-0 right-0 w-[600px] h-[150px] md:h-[350px] xl:h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,130,254,0.9),transparent_80%)] opacity-90 z-0"></div>


                <div className="relative z-20 h-full flex lg:flex-row gap-18 xl:justify-between p-2  xl:px-8 xlg:px-12 2xl:px-24 py-20">


                    <div>
                        <h2 className="text-white font-medium custom-text-48 mb-6">
                            Let’s <span className="text-skyBlue">create change</span> that <br />
                            takes India higher
                        </h2>


                        <Button
                            text="Join us"
                            theme="blue"
                            size="base"
                            role="link"
                            className="px-4 md:px-14 lg:py-3.5 font-medium"
                        />
                    </div>


                    <div className="custom-text-24 max-w-md xl:max-w-xl space-y-2 xl:space-y-4">
                        <p className="text-white font-medium">
                            Change doesn’t wait for the right moment. It
                            begins with commitment.
                        </p>

                        <p className=" text-white/90 ">
                            At Mirach Aerospace, every contribution counts.
                            Whether you are a professional, student, partner,
                            volunteer, there is a place for you here.
                        </p>

                        <p className=" text-white/90 ">
                            Join our mission to advance India’s aerospace
                            innovation in any capacity. As an equal-opportunity
                            organization that values initiative, collaboration,
                            and shared purpose, we will be happy to have you.
                        </p>
                    </div>

                </div>


            </div>
        </section>
    );
}
