'use client';
import React from "react";
import Link from "next/link";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { Truck, CreditCard, Sparkles, Eye, Smile, Star, Bath, SprayCan, Gem } from "lucide-react";

const GeneralPage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
          <CategoryLink href="/marketplace/ojos" Icon={Eye} text=" Ojos" />
          <CategoryLink href="/marketplace/labios" Icon={Smile} text=" Labios" />
          <CategoryLink href="/marketplace/rostro" Icon={Star} text=" Rostro" />
          <CategoryLink href="/marketplace/cuidado-facial" Icon={SprayCan} text=" Cuidado Facial" />
          <CategoryLink href="/marketplace/corporal" Icon={Bath} text=" Cuidado Corporal" />
          <CategoryLink href="/marketplace/accesorios" Icon={Gem} text=" Accesorios" />
        </div>
      </nav>

      <section className="relative mt-6 px-4 container mx-auto">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dajaq7tej/image/upload/v1743970574/maquillaje_nqghbf.png"
            alt="Promoción de maquillaje"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
            <div className="text-white p-8 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Compra y Paga a Cuotas</h2>
              <p className="text-lg mb-5">Con Addi o tu método de pago favorito</p>
              <Link 
                href="/marketplace" 
                className="bg-white text-pink-600 hover:bg-gray-100 font-medium py-2.5 px-6 rounded-full inline-block transition"
              >
                ¡Compra Aquí!
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitCard 
            Icon={Truck} 
            title=" Envío Rápido" 
            text="Recibe tus productos en 24-48 horas"
          />
          <BenefitCard 
            Icon={CreditCard} 
            title=" Pago Seguro" 
            text="Múltiples métodos de pago"
          />
          <BenefitCard 
            Icon={Sparkles} 
            title=" Productos Premium" 
            text="Calidad profesional"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CategoryLink = ({ href, Icon, text }: { href: string; Icon: React.ElementType; text: string }) => (
  <Link href={href} className="group">
    <div className="flex flex-col items-center px-4 py-2 transition-colors">
      <Icon className="w-6 h-6 mb-1 text-gray-700 group-hover:text-pink-600 transition-colors" />
      <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors">{text}</span>
    </div>
  </Link>
);

const BenefitCard = ({ Icon, title, text }: { Icon: React.ElementType; title: string; text: string }) => (
  <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100 hover:border-pink-200 transition-colors">
    <Icon className="w-10 h-10 text-pink-600 mx-auto mb-3" />
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default GeneralPage;