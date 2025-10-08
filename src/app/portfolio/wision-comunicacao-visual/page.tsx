import Case from "@/components/Case";
import Footer from "@/components/Footer";
import { caseWision } from "@/lib/cases";
import Image from "next/image";
import Link from "next/link";

export default function CaseWision() {
    return (
        <main className="bg-beige">
            <Case
                title={caseWision.title}
                description={caseWision.description}
            />

            <section className="container lg:py-20 py-10 hidden lg:block">
                <div className="w-full flex flex-col lg:flex-row lg:rounded-[90px] overflow-hidden h-64">
                    <div className="lg:w-1/2 p-20 relative bg-[#F5EFE7]">
                        <Image src="/images/portfolio/wision/wision-1.svg" alt="Logo" fill className="object-none" quality={100} />
                    </div>
                    <div className="lg:w-1/2 p-20 relative bg-[#213555]">
                        <Image src="/images/portfolio/wision/wision-2.svg" alt="Logo" fill className="object-none" quality={100} />
                    </div>
                </div>

                <div className="w-full h-[670px] lg:rounded-[90px] overflow-hidden relative mt-8">
                    <Image src="/images/portfolio/wision/wision-3.png" alt="Papelaria" fill className="object-cover" quality={100} />
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-2 lg:rounded-[90px] overflow-hidden h-[414px] mt-2">
                    <div className="lg:w-1/2 p-20 relative bg-[#22352F]">
                        <Image src="/images/portfolio/wision/wision-4.png" alt="Papelaria" fill className="object-cover" quality={100} />
                    </div>
                    <div className="lg:w-1/2 p-20 relative bg-[#E4DCD1]">
                        <Image src="/images/portfolio/wision/wision-5.png" alt="Papelaria" fill className="object-cover" quality={100} />
                    </div>
                </div>

                <div className="w-full h-[590px] lg:rounded-[90px] overflow-hidden relative mt-2">
                    <Image src="/images/portfolio/wision/wision-6.png" alt="Papelaria" fill className="object-cover" quality={100} />
                </div>
            </section>

            <section className="container lg:py-20 py-10 block lg:hidden">
                <div className="w-full flex flex-col lg:flex-row lg:rounded-[90px] gap-2 overflow-hidden h-auto">
                    <div className="lg:w-1/2 p-10 relative bg-[#F5EFE7] h-auto rounded-4xl">
                        <Image src="/images/portfolio/wision/wision-1.svg" alt="Logo" width={1000} height={1000} className="object-contain" quality={100} />
                    </div>
                    <div className="lg:w-1/2 p-10 relative bg-[#213555] h-auto rounded-4xl">
                        <Image src="/images/portfolio/wision/wision-2.svg" alt="Logo" width={1000} height={1000} className="object-contain" quality={100} />
                    </div>
                </div>

                <div className="w-full h-full lg:rounded-[90px] overflow-hidden relative mt-2 rounded-4xl">
                    <Image src="/images/portfolio/wision/wision-3.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-2 lg:rounded-[90px] overflow-hidden h-auto mt-2 rounded-4xl">
                    <div className="lg:w-1/2 relative">
                        <Image src="/images/portfolio/wision/wision-4.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                    </div>
                    <div className="lg:w-1/2 relative">
                        <Image src="/images/portfolio/wision/wision-5.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                    </div>
                </div>

                <div className="w-full h-auto lg:rounded-[90px] overflow-hidden relative mt-2 rounded-4xl">
                    <Image src="/images/portfolio/wision/wision-6.png" alt="Papelaria" width={1000} height={1000} className="object-cover" quality={100} />
                </div>
            </section>

            <section className="lg:py-20 py-10 bg-black lg:rounded-t-[90px] rounded-t-4xl border-b border-gray">
                <div className="container flex flex-col-reverse lg:flex-row gap-10">
                    <div className="lg:flex flex-col lg:flex-row items-center gap-4 shrink-0 hidden">
                        <Image src="/images/portfolio/wision/wision-7.png" alt="Post" width={230} height={290} className="object-cover" quality={100} />
                        <Image src="/images/portfolio/wision/wision-8.png" alt="Post" width={230} height={290} className="object-cover" quality={100} />
                        <Image src="/images/portfolio/wision/wision-9.png" alt="Post" width={230} height={290} className="object-cover" quality={100} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="lg:text-2xl text-lg text-white">Conheça  o nosso trabalho de gestão e produção no perfil do instagram da Wision Comunicação Visual</p>
                        <Link href={"https://www.instagram.com/wisioncomunicacaovisual/"} target="_blank" title="Instagram" className="text-black bg-green px-8 py-3 rounded-full lg:text-2xl font-bold hover:bg-beige transition-all duration-300 ease-in-out w-fit">
                            Clique aqui
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
    
}