"use client";

import { useState } from "react";
import FigmaIllustration from "@/components/FigmaIllustration";

const img = (name: string, ext = "svg") => `/figma/${name}.${ext}`;
const services = [
  ["Gestão de mídia paga", "Planejamos e gerenciamos campanhas em Meta Ads e Google Ads, definindo estratégia, investimento, públicos, objetivos e oportunidades de otimização."],
  ["Meta ADS", "Campanhas no Instagram e Facebook para alcance, consideração, geração de leads, vendas e remarketing."],
  ["Google ADS", "Posicionamos marcas diante de pessoas que já demonstram intenção de busca, além de explorar outros formatos da plataforma conforme a estratégia."],
  ["TikTok ADS", "Campanhas para descoberta, consideração e conversão, aproveitando a linguagem da plataforma e criativos adaptados ao comportamento do público."],
  ["Criativos de performance", "Desenvolvemos conceitos, mensagens, formatos e peças para cada objetivo de campanha, ajustando os caminhos a partir dos dados."],
];
const businesses = [["E-commerce", "imgGroup34"], ["Restaurante", "imgGroup35"], ["Loja Física", "imgLayer1"], ["Empresa de serviços", "imgLayer2"]];
const people = [
  {name:"Adones Duarte", role:"Estratégia e mídia", photo:"imgFotoAdonesDuarte", before:"Publicitário com mais de ", emphasis:"10 anos", after:" de experiência em soluções digitais, redes sociais e tráfego pago. Responsável pela estratégia, gestão e otimização das campanhas."},
  {name:"Victória Grossi", role:"Estratégia criativa", photo:"imgFotoVictoriaGrossi-clean", before:"Publicitária especializada em ", emphasis:"Direção de Arte e Branding", after:". Responsável por transformar dados em conceitos, mensagens e criativos."},
];

function Cta({ small = false }: { small?: boolean }) {
  return <a className={`cta ${small ? "cta-small" : ""}`} href="https://form.respondi.app/418Ad20g" target="_blank" rel="noopener noreferrer"><span>Falar com a Triz</span><span className="cta-icon"><img src={img("imgSeta1")} alt="" /></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState(0);
  return <main id="home" className="landing">
    {[1,2,3,4,5].map(n => <img key={n} className={`ambient-glow glow-${n}`} src={img(`imgGlow${n}`)} alt="" aria-hidden="true" />)}
    <header className="site-header page-width">
      <nav className="nav glass" aria-label="Navegação principal">
        <a className="brand" href="#home" aria-label="Triz Agency, voltar ao início"><img src={img("imgLogoTriz")} alt="Triz" /></a>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a><a href="#servicos" onClick={() => setMenuOpen(false)}>O QUE FAZEMOS</a><a href="#especialistas" onClick={() => setMenuOpen(false)}>ESPECIALISTAS</a><a href="#contato" onClick={() => setMenuOpen(false)}>CONTATO</a>
        </div>
        <Cta small />
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </nav>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="pill"><span className="pill-dot" />Gestão de mídia paga orientada por dados</span>
          <h1 id="hero-title">Investimento em mídia <span>com estratégia e criativos</span> baseados em dados</h1>
          <p>Na Triz, mídia e criação não são frentes separadas. Planejamos, criamos, analisamos e otimizamos campanhas com foco em performance.</p>
          <div className="hero-cta"><Cta /></div>
          <div className="chips"><span>Estratégia</span><span>Criação</span><span>Performance</span></div>
        </div>
        <div className="hero-art"><img src={img("imgMockupAnuncio","png")} alt="Mockup de campanhas e criativos digitais" /></div>
        <div className="hero-mobile-cta"><Cta /></div>
      </section>
    </header>
    <section id="servicos" className="services page-width glass-panel">
      <div className="services-intro"><h2 className="display-heading">O que fazemos</h2><p className="intro-lead"><em>Performance</em> exige mais do que <em>campanhas no ar.</em></p><p className="intro-support">Na Triz, mídia e criação trabalham como uma única frente estratégica.</p></div>
      <div className="service-list">{services.map(([title, detail], i) => {
        const expanded = openService === i;
        return <button className={`service-row ${expanded ? "active" : ""}`} key={title} type="button" aria-expanded={expanded} onClick={() => setOpenService(expanded ? -1 : i)}>
          <span className="service-index">[ {String(i + 1).padStart(2, "0")} ]</span>
          <span className="service-copy">
            <span className="service-title">{title}</span>
            <span className="service-detail-wrap" aria-hidden={!expanded}><span className="service-detail">{detail}</span></span>
          </span>
          <span className="service-arrow"><img src={img("imgSeta2")} alt="" /></span>
        </button>;
      })}</div>
    </section>
    <section className="business page-width" aria-labelledby="business-title">
      <h2 id="business-title" className="display-heading">Negócios diferentes.</h2><p className="business-lead">Estratégias que fazem sentido <span>para cada objetivo.</span></p><h3 className="display-heading">Se você tem:</h3>
      <div className="business-grid">{businesses.map(([label,icon],i)=><div className="business-card glass-panel" key={label}><div className="business-card-top"><span className="business-icon"><img src={img(icon)} alt="" /></span><span className="business-index">[ {String(i+1).padStart(2,"0")} ]</span></div><h4>{label}</h4></div>)}</div>
      <p className="business-description"><strong>A mídia paga pode cumprir papéis diferentes:</strong> gerar vendas, atrair novos clientes, aumentar o fluxo para o seu negócio ou transformar interesse em oportunidades comerciais.</p>
    </section>
    <section id="especialistas" className="specialists page-width" aria-labelledby="specialists-title">
      <h2 id="specialists-title" className="display-heading">Especialistas Triz</h2><div className="people-grid">{people.map(p=><article className="person-card glass-panel" key={p.name}><img className="person-photo" src={img(p.photo,"png")} alt={p.name}/><div className="person-copy"><h3>{p.name}</h3><span className="role-chip">{p.role}</span><p>{p.before}<em>{p.emphasis}</em>{p.after}</p></div></article>)}</div>
    </section>
    <section id="contato" className="contact page-width glass-panel" aria-labelledby="contact-title">
      <div className="contact-copy"><span className="pill"><span className="pill-dot" />Contato</span><h2 id="contact-title">Vamos falar sobre o <em>próximo passo da sua mídia?</em></h2><p>Conte um pouco sobre o seu negócio, seus objetivos e o momento atual da operação.</p><p>A partir disso, entendemos onde a Triz pode entrar e como estruturar uma estratégia de mídia mais inteligente para a sua marca.</p><Cta /></div>
      <div className="contact-visual"><div className="contact-glow" /><div className="illustration-frame"><FigmaIllustration /></div></div>
    </section>
    <footer className="footer page-width"><div className="footer-main"><a href="#home" aria-label="Voltar ao início"><img src={img("imgLogoTrizAgency")} alt="Triz Agency" /></a><p className="display-heading">Estratégia, criação e performance.</p><div><a href="https://www.instagram.com/ag.triz/" target="_blank" rel="noopener noreferrer">@ag.triz</a><a href="mailto:contato@trizagency.com.br">contato@trizagency.com.br</a></div></div><small>© 2026 Triz Agency</small></footer>
  </main>;
}
