"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Casa de Mascotas", description: "Espaciosa y cómoda.", price: 150.0, category: "Casas" },
  { id: 2, name: "Collar Inteligente", description: "Monitorea la actividad de tu mascota.", price: 79.99, category: "Collares" },
  { id: 3, name: "Dispensador de Comida", description: "Automático y programable.", price: 120.0, category: "Comida" },
  { id: 4, name: "Cepillo de Cuidado", description: "Ideal para mantener su pelaje sano.", price: 25.0, category: "Cuidado" },
];

export default function ScreenMarketplace() {
  const [cart, setCart] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(product => product.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className="marketplace-container">
      <Header />
      <main className="main-content">
        {/* Barra Lateral */}
        <aside className="sidebar-filter">
          <h2>Categorías</h2>
          <ul className="category-list">
            {["Casas", "Collares", "Comida", "Cuidado"].map((cat) => (
              <li
                key={cat}
                onClick={() => setCategory(cat === category ? null : cat)}
                data-active={category === cat}
              >
                {cat}
              </li>
            ))}
            <li
              onClick={() => setCategory(null)}
              data-active={!category}
            >
              Ver Todos
            </li>
          </ul>
        </aside>

        {/* Productos */}
        <section className="products-grid">
          {products
            .filter(product => !category || product.category === category)
            .map((product) => (
              <div key={product.id} className="product-card">
                <img 
                  src="/placeholder-pet.jpg"  //Aca deben ir las imagenes
                  alt={product.name}  
                  className="product-image" 
                />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => addToCart(product)} 
                    className="btn-primary"
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            ))}
        </section>

        {/* Carrito */}
        <aside className="cart-sidebar">
          <h2>Carrito ({cart.length})</h2>
          {cart.length === 0 ? (
            <p>No tienes productos en el carrito</p>
          ) : (
            <>
              <ul>
                {cart.map(product => (
                  <li key={product.id} className="cart-item">
                    <span>{product.name}</span>
                    <button 
                      onClick={() => removeFromCart(product.id)}
                      className="btn-remove"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                Total: ${calculateTotal()}
              </div>
              <button className="btn-primary">
                Finalizar Compra
              </button>
            </>
          )}
        </aside>
      </main>
      <Footer />
    </div>
  );
}