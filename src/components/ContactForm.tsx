"use client";

import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { sendGAEvent } from "@next/third-parties/google";

export default function ContactForm() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [revenue, setRevenue] = useState("");
  const [revenueOpen, setRevenueOpen] = useState(false);
  const [activeRevenueOption, setActiveRevenueOption] = useState(0);
  const revenueOptions = ["Até 20 mil", "Entre 20 e 50 mil", "Mais de 50 mil"];
  const revenueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!revenueRef.current?.contains(event.target as Node)) setRevenueOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!revenue) {
      setRevenueOpen(true);
      return;
    }

    setLoading(true);

    if (!captchaToken) {
      setLoading(false);
      alert("Por favor, complete o captcha.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "2e23544b-0001-471a-8f4a-12fa0f754781");
    formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!result.success) throw new Error("Form submission failed");

      setSuccess(true);
      window.fbq?.("track", "Lead");
      sendGAEvent("event", "generate_lead", {
        currency: "BRL",
        value: 0,
        lead_source: "Triz website contact form",
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="contact-form-section page-width glass-panel" aria-labelledby="contact-form-title">
      <div className="contact-form-copy">
        <span className="pill"><span className="pill-dot" />Contato</span>
        <h2 id="contact-form-title" className="display-heading">Vamos conversar?</h2>
        <p>Se você chegou até aqui, está prestes a dar o clique inicial. Conte um pouco sobre o seu negócio e em breve entraremos em contato.</p>
      </div>

      <div className="contact-form-area">
        {error && <p className="contact-form-message" role="alert">Ocorreu um erro ao enviar seus dados. Por favor, tente novamente mais tarde.</p>}
        {success && <p className="contact-form-message" role="status">Obrigado! Seus dados foram enviados com sucesso. Em breve entraremos em contato.</p>}
        {!error && !success && (
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="subject" value="Novo lead recebido" />
            <input type="hidden" name="from_name" value="trizagency.com.br" />
            <input required type="text" name="nome" placeholder="Muito prazer, qual é o seu nome?" aria-label="Nome completo" minLength={2} maxLength={50} />
            <input required type="email" name="email" placeholder="Qual é o seu melhor email?" aria-label="Melhor email" maxLength={100} />
            <input type="text" name="rede social" placeholder="@ nas redes sociais (Instagram/TikTok)" aria-label="@ nas redes sociais (Instagram ou TikTok)" maxLength={100} />
            <input required type="text" name="segmento" placeholder="Qual é o seu segmento de atuação?" aria-label="Segmento de atuação" maxLength={100} />
            <input type="hidden" name="faturamento mensal" value={revenue} />
            <div className={`revenue-dropdown ${revenueOpen ? "is-open" : ""}`} ref={revenueRef}>
              <button
                className={`revenue-trigger ${revenue ? "has-value" : ""}`}
                type="button"
                role="combobox"
                aria-label="Faturamento médio mensal"
                aria-haspopup="listbox"
                aria-expanded={revenueOpen}
                aria-controls="revenue-options"
                aria-activedescendant={revenueOpen ? `revenue-option-${activeRevenueOption}` : undefined}
                onClick={() => {
                  setActiveRevenueOption(Math.max(0, revenueOptions.indexOf(revenue)));
                  setRevenueOpen(!revenueOpen);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                    event.preventDefault();
                    if (!revenueOpen) {
                      setRevenueOpen(true);
                      setActiveRevenueOption(event.key === "ArrowDown" ? 0 : revenueOptions.length - 1);
                    } else {
                      setActiveRevenueOption((current) => (current + (event.key === "ArrowDown" ? 1 : -1) + revenueOptions.length) % revenueOptions.length);
                    }
                  } else if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    if (revenueOpen) {
                      setRevenue(revenueOptions[activeRevenueOption]);
                      setRevenueOpen(false);
                    } else {
                      setRevenueOpen(true);
                      setActiveRevenueOption(Math.max(0, revenueOptions.indexOf(revenue)));
                    }
                  } else if (event.key === "Escape") {
                    setRevenueOpen(false);
                  }
                }}
              >
                <span>{revenue || "Faturamento médio mensal"}</span>
                <span className="revenue-chevron" aria-hidden="true" />
              </button>
              {revenueOpen && (
                <div className="revenue-options" id="revenue-options" role="listbox" aria-label="Faturamento médio mensal">
                  {revenueOptions.map((option, index) => (
                    <button
                      className={`revenue-option ${activeRevenueOption === index ? "is-active" : ""}`}
                      id={`revenue-option-${index}`}
                      key={option}
                      type="button"
                      role="option"
                      aria-selected={revenue === option}
                      onMouseEnter={() => setActiveRevenueOption(index)}
                      onClick={() => {
                        setRevenue(option);
                        setRevenueOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button disabled={loading} type="submit" className="contact-form-submit">
              {loading ? "Enviando..." : "Enviar"}
            </button>
            <div className="contact-form-captcha">
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={setCaptchaToken}
                onExpire={() => setCaptchaToken(null)}
                loadAsync
              />
            </div>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          </form>
        )}
      </div>
    </section>
  );
}
