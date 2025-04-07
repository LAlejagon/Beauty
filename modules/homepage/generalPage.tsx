'use client';

import React from "react";
import Link from "next/link";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";

const GeneralPage: React.FC = () => {
  return (
    <div className="font-sans bg-pink-100 min-h-screen text-gray-800">
      <Header />

      {/* Barra de navegación */}
      <nav className="bg-pink-200 py-2 px-6 flex space-x-6 text-sm font-medium">
        <Link href="/marketplace/ojos" className="hover:text-pink-700">Ojos</Link>
        <Link href="/marketplace/labios" className="hover:text-pink-700">Labios</Link>
        <Link href="/marketplace/rostro" className="hover:text-pink-700">Rostro</Link>
        <Link href="/marketplace/cuidado-facial" className="hover:text-pink-700">Cuidado Facial</Link>
        <Link href="/marketplace/corporal" className="hover:text-pink-700">Corporal</Link>
        <Link href="/marketplace/accesorios" className="hover:text-pink-700">Accesorios</Link>
      </nav>

      <section className="relative mt-6 px-4">
        <img
          src="https://res.cloudinary.com/dajaq7tej/image/upload/v1743970574/maquillaje_nqghbf.png"
          alt="Promoción de maquillaje"
          className="w-full rounded-xl shadow-lg object-cover"
        />
        <div className="absolute inset-0 bg-pink-900 bg-opacity-30 flex items-center justify-center rounded-xl">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">Compra y Paga a Cuotas</h2>
            <p className="mt-2 text-lg">Con Addi o tu método favorito</p>
            <Link 
              href="/marketplace" 
              className="mt-4 inline-block bg-white text-pink-600 font-bold px-6 py-2 rounded-full shadow hover:bg-pink-100 transition"
            >
              ¡Compra Aquí!
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralPage;