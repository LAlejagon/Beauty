"use client";
import ScreenMarketplace from "@/modules/auth/ScreenMarketplace"; 

const productosOjos = [
    {
      title: "Paleta Sombras Cuadrado SAS",
      price: "$2.900,00",
      imageUrl: "https://res.cloudinary.com/dajaq7tej/image/upload/v1743989676/paleta_rqynds.jpg" // Corregido el formato
    },
  {
    title: "Paleta Sombras Círculo SAS",
    price: "$11.900,00",
    imageUrl: "https://link-de-tu-imagen.com/imagen2.jpg",
  },
];

export default function OjosPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Productos para Ojos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productosOjos.map((producto, index) => (
          <ScreenMarketplace key={index} {...producto} />
        ))}
      </div>
    </div>
  );
}