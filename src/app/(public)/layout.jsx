import Navbar from "@/Componentes/Navbar";
import FooterPremiumMedico from "@/Componentes/Footer";
import ToasterClient from "@/Componentes/ToasterClient";
import WhatsAppFloatButton from "@/Componentes/WhatsAppFloatButton";

export default function PublicLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <ToasterClient />
      <Navbar />
      <main className="relative pt-24 md:pt-28">{children}</main>
      <FooterPremiumMedico />
      <WhatsAppFloatButton />
    </div>
  );
}
