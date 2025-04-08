'use client';
import React from "react";
import Link from "next/link";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { Eye, Smile, Star, Bath, SprayCan, Gem, Heart, ShoppingBag, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  description: string;
  rating: number;
  isNew?: boolean;
  isBestSeller?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Paleta de Sombras Profesional",
    price: "$20.900",
    imageUrl: "https://res.cloudinary.com/dajaq7tej/image/upload/v1743989676/paleta_rqynds.jpg",
    description: "12 tonos mate y brillo de alta pigmentación",
    rating: 4.5,
    isNew: true
  },
  {
    id: 2,
    title: "Paleta Compacta Multiusos",
    price: "$11.900",
    imageUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    description: "8 tonos versátiles para día y noche",
    rating: 4.2,
    isBestSeller: true
  },
  {
    id: 3,
    title: "Delineador Líquido de Precisión",
    price: "$8.500",
    imageUrl: "https://res.cloudinary.com/demo/image/upload/v1633456898/makeup3.jpg",
    description: "Acabado mate y punta ultra fina",
    rating: 4.8
  },
  {
    id: 4,
    title: "Máscara de Pestañas Voluminizadora",
    price: "$12.300",
    imageUrl: "https://res.cloudinary.com/demo/image/upload/v1633456898/makeup4.jpg",
    description: "Efecto XXL sin grumos",
    rating: 4.6,
    isBestSeller: true
  },
];

const CATEGORIES = [
  { href: "/marketplace/ojos", Icon: Eye, text: "Ojos" },
  { href: "/marketplace/labios", Icon: Smile, text: "Labios" },
  { href: "/marketplace/rostro", Icon: Star, text: "Rostro" },
  { href: "/marketplace/cuidado-facial", Icon: SprayCan, text: "Cuidado Facial" },
  { href: "/marketplace/corporal", Icon: Bath, text: "Corporal" },
  { href: "/marketplace/accesorios", Icon: Gem, text: "Accesorios" }
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
                  index === 0 
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

const ProductCard = ({ product }: { product: Product }) => {
  const { title, price, imageUrl, description, rating, isNew, isBestSeller } = product;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden group relative shadow-sm hover:shadow-md transition-shadow duration-300">
      {isNew && (
        <div className="absolute top-3 left-3 z-10 bg-pink-600 text-white text-xs font-medium px-2 py-1 rounded">
          Nuevo
        </div>
      )}
      {isBestSeller && (
        <div className="absolute top-3 right-3 z-10 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded">
          Más vendido
        </div>
      )}
      
      <button className="absolute top-12 right-3 z-10 bg-white/90 p-2 rounded-full backdrop-blur-sm hover:bg-pink-100 text-gray-500 hover:text-pink-600 transition">
        <Heart className="h-4 w-4" />
      </button>
      
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>
        </div>
        
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900">{price}</span>
          <button 
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-2 px-4 rounded transition flex items-center"
            aria-label={`Añadir ${title} al carrito`}
          >
            <ShoppingBag className="h-4 w-4 mr-1.5" />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

const OjosPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <CategoryNavigation />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Maquillaje Profesional
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Productos de alta calidad para un look impecable
          </p>
          <div className="flex justify-center">
            <Link 
              href="#productos" 
              className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 px-6 rounded transition"
            >
              Ver colección
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <main id="productos" className="flex-1 container mx-auto px-4 py-12 bg-gray-50">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Nuestros Productos
          </h2>
          <Link href="/marketplace" className="text-pink-600 hover:text-pink-800 font-medium flex items-center">
            Ver todos <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Recibe las últimas tendencias y ofertas exclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-6 rounded transition">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OjosPage;