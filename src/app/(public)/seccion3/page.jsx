"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Instagram, MapPin, MessageCircle } from "lucide-react";
import RevealOnScroll from "@/Componentes/RevealOnScroll";

const clinicalCases = [
  {
    title: "Armonizacion de sonrisa",
    description: "Mejora de proporciones dentales y faciales con un protocolo conservador.",
    image: "/cportada1.png",
  },
  {
    title: "Definicion mandibular",
    description: "Plan de armonizacion facial para lograr un perfil elegante y natural.",
    image: "/cportada2.png",
  },
  {
    title: "Rejuvenecimiento no invasivo",
    description: "Tratamiento progresivo para firmeza y luminosidad sin perder identidad.",
    image: "/cportada3.png",
  },
  {
    title: "Contorno facial integral",
    description: "Enfoque combinado para equilibrar volumen, textura y estructura.",
    image: "/prueba3.jpeg",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dr.renzotais",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/56994836980",
    icon: MessageCircle,
  },
  {
    label: "Ubicacion",
    href: "https://maps.google.com/?q=Providencia,+Santiago,+Chile",
    icon: MapPin,
  },
];

export default function Seccion3() {
  const scrollerRef = useRef(null);

  const scrollByAmount = (direction) => {
    const container = scrollerRef.current;
    if (!container) return;

    const amount = Math.round(container.clientWidth * 0.82);
    const nextLeft = direction === "left" ? -amount : amount;

    container.scrollBy({ left: nextLeft, behavior: "smooth" });
  };

  return (
    <>
      <section
        id="casos-clinicos"
        className="scroll-mt-24 bg-black py-20 text-white sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/65">Casos clinicos</p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-light leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
                  Resultados reales, planificados con criterio medico y estetico.
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollByAmount("left")}
                  aria-label="Desplazar casos hacia la izquierda"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 hover:bg-white/20"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByAmount("right")}
                  aria-label="Desplazar casos hacia la derecha"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 hover:bg-white/20"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <div
            ref={scrollerRef}
            className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {clinicalCases.map((item, index) => (
              <RevealOnScroll
                key={item.title}
                className="min-w-[82%] shrink-0 snap-start sm:min-w-[48%] lg:min-w-[31%]"
                delayClass={index === 0 ? "delay-100" : "delay-150"}
              >
                <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 31vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.74)_100%)]" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-light tracking-[0.02em] text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 tracking-[0.02em] text-white/72">
                      {item.description}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="scroll-mt-24 bg-[#050505] py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          <RevealOnScroll>
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,#111_0%,#050505_55%,#1a1a1a_100%)] px-6 py-14 text-center sm:px-10">
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">Agenda premium</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-light leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
                Reserva tu evaluacion y recibe un plan personalizado.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 tracking-[0.02em] text-white/74 sm:text-base">
                Coordinamos tu hora con el equipo clinico para definir objetivos, tiempos y
                ruta de tratamiento.
              </p>
              <Link
                href="/reserva-hora"
                aria-label="Reservar hora"
                className="mt-8 inline-flex w-full max-w-xs justify-center rounded-full border border-white/20 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition duration-300 ease-out hover:bg-white/90"
              >
                Reservar hora
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 bg-black py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <RevealOnScroll>
              <article className="h-full rounded-[2rem] border border-white/10 bg-[#0f0f10] p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-white/62">Contacto</p>
                <h2 className="mt-4 text-balance text-3xl font-light leading-tight tracking-[0.02em] sm:text-4xl">
                  Ubicacion y canales directos para ayudarte rapido.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-8 tracking-[0.02em] text-white/74 sm:text-base">
                  Estamos en Providencia, Santiago de Chile. Escribenos por WhatsApp o
                  Instagram y te ayudamos a coordinar tu hora.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-white transition duration-300 ease-out hover:scale-105 hover:bg-white/18"
                      >
                        <Icon className="h-7 w-7" />
                      </a>
                    );
                  })}
                </div>
              </article>
            </RevealOnScroll>

            <RevealOnScroll delayClass="delay-150">
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f10] p-2">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                  <iframe
                    title="Mapa de ubicacion Ortega & Schmuck"
                    src="https://www.google.com/maps?q=Providencia%2C%20Santiago%2C%20Chile&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[380px] w-full md:h-[460px]"
                  />
                </div>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
