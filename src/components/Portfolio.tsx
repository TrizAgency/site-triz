import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const mosaic = [
    {
      title: "Rimini Beach Tennis",
      description: "Gestão e Produção",
      image: "/images/portfolio/rimini.jpeg",
      href: "https://www.instagram.com/reel/DOZHhKnkZ2z/?igsh=MW4zODcxZXpmaGszMw=="
    },
    {
      title: "Zaqueu Magalhães",
      description: "Gestão e Produção",
      image: "/images/portfolio/zaqueu.jpeg",
      href: "https://www.instagram.com/zmagalhaesimoveis/"
    },
    {
      title: "Wision Comunicação Visual",
      description: "Identidade Visual e Gestão e Produção",
      image: "/images/portfolio/wision/wision-3.png",
      href: "/portfolio/wision-comunicacao-visual"
    },
    {
      title: "MKM Embalagens",
      description: "Gestão e Produção",
      image: "/images/portfolio/mkm.jpeg",
      href: "https://www.instagram.com/reel/DPcE2YCjA3t/?igsh=eHQ0NHdqajNnZDRq"
    },
    {
      title: "Mariana Rossi",
      description: "Gestão e Produção",
      image: "/images/portfolio/mari.jpeg",
      href: "https://www.instagram.com/marianarossiconsultoria/"
    },
    {
      title: "Uropec do Brasil",
      description: "Identidade Visual e Site",
      image: "/images/portfolio/uropec/uro-3.png",
      href: "/portfolio/uropec-do-brasil"
    },
    {
      title: "Praiô Burguer",
      description: "Identidade Visual",
      image: "/images/portfolio/praio/praio-7.png",
      href: "/portfolio/praio-burguer"
    },
    {
      title: "Teixeira Duarte Advogados",
      description: "Identidade Visual",
      image: "/images/portfolio/teixeira-duarte/td-5.png",
      href: "/portfolio/teixeira-duarte-advogados"
    },
    
  ]
  return (
    <section className="relative bg-black" id="portfolio">
      <div className="bg-gradient-to-r from-black to-black rounded-t-[50px]">
        <div className="container">
          <div className="flex items-center gap-4 pt-20 pb-16">
            {/* <Image src="/images/gradiente-preto.png" alt="Detalhe" width={100} height={48} quality={100} /> */}
            <h2 className="text-3xl lg:text-5xl text-beige font-semibold">Portfólio</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[2900px] lg:h-[1500px] 2xl:h-[2100px]">
        {mosaic.map((item, index) => (
          <Link key={item.title + index} href={item.href} title={item.title} className="relative group w-full h-full">
            <div className="absolute inset-0 z-5 w-full h-full bg-black/60 group-hover:bg-transparent transition-all duration-500" />
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl bg-transparent group-hover:bg-gray group-hover:translate-y-full transition-all duration-500">
              <p className="text-white text-center font-semibold lg:text-xl text-lg">{item.title}</p>
              <p className="text-white text-center font-semibold lg:text-lg text-base">{item.description}</p>
            </div>
            <Image src={item.image} alt={item.title} fill quality={100} className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}