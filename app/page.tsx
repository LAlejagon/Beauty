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
    <div className="home-container">
      <Header />

      <main className="main-content">
        <div className="hero-section">
          <div className="particles">
            {/* Puedes agregar partículas dinámicas aquí con JavaScript */}
            {[...Array(30)].map((_, i) => (
              <div 
                key={i}
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          <h1 className="hero-title">Bienvenido a la Tienda Chiki</h1>
          <p className="hero-subtitle">
            Tu lugar para encontrar productos increíbles a precios bajos.
          </p>
        </div>

        <section className="featured-products">
          <h2 className="section-title">Productos Destacados</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="image-container">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <a href={`/product/${product.id}`} className="product-link">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" className="link-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-buttons">
          <a href="/products" className="btn-primary">
            Explorar productos
            <span className="hover-effect"></span>
          </a>
          <a href="/marketplace" className="btn-secondary">
            Ir al Marketplace
            <span className="hover-effect"></span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}