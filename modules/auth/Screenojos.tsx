'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { Eye, Smile, Star, Bath, SprayCan, Gem, Heart, ShoppingBag, ChevronRight } from "lucide-react";
import api from "@/utils/api";

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
  { href: "/marketplace/cuidado-corporal", Icon: Bath, text: "Corporal" },
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
                  category.href === "/ojos" 
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
  const { name, price, imageUrl, description, rating = 4, isNew, isBestSeller } = product;
  
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
          src={imageUrl || '/default-product.jpg'}
          alt={name}
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
          {name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900">${price.toFixed(2)}</span>
          <button 
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-2 px-4 rounded transition flex items-center"
            aria-label={`Añadir ${name} al carrito`}
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
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Obtener datos de la categoría y productos
        const response = await api.get('/categories/ojos/products');
        setCategory(response.data.category);
        setProducts(response.data.products.map((product: any) => ({
          ...product,

          isNew: Math.random() > 0.7,
          isBestSeller: Math.random() > 0.7,
          rating: 4 + Math.random() 
        })));
      } catch (err) {
        setError('Error al cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <CategoryNavigation />
      <div className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p>Cargando productos...</p>
        </div>
      </div>
      <Footer />
    </div>
  );

  if (error) return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <CategoryNavigation />
      <div className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Reintentar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <CategoryNavigation />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {category?.name || 'Maquillaje Profesional'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {category?.description || 'Productos de alta calidad para un look impecable'}
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
          <Link href="/" className="text-pink-600 hover:text-pink-800 font-medium flex items-center">
            Ver todos <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay productos disponibles en esta categoría</p>
          </div>
        )}
      </main>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Suscríbete a nuestra pagina
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