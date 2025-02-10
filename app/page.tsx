'use client';

import Header from "@/components/Header"; // Importamos el Header que ya has creado
import Footer from "@/components/Footer"; // Suponiendo que tienes el Footer también en components

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 sm:p-20">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="text-center sm:text-left">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Bienvenido a la Tienda Chiqui
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Tu lugar para encontrar productos increíbles a precios bajos.
        </p>

        <div className="flex justify-center sm:justify-start gap-8">
          <a
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
            href="/products"
          >
            Explorar productos
          </a>
          <a
            className="bg-transparent border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            href="/marketplace"
          >
            Ir al Marketplace
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
