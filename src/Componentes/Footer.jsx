import Link from "next/link";

const footerLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Casos clinicos", href: "/#casos-clinicos" },
  { label: "Agenda", href: "/reserva-hora" },
  { label: "Contacto", href: "/#contacto" },
];

export default function FooterPremiumMedico() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="text-xs tracking-[0.2em] text-white/70">
          Ortega & Schmuck - ® Todos los derechos reservados.
        </p>

        <nav aria-label="Links del pie de pagina">
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs uppercase tracking-[0.16em] text-white/70 transition duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <p className="text-xs text-white/50">© 
        {new Date().getFullYear()} Desarrollado por {" "} 
        
        <a  
        href="https://www.nativecode.cl/" 
        target="_blank" 
        rel="noreferrer"
        className="text-white/70 transition hover:text-white"
        >NativeCode.cl
        </a>
        </p>

      </div>
    </footer>
  );
}
