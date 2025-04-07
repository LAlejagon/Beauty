"use client";

const productosOjos = [
  {
    title: "Paleta Sombras Cuadrado",
    price: "$20.900,00",
    imageUrl:
      "https://res.cloudinary.com/dajaq7tej/image/upload/v1743989676/paleta_rqynds.jpg",
  },
  {
    title: "Paleta Sombras Círculo SAS",
    price: "$11.900,00",
    imageUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg", // Reemplacé por una imagen válida
  },
];

export default function OjosPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Productos para Ojos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productosOjos.map((producto, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden border"
          >
            <img
              src={producto.imageUrl}
              alt={producto.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {producto.title}
              </h2>
              <p className="text-pink-600 font-medium">{producto.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
