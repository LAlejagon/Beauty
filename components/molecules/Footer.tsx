import React, { useState, useEffect } from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  text: string;
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface ContactItemProps {
  icon: React.ReactNode;
  content: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li>
    <Link 
      href={href} 
      className="hover:text-pink-600 transition-colors text-gray-700"
    >
      {text}
    </Link>
  </li>
);

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="text-pink-600 hover:text-pink-800 transition-colors"
  >
    {icon}
  </a>
);

const ContactItem: React.FC<ContactItemProps> = ({ icon, content }) => (
  <li className="flex items-start space-x-2">
    <span className="mt-0.5">{icon}</span>
    <span className="text-gray-700">{content}</span>
  </li>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/ocultar botón de scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-pink-50 text-gray-800 border-t border-pink-200 relative">
      {/* Botón flotante para volver arriba */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all z-50"
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {/* Contenido del footer centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Logo y redes sociales */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start space-y-4">
            <h2 className="text-2xl font-bold text-pink-600 text-center sm:text-left">Aleja Beauty</h2>
            <p className="text-sm text-gray-600 text-center sm:text-left">Tu destino de belleza y maquillaje profesional</p>
            
            <div className="flex space-x-4 pt-2">
              <SocialIcon 
                href="https://facebook.com/AlejaBeauty" 
                icon={<FaFacebook size={20} />}
                label="Facebook"
              />
              <SocialIcon 
                href="https://instagram.com/AlejaBeauty" 
                icon={<FaInstagram size={20} />}
                label="Instagram"
              />
              <SocialIcon 
                href="https://tiktok.com/@AlejaBeauty" 
                icon={<FaTiktok size={20} />}
                label="TikTok"
              />
              <SocialIcon 
                href="https://wa.me/573001234567" 
                icon={<FaWhatsapp size={20} />}
                label="WhatsApp"
              />
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3 md:mb-4 text-pink-700">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <FooterLink href="/productos" text="Productos" />
              <FooterLink href="/categorias" text="Categorías" />
              <FooterLink href="/ofertas" text="Ofertas" />
              <FooterLink href="/novedades" text="Novedades" />
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3 md:mb-4 text-pink-700">Contacto</h3>
            <ul className="space-y-3 text-center sm:text-left">
              <ContactItem 
                icon={<FaEnvelope className="text-pink-500" />}
                content={<a href="mailto:contacto@alejabeauty.com" className="hover:text-pink-600">contacto@alejabeauty.com</a>}
              />
              <ContactItem 
                icon={<FaPhone className="text-pink-500" />}
                content={<a href="tel:+573001234567" className="hover:text-pink-600">+57 300 123 4567</a>}
              />
              <ContactItem 
                icon={<FaMapMarkerAlt className="text-pink-500" />}
                content="Carrera 45 #20-10, Manizales"
              />
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3 md:mb-4 text-pink-700">Legal</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <FooterLink href="/terminos-condiciones" text="Términos y condiciones" />
              <FooterLink href="/politica-privacidad" text="Política de privacidad" />
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-pink-200 text-center">
          <p className="text-xs sm:text-sm">© {currentYear} Aleja Beauty. Todos los derechos reservados.</p>
          <p className="mt-1 text-gray-500 text-xs sm:text-sm">Desarrollado con amor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;