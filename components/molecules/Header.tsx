'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { 
  FaUser, FaShoppingCart, FaHeart, FaBox, 
  FaSearch, FaBars, FaTimes, FaStar, FaGlobeAmericas 
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Header');
  const currentLocale = pathname?.split('/')[1] || 'es';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLocale = (locale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  const renderLanguageSwitcher = (isMobile = false) => (
    <div className={isMobile ? "p-3 rounded-lg bg-gray-50" : "relative group"}>
      {isMobile ? (
        <div className="flex items-center justify-between">
          <span className="flex items-center text-sm font-medium">
            <FaGlobeAmericas className="mr-2 text-rose-500" />
            {t('language')}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => changeLocale('es')}
              className={`px-3 py-1 text-sm rounded-full ${currentLocale === 'es' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
            >
              {t('spanish')}
            </button>
            <button
              onClick={() => changeLocale('en')}
              className={`px-3 py-1 text-sm rounded-full ${currentLocale === 'en' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
            >
              {t('english')}
            </button>
          </div>
        </div>
      ) : (
        <>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-white/10 transition-colors">
            <FaGlobeAmericas className="text-lg" />
            <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
          </button>
          <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
            <button
              onClick={() => changeLocale('es')}
              className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === 'es' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-50 text-gray-700'}`}
            >
              {t('spanish')}
            </button>
            <button
              onClick={() => changeLocale('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === 'en' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-50 text-gray-700'}`}
            >
              {t('english')}
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dajaq7tej/image/upload/v1746395043/alejabeauty_gugz9s.png" 
                alt={t('logoAlt')} 
                className="h-14 w-auto transition-transform group-hover:scale-105"
                width={140}
                height={70}
              />
              <h1 className="hidden md:block text-3xl font-bold text-white tracking-tight ml-3" style={{ fontFamily: "'Playfair Display', serif", textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                {t('brandName')} <span className="text-rose-100">{t('brandSubname')}</span>
              </h1>
            </div>
          </Link>

          {/* Buscador desktop */}
          <div className="hidden md:block relative w-1/3 mx-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full rounded-full pl-12 pr-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300 shadow-sm transition-all duration-200"
            />
            <FaSearch className="absolute left-5 top-3.5 text-gray-500" />
          </div>

          {/* Acciones */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              {renderLanguageSwitcher()}
            </div>

            <Link href="/login" className="hidden md:flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-white/10 transition-colors group" aria-label={t('accountAria')}>
              <FaUser className="text-xl" />
              <span className="text-sm font-medium">{t('myAccount')}</span>
            </Link>
            
            <Link href="/carrito" className="relative p-2 rounded-full hover:bg-white/10 transition-colors" aria-label={t('cartAria')}>
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-white text-rose-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                0
              </span>
            </Link>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('menuAria')}
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
          
        {/* Navegación */}
        <nav className="hidden md:flex items-center justify-between py-2 border-t border-white/20 mt-2">
          <div className="flex space-x-6">
            <Link href="/catalogo" className="flex items-center hover:text-rose-100 transition-colors font-medium text-sm uppercase tracking-wider">
              <FaBox className="mr-2 text-blue-300" />
              {t('catalog')}
            </Link>
            <Link href="/mayoristas" className="flex items-center hover:text-rose-100 transition-colors font-medium text-sm uppercase tracking-wider">
              <FaHeart className="mr-2 text-green-300" />
              {t('wholesale')}
            </Link>
            <Link href="/ofertas" className="flex items-center hover:text-rose-100 transition-colors font-medium text-sm uppercase tracking-wider">
              <FaStar className="mr-2 text-yellow-400" />
              {t('offers')}
            </Link>
          </div>
          <Link href="/contacto" className="text-sm font-medium hover:text-rose-100 transition-colors">
            {t('contact')}
          </Link>
        </nav>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-xl animate-fadeIn">
          <div className="container mx-auto px-4 py-3">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholderMobile')}
                className="w-full rounded-full pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300 border border-gray-300"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Link href="/catalogo" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-rose-50 transition-colors">
                <FaBox className="mr-2 text-blue-500" />
                <span>{t('catalog')}</span>
              </Link>
              <Link href="/mayoristas" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-rose-50 transition-colors">
                <FaHeart className="mr-2 text-green-500" />
                <span>{t('wholesale')}</span>
              </Link>
              <Link href="/ofertas" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-rose-50 transition-colors">
                <FaStar className="mr-2 text-yellow-500" />
                <span>{t('offers')}</span>
              </Link>
              <Link href="/login" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-rose-50 transition-colors col-span-2">
                <FaUser className="mr-2 text-rose-500" />
                <span>{t('myAccount')}</span>
              </Link>
            </div>

            {renderLanguageSwitcher(true)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;