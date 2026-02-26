"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Casos clinicos", href: "/#casos-clinicos" },
  { label: "Agenda", href: "/reserva-hora" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[linear-gradient(180deg,rgba(116,120,127,0.42)_0%,rgba(41,43,47,0.58)_45%,rgba(4,4,5,0.76)_100%)] backdrop-blur-2xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:h-24 md:px-8 lg:px-10">
        <Link href="/#inicio" aria-label="Ir al inicio" className="group flex items-center gap-3">
          <div className="relative h-14 w-14 sm:h-20 sm:w-20">
            <Image
              src="/logodifort.png"
              alt="Ortega & Schmuck"
              fill
              priority
              sizes="80px"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-ml font-medium uppercase tracking-[0.28em] text-white sm:text-m">
              Ortega & Schmuck
            </p>
            <p className="truncate text-[8px] uppercase tracking-[0.2em] text-white/65 sm:text-[9px]">
              Odontología y Medicina Estética.
            </p>
          </div>
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/reserva-hora"
            aria-label="Agendar hora"
            className="hidden rounded-full border border-white/25 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-black transition duration-300 ease-out hover:bg-white/90 sm:inline-flex"
          >
            Agendar hora
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={[
          "overflow-hidden border-t border-white/10 bg-black/85 lg:hidden",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          "transition-all duration-300 ease-out",
        ].join(" ")}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 md:px-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl border border-transparent px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/85 transition duration-300 hover:border-white/15 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/reserva-hora"
            onClick={() => setIsOpen(false)}
            aria-label="Agendar hora desde menu movil"
            className="mt-1 rounded-xl border border-white/25 bg-white px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black"
          >
            Agendar hora
          </Link>
        </div>
      </div>
    </header>
  );
}
