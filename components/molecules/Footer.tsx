import React from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
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

  return (
    <footer className="bg-pink-50 text-gray-800 border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Grid principal responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Logo y redes sociales - Full width en móvil */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-pink-600">Aleja Beauty</h2>
            <p className="text-sm text-gray-600">Tu destino de belleza y maquillaje profesional</p>
            
            {/* Redes sociales con ajuste responsive */}
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

          {/* Enlaces rápidos - Ajuste de padding en móvil */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold mb-3 md:mb-4 text-pink-700">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="/productos" text="Productos" />
              <FooterLink href="/categorias" text="Categorías" />
              <FooterLink href="/ofertas" text="Ofertas" />
              <FooterLink href="/novedades" text="Novedades" />
            </ul>
          </div>

          {/* Información de contacto - Iconos ajustados */}
          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4 text-pink-700">Contacto</h3>
            <ul className="space-y-3">
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

          {/* Legal - Ajuste de margen superior en móvil */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold mb-3 md:mb-4 text-pink-700">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/terminos-condiciones" text="Términos y condiciones" />
              <FooterLink href="/politica-privacidad" text="Política de privacidad" />
       
            </ul>
          </div>
        </div>

        {/* Copyright - Texto más compacto en móvil */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-pink-200 text-center text-xs sm:text-sm">
          <p>© {currentYear} Aleja Beauty. Todos los derechos reservados.</p>
          <p className="mt-1 text-gray-500">Desarrollado con amor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;