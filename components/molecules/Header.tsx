'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaHeart, FaBox, FaSearch, FaTimes, FaBars } from "react-icons/fa";

type HeaderProps = {
  cartCount?: number;
};

const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg sticky top-0 z-50">
      {/* Barra superior  */}
      <div className="bg-white text-gray-700 py-2 px-4 text-sm border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/mayoristas" className="flex items-center hover:text-rose-600 transition-colors group">
              <FaHeart className="mr-2 text-green-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Ingreso Mayorista</span>
            </Link>
            <Link href="/catalogo" className="flex items-center hover:text-rose-600 transition-colors group">
              <FaBox className="mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Catálogo Premium</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            
            <Link href="/" className="flex items-center space-x-2 group">
              <img 
                src="https://res.cloudinary.com/dajaq7tej/image/upload/v1746395043/alejabeauty_gugz9s.png" 
                alt="Aleja Beauty - Maquillaje Profesional" 
                className="h-12 w-auto transition-transform group-hover:scale-105" 
                width={55}
                height={55}
              />
              <h1 className="text-3xl font-bold text-white tracking-tight hidden sm:block" style={{ fontFamily: "'Playfair Display', serif" }}>
                ALEJA <span className="text-pink-200">BEAUTY</span>
              </h1>
            </Link>
          </div>
          
          <div className="relative w-full max-w-xl mx-4 hidden md:block">
            <form onSubmit={(e) => { e.preventDefault(); }}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos, marcas o categorías..."
                  className="w-full rounded-full pl-12 pr-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-sm transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Buscar productos"
                />
                <FaSearch className="absolute left-5 top-3.5 text-gray-500" />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-rose-500"
                    onClick={() => setSearchQuery("")}
                    aria-label="Limpiar búsqueda">
                    <FaTimes />
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Iconos de navegación  */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="p-2.5 rounded-full hover:bg-white/10 transition-colors relative group">
              <FaUser className="text-xl text-white" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs bg-white text-rose-600 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                Mi Cuenta
              </span>
            </Link>
            
            <Link href="/carrito" className="p-2.5 rounded-full hover:bg-white/10 transition-colors relative group">
              <FaShoppingCart className="text-xl text-white" />
              <span className="absolute -top-1 -right-1 bg-white text-rose-600 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs bg-white text-rose-600 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                Mi Carrito
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Menú para móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 absolute top-full left-0 right-0 shadow-xl z-50 animate-fadeIn">
          <div className="container mx-auto px-4 py-3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full rounded-full pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300 border border-gray-200"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
            
            <nav className="flex flex-col space-y-3">
              {['Inicio', 'Categorías', 'Mayoristas', 'Contacto'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;