import React from "react";
import Link from "next/link";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { Eye, Smile, Star, Bath, SprayCan, Gem } from "lucide-react";



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
    imageUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
  },
];

const OjosPage = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
      <Header />

      <nav className="bg-pink-100 shadow-sm py-1 px-5">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
          <CategoryLink href="/marketplace/ojos" Icon={Eye} text=" Ojos" />
          <CategoryLink href="/marketplace/labios" Icon={Smile} text=" Labios" />
          <CategoryLink href="/marketplace/rostro" Icon={Star} text=" Rostro" />
          <CategoryLink href="/marketplace/cuidado-facial" Icon={SprayCan} text=" Cuidado Facial" />
          <CategoryLink href="/marketplace/corporal" Icon={Bath} text=" Cuidado Corporal" />
          <CategoryLink href="/marketplace/accesorios" Icon={Gem} text=" Accesorios" />
        </div>
      </nav>
    

      <section className="py-10 container mx-auto px-1 text-center max-w-3xl">
        <h2 className="text-2xl font-bold text-pink-600 mb-3">Maquillaje para Ojos</h2>
        <p className="text-gray-700">
          Descubre paletas de sombras con pigmentos intensos, delineadores precisos y máscaras que realzan tu mirada.
          Cada producto ha sido seleccionado pensando en la calidad, el estilo y las últimas tendencias. Ya seas amante
          de los looks naturales o dramáticos, aquí encontrarás lo ideal para ti.
        </p>
      </section>

      <section id="productos" className="px-6 pb-12 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productosOjos.map((producto, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <img
                src={producto.imageUrl}
                alt={producto.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{producto.title}</h2>
                <p className="text-pink-600 font-medium">{producto.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CategoryLink = ({ href, Icon, text }: { href: string; Icon: React.ElementType; text: string }) => (
  <Link href={href} className="group">
    <div className="flex flex-col items-center px-4 py-2 transition-colors">
      <Icon className="w-6 h-6 mb-1 text-gray-700 group-hover:text-pink-600 transition-colors" />
      <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors">{text}</span>
    </div>
  </Link>
);

export default OjosPage;
