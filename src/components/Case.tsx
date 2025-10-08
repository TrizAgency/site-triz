import Image from "next/image";
import Header from "./Header";

export default function Case({ title, description}: { title: string, description: string,}) {
    return (
        <div className="bg-beige relative">
            <section className="relative flex flex-col lg:flex-row lg:items-center justify-evenly text-center lg:h-[70svh] lg:pt-52 pt-20 h-[90svh] px-8" id="banner">
                <Image src="/images/z-cases.svg" alt="Background decorativo" fill className="object-cover top-0 left-0 right-0 lg:overflow-visible z-0" quality={100} />

                <h1 className="sr-only">{title}</h1>

                <Header />

                <div className="z-10">
                    <h2 className="lg:text-3xl text-xl text-left">
                        {title}
                    </h2>
                </div>
            
                <div className="text-left lg:text-xl text-base lg:max-w-[500px] z-10">
                    <p dangerouslySetInnerHTML={{ __html: description }} className="text-justify" />
                </div>
            </section>
        </div>
    )
}