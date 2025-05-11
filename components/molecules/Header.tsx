'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaUser, 
  FaShoppingCart, 
  FaMapMarkerAlt, 
  FaHeart, 
  FaBox, 
  FaSearch,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md transition-all duration-300 ${isScrolled ? 'py-0' : 'py-1'}`}>
      {/* Barra superior */}
      <div className="bg-white text-gray-700 py-1 px-4 text-xs hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/ubicaciones" className="flex items-center hover:text-rose-600 transition-colors">
              <FaMapMarkerAlt className="mr-1" />
              <span>Ubicaciones</span>
            </Link>
            <Link href="/mayoristas" className="flex items-center hover:text-rose-600 transition-colors">
              <FaHeart className="mr-1 text-green-500" />
              <span>Ingreso Mayorista</span>
            </Link>
            <Link href="/catalogo" className="flex items-center hover:text-rose-600 transition-colors">
              <FaBox className="mr-1 text-blue-500" />
              <span>Catálogo</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-rose-600 transition-colors">
              Ofertas Especiales
            </Link>
            <Link href="/blog" className="hover:text-rose-600 transition-colors">
              Blog de Belleza
            </Link>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo y menú  */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="flex items-center">
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  ALEJA BEAUTY
                </h1>
              </div>
            </Link>
            
            {/* Botón menú  */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
          
          {/* Menú  */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden w-full mt-4 bg-white text-gray-700 rounded-lg shadow-lg p-4`}>
            <div className="flex flex-col space-y-3">
              <Link href="/ubicaciones" className="flex items-center hover:text-rose-600 transition-colors py-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>Ubicaciones</span>
              </Link>
              <Link href="/mayoristas" className="flex items-center hover:text-rose-600 transition-colors py-2">
                <FaHeart className="mr-2 text-green-500" />
                <span>Ingreso Mayorista</span>
              </Link>
              <Link href="/catalogo" className="flex items-center hover:text-rose-600 transition-colors py-2">
                <FaBox className="mr-2 text-blue-500" />
                <span>Catálogo</span>
              </Link>
              <Link href="#" className="hover:text-rose-600 transition-colors py-2">
                Ofertas Especiales
              </Link>
              <Link href="/blog" className="hover:text-rose-600 transition-colors py-2">
                Blog de Belleza
              </Link>
            </div>
          </div>
          
          {/* Buscador - Oculto en móvil cuando el menú está abierto */}
          <div className={`${isMenuOpen ? 'hidden' : 'block'} relative w-full md:w-96 mt-4 md:mt-0`}>
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full rounded-full pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className={`${isMenuOpen ? 'hidden' : 'flex'} items-center space-x-4 mt-4 md:mt-0`}>
            <Link href="/login" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Cuenta">
              <FaUser className="text-xl text-white" />
            </Link>
            <Link href="/carrito" className="p-2 rounded-full hover:bg-white/10 transition-colors relative" aria-label="Carrito">
              <FaShoppingCart className="text-xl text-white" />
              <span className="absolute -top-1 -right-1 bg-white text-rose-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;