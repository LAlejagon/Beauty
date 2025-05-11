'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { Truck, CreditCard, Sparkles, Eye, Smile, Star, Bath, SprayCan, Gem } from "lucide-react";

type CategoryLinkProps = {
  href: string;
  Icon: React.ElementType;
  text: string;
  active?: boolean;
};

type BenefitCardProps = {
  Icon: React.ElementType;
  title: string;
  text: string;
};

// Constants
const CATEGORIES = [
  { href: "/marketplace/ojos", Icon: Eye, text: "Ojos" },
  { href: "/marketplace/labios", Icon: Smile, text: "Labios" },
  { href: "/marketplace/rostro", Icon: Star, text: "Rostro" },
  { href: "/marketplace/cuidado-facial", Icon: SprayCan, text: "Cuidado Facial" },
  { href: "/marketplace/corporal", Icon: Bath, text: "Corporal" },
  { href: "/marketplace/accesorios", Icon: Gem, text: "Accesorios" }
];

const BENEFITS = [
  { Icon: Truck, title: "Envío Rápido", text: "Recibe tus productos en 24-48 horas" },
  { Icon: CreditCard, title: "Pago Seguro", text: "Múltiples métodos de pago" },
  { Icon: Sparkles, title: "Productos Premium", text: "Calidad profesional garantizada" }
];

// Components
const CategoryLink: React.FC<CategoryLinkProps> = ({ href, Icon, text, active = false }) => (
  <Link 
    href={href} 
    className={`px-4 py-3 text-sm font-medium flex flex-col items-center border-b-2 transition-colors duration-200 ${
      active 
        ? 'border-pink-600 text-pink-600' 
        : 'border-transparent text-gray-500 hover:text-pink-500'
    }`}
  >
    <Icon className="h-5 w-5 mb-1" />
    <span className="text-xs sm:text-sm text-center">{text}</span>
  </Link>
);

const BenefitCard: React.FC<BenefitCardProps> = ({ Icon, title, text }) => (
  <div className="bg-white rounded-lg p-4 sm:p-6 text-center border border-gray-100 hover:shadow-md transition-shadow h-full">
    <div className="bg-pink-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base mx-auto max-w-xs">{text}</p>
  </div>
);

const NewsletterSection = () => (
  <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">¡No te pierdas nuestras ofertas!</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Suscríbete para recibir promociones exclusivas</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-grow max-w-md px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm sm:text-base"
          />
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition whitespace-nowrap text-sm sm:text-base">
            Suscribirme
          </button>
        </div>
      </div>
    </div>
  </section>
);

const HeroBanner = () => (
  <section className="relative mt-4 sm:mt-6 px-4 container mx-auto">
    <div className="relative rounded-xl overflow-hidden shadow-md">
      <img
        src="https://res.cloudinary.com/dajaq7tej/image/upload/v1743970574/maquillaje_nqghbf.png"
        alt="Promoción de maquillaje"
        className="w-full h-48 sm:h-64 md:h-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center justify-center text-center">
        <div className="text-white p-4 sm:p-6 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Compra y Paga a Cuotas</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 mx-auto max-w-lg">Con Addi o tu método de pago favorito</p>
          <Link 
            href="/marketplace" 
            className="inline-flex items-center bg-white text-pink-600 hover:bg-gray-100 font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base"
          >
            ¡Compra Aquí!
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="py-12 sm:py-16 bg-white container mx-auto px-4">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Nuestros Beneficios</h2>
      <p className="text-gray-600 text-sm sm:text-base mx-auto max-w-2xl">Descubre por qué somos la mejor opción para tu belleza</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {BENEFITS.map((benefit, index) => (
        <BenefitCard key={index} {...benefit} />
      ))}
    </div>
  </section>
);

const CategoryNavigation: React.FC<{ activeCategory: string | null }> = ({ activeCategory }) => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-20">
    <div className="container mx-auto px-2 sm:px-4 overflow-x-auto">
      <div className="flex justify-start sm:justify-center">
        <div className="flex border-b border-gray-200 space-x-1 sm:space-x-0">
          {CATEGORIES.map((category) => (
            <CategoryLink 
              key={category.href}
              href={category.href}
              Icon={category.Icon}
              text={category.text}
              active={activeCategory === category.text.toLowerCase().replace(' ', '-')}
            />
          ))}
        </div>
      </div>
    </div>
  </nav>
);

// Main Component
const GeneralPage: React.FC = () => {
  const pathname = usePathname();

  const getActiveCategory = () => {
    const category = CATEGORIES.find(cat => 
      pathname.includes(cat.href.split('/').pop() || '')
    );
    return category ? category.text.toLowerCase().replace(' ', '-') : null;
  };

  const activeCategory = getActiveCategory();

  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
      <Header />
      
      <CategoryNavigation activeCategory={activeCategory} />
      
      <HeroBanner />
      
      <BenefitsSection />
      
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default GeneralPage;