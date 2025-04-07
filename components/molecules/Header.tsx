"use client";
import React from "react";
import Link from "next/link";

import { FaUser, FaShoppingCart, FaMapMarkerAlt, FaHeart, FaBox, FaSearch } from "react-icons/fa";

const Header: React.FC = () => {

  return (

    <header className="bg-pink-300 text-white py-3 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">

      <div className="flex items-center gap-4 text-sm">
        <FaMapMarkerAlt className="flex items-center gap-1 text-pink-200" />
        <span className="text-sm text-gray-600">Ubicaciones</span>
        <FaHeart className="text-green-500" />
        <span className="text-sm text-gray-600">Ingreso Mayorista</span>
        <FaBox className="text-blue-500" />
        <span className="text-sm text-gray-600">Catálogo</span>
      </div>

        <h1 className="text-3xl font-bold text-pink-600 text-center">
          ALEJA BEAUTY
        </h1>

        {/* Buscador + íconos */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full rounded pl-8 pr-2 py-1 text-gray-700"
            />
            <FaSearch className="absolute top-2 left-2 text-gray-400" />
          </div>
          <Link href="/login">
         <FaUser className="text-white hover:text-gray-300 cursor-pointer" />
           </Link>
          <FaShoppingCart className="text-white hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
      );
    };
    
    export default Header;
    