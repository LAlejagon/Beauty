'use client'
import React from "react";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";

const GeneralPage : React.FC = () => {
  return (
      
    <div className="font-sans bg-pink-100 min-h-screen text-gray-800">
      <Header />

      {/* barra */}
      <aside className="sidebar-filter">
          <h2>Categorías</h2>
          <ul className="category-list">
            {["Ojos", "Labios", "Rostro", "Cuidado Facial", "Accesorios"]}
          </ul>
        </aside>
      <nav className="bg-pink-200 py-2 px-6 flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-pink-700">Promos</a>
        <a href="#" className="hover:text-pink-700">Ojos</a>
        <a href="#" className="hover:text-pink-700">Labios</a>
        <a href="#" className="hover:text-pink-700">Rostro</a>
        <a href="#" className="hover:text-pink-700">Cuidado Facial</a>
        <a href="#" className="hover:text-pink-700">Corporal</a>
        <a href="#" className="hover:text-pink-700">Accesorios</a>
      </nav>

      {/* Banner principal */}
      <section className="relative mt-6 px-4">
        <img
          src="https://res.cloudinary.com/dajaq7tej/image/upload/v1743970574/maquillaje_nqghbf.png"
          className="w-full rounded-xl shadow-lg object-cover"
        />
        <div className="absolute inset-0 bg-pink-900 bg-opacity-30 flex items-center justify-center rounded-xl">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">Compra y Paga a Cuotas</h2>
            <p className="mt-2 text-lg">Con Addi o tu método favorito</p>
            <button className="mt-4 bg-white text-pink-600 font-bold px-6 py-2 rounded-full shadow hover:bg-pink-100 transition">
              ¡Compra Aquí!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


export default GeneralPage;