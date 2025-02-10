'use client';

import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Cama para Perro",
    description: "Cama suave y cómoda para tu mascota.",
    imageUrl: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209874/cld-sample-5.jpg",
  },
  {
    id: 2,
    name: "Pelota Interactiva",
    description: "Pelota que interactúa con tu mascota.",
    imageUrl: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209874/cld-sample-5.jpg",
  },
  {
    id: 3,
    name: "Comida Premium",
    description: "Alimento de alta calidad para mascotas.",
    imageUrl: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209874/cld-sample-5.jpg",
  },
  {
    id: 4,
    name: "Juguete de Resorte",
    description: "Juguete resistente para horas de diversión.",
    imageUrl: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209874/cld-sample-5.jpg",
  },
];

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

        {/* Sección de productos destacados */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-xl" // Ajustado el tamaño de la imagen
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <a
                    href={`/product/${product.id}`}
                    className="inline-block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center sm:justify-start gap-8 mt-8">
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
