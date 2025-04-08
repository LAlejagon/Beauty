'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { Truck, CreditCard, Sparkles, Eye, Smile, Star, Bath, SprayCan, Gem } from "lucide-react";

const GeneralPage: React.FC = () => {
  const pathname = usePathname();

  // Determina qué categoría está activa basada en la ruta actual
  const getActiveCategory = () => {
    if (pathname.includes('ojos')) return 'ojos';
    if (pathname.includes('labios')) return 'labios';
    if (pathname.includes('rostro')) return 'rostro';
    if (pathname.includes('cuidado-facial')) return 'cuidado-facial';
    if (pathname.includes('corporal')) return 'corporal';
    if (pathname.includes('accesorios')) return 'accesorios';
    return null; // Ninguna activa en la página general
  };

  const activeCategory = getActiveCategory();

  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
      <Header />

      {/* Navegación con categoría activa dinámica */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex border-b border-gray-200">
              <CategoryLink 
                href="/marketplace/ojos" 
                Icon={Eye} 
                text="Ojos" 
                active={activeCategory === 'ojos'} 
              />
              <CategoryLink 
                href="/marketplace/labios" 
                Icon={Smile} 
                text="Labios" 
                active={activeCategory === 'labios'} 
              />
              <CategoryLink 
                href="/marketplace/rostro" 
                Icon={Star} 
                text="Rostro" 
                active={activeCategory === 'rostro'} 
              />
              <CategoryLink 
                href="/marketplace/cuidado-facial" 
                Icon={SprayCan} 
                text="Cuidado Facial" 
                active={activeCategory === 'cuidado-facial'} 
              />
              <CategoryLink 
                href="/marketplace/corporal" 
                Icon={Bath} 
                text="Corporal" 
                active={activeCategory === 'corporal'} 
              />
              <CategoryLink 
                href="/marketplace/accesorios" 
                Icon={Gem} 
                text="Accesorios" 
                active={activeCategory === 'accesorios'} 
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mt-6 px-4 container mx-auto">
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <img
            src="https://res.cloudinary.com/dajaq7tej/image/upload/v1743970574/maquillaje_nqghbf.png"
            alt="Promoción de maquillaje"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center justify-center text-center">
            <div className="text-white p-6 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compra y Paga a Cuotas</h2>
              <p className="text-lg mb-6 mx-auto max-w-lg">Con Addi o tu método de pago favorito</p>
              <Link 
                href="/marketplace" 
                className="inline-flex items-center bg-white text-pink-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition duration-300"
              >
                ¡Compra Aquí!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Beneficios */}
      <section className="py-16 bg-white container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Beneficios</h2>
          <p className="text-gray-600 mx-auto max-w-2xl">Descubre por qué somos la mejor opción para tu belleza</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            Icon={Truck} 
            title="Envío Rápido" 
            text="Recibe tus productos en 24-48 horas"
          />
          <BenefitCard 
            Icon={CreditCard} 
            title="Pago Seguro" 
            text="Múltiples métodos de pago"
          />
          <BenefitCard 
            Icon={Sparkles} 
            title="Productos Premium" 
            text="Calidad profesional garantizada"
          />
        </div>
      </section>

      {/* Sección Newsletter */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¡No te pierdas nuestras ofertas!</h3>
            <p className="text-gray-600 mb-6">Suscríbete para recibir promociones exclusivas</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Componente de categoría
const CategoryLink = ({ 
  href, 
  Icon, 
  text, 
  active = false 
}: { 
  href: string; 
  Icon: React.ElementType; 
  text: string;
  active?: boolean;
}) => (
  <Link href={href} className={`px-6 py-4 text-sm font-medium flex items-center justify-center border-b-2 transition-colors duration-200 ${
    active 
      ? 'border-pink-600 text-pink-600' 
      : 'border-transparent text-gray-500 hover:text-pink-500'
  }`}>
    <Icon className="h-5 w-5 mr-2" />
    <span>{text}</span>
  </Link>
);

// Componente de beneficio
const BenefitCard = ({ Icon, title, text }: { Icon: React.ElementType; title: string; text: string }) => (
  <div className="bg-white rounded-lg p-6 text-center border border-gray-100 hover:shadow-md transition-shadow h-full">
    <div className="bg-pink-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-pink-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mx-auto max-w-xs">{text}</p>
  </div>
);

export default GeneralPage;