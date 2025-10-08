import Case from "@/components/Case";
import Footer from "@/components/Footer";
import { casePraio } from "@/lib/cases";
import Image from "next/image";

export default function CasePraio() {
    return (
        <main className="bg-beige">
            <Case
                title={casePraio.title}
                description={casePraio.description}
            />

            <section className="container lg:py-20 py-10 hidden lg:block">
                <div className="w-full flex flex-col lg:flex-row lg:rounded-[90px] overflow-hidden h-64">
                    <div className="lg:w-1/2 p-20 relative bg-[#FFE3A9]">
                        <Image src="/images/portfolio/praio/praio-1.svg" alt="Logo" fill className="object-none" quality={100} />
                    </div>
                    <div className="lg:w-1/2 p-20 relative bg-[#D4451B]">
                        <Image src="/images/portfolio/praio/praio-2.svg" alt="Logo" fill className="object-none" quality={100} />
                    </div>
                </div>

                <div className="w-full h-[670px] lg:rounded-[90px] overflow-hidden relative mt-8">
                    <Image src="/images/portfolio/praio/praio-3.png" alt="Papelaria" fill className="object-cover" quality={100} />
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-2 lg:rounded-[90px] overflow-hidden h-[414px] mt-2">
                    <div className="lg:w-1/2 p-20 relative bg-[#22352F]">
                        <Image src="/images/portfolio/praio/praio-4.png" alt="Papelaria" fill className="object-cover" quality={100} />
                    </div>
                    <div className="lg:w-1/2 p-20 relative bg-[#E4DCD1]">
                        <Image src="/images/portfolio/praio/praio-5.png" alt="Papelaria" fill className="object-cover" quality={100} />
                    </div>
                </div>

                <div className="w-full h-[590px] lg:rounded-[90px] overflow-hidden relative mt-2">
                    <Image src="/images/portfolio/praio/praio-6.png" alt="Papelaria" fill className="object-cover" quality={100} />
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-2 lg:rounded-[90px] overflow-hidden h-[414px] mt-2">
                    <div className="lg:w-1/2 p-20 relative bg-[#22352F]">
                        <Image src="/images/portfolio/praio/praio-7.png" alt="Papelaria" fill className="object-cover" quality={100} />
                    </div>
                    <div className="lg:w-1/2 p-20 relative bg-[#E4DCD1]">
                        <Image src="/images/portfolio/praio/praio-8.png" alt="Papelaria" fill className="object-cover" quality={100} />
                    </div>
                </div>
            </section>

            <section className="container lg:py-20 py-10 block lg:hidden">
                            <div className="w-full flex flex-col lg:flex-row lg:rounded-[90px] gap-2 overflow-hidden h-auto">
                                <div className="lg:w-1/2 p-10 relative bg-[#FFE3A9] h-auto rounded-4xl">
                                    <Image src="/images/portfolio/praio/praio-1.svg" alt="Logo" width={1000} height={1000} className="object-contain" quality={100} />
                                </div>
                                <div className="lg:w-1/2 p-10 relative bg-[#D4451B] h-auto rounded-4xl">
                                    <Image src="/images/portfolio/praio/praio-2.svg" alt="Logo" width={1000} height={1000} className="object-contain" quality={100} />
                                </div>
                            </div>
            
                            <div className="w-full h-full lg:rounded-[90px] overflow-hidden relative mt-2 rounded-4xl">
                                <Image src="/images/portfolio/praio/praio-3.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                            </div>
            
                            <div className="w-full flex flex-col lg:flex-row gap-2 lg:rounded-[90px] overflow-hidden h-auto mt-2 rounded-4xl">
                                <div className="lg:w-1/2 relative">
                                    <Image src="/images/portfolio/praio/praio-4.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                                </div>
                                <div className="lg:w-1/2 relative">
                                    <Image src="/images/portfolio/praio/praio-5.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                                </div>
                            </div>
            
                            <div className="w-full h-auto lg:rounded-[90px] overflow-hidden relative mt-2 rounded-4xl">
                                <Image src="/images/portfolio/praio/praio-6.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                            </div>

                            <div className="w-full flex flex-col lg:flex-row gap-2 lg:rounded-[90px] overflow-hidden h-auto mt-2 rounded-4xl">
                                <div className="lg:w-1/2 relative">
                                    <Image src="/images/portfolio/praio/praio-7.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                                </div>
                                <div className="lg:w-1/2 relative">
                                    <Image src="/images/portfolio/praio/praio-8.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                                </div>
                            </div>
                        </section>

            <Footer />
        </main>
    )
    
}