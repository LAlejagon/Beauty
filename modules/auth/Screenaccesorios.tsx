'use client';
import Link from "next/link";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { Eye, Smile, Star, Bath, SprayCan, Gem, } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  rating?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
};

type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
};

const CATEGORIES = [
  { href: "/marketplace/accesorios", Icon: Gem, text: "Accesorios" },
  { href: "/marketplace/ojos", Icon: Eye, text: "Ojos" },
  { href: "/marketplace/labios", Icon: Smile, text: "Labios" },
  { href: "/marketplace/rostro", Icon: Star, text: "Rostro" },
  { href: "/marketplace/cuidado-facial", Icon: SprayCan, text: "Cuidado Facial" },
  { href: "/marketplace/cuidado-corporal", Icon: Bath, text: "Corporal" }
];

const CategoryNavigation = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex border-b border-gray-200">
            {CATEGORIES.map((category, index) => (
              <Link 
                key={index}
                href={category.href}
                className={`px-6 py-4 text-sm font-medium flex items-center justify-center border-b-2 transition-colors duration-200 ${
                  category.href === "/labios" 
                    ? 'border-pink-600 text-pink-600' 
                    : 'border-transparent text-gray-500 hover:text-pink-500'
                }`}
              >
                <category.Icon className="h-5 w-5 mr-2" />
                {category.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Screenaccesorios = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Navegación de categorías */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex border-b border-gray-200">
            {CATEGORIES.map((category, index) => (
              <Link 
                key={index}
                href={category.href}
                className={`px-6 py-4 text-sm font-medium flex items-center justify-center border-b-2 transition-colors duration-200 ${
                  category.href === "/labios" 
                    ? 'border-pink-600 text-pink-600' 
                    : 'border-transparent text-gray-500 hover:text-pink-500'
                }`}
              >
                <category.Icon className="h-5 w-5 mr-2" />
                {category.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
      {/* Contenido principal */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accesorios de Belleza
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Complementos y herramientas para completar tu rutina de belleza
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">
            Nuestros Accesorios
          </h2>
          
          {/* Mensaje cuando no hay productos */}
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">
              No hay accesorios disponibles actualmente
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Screenaccesorios;