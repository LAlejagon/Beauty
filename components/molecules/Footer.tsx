import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-gray-100 py-6 text-center text-sm text-gray-600 border-t">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© 2025 Aleja Beauty. Todos los derechos reservados.</p>
        <div className="flex space-x-4">
          <a href="/politica-privacidad" className="hover:text-pink-500 transition-colors">Política de Privacidad</a>
          <a href="/terminos-condiciones" className="hover:text-pink-500 transition-colors">Términos y Condiciones</a>
          <a href="/contacto" className="hover:text-pink-500 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
