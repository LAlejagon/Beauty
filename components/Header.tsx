'use client'; // Esto asegura que el componente se renderice solo en el cliente

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Cambiar a 'next/navigation' para Next.js 13+
import { FaHome, FaShoppingCart, FaUser, FaSignOutAlt, FaUserPlus } from 'react-icons/fa'; // Iconos de react-icons

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Estado para autenticación
  const [isClient, setIsClient] = useState(false); // Estado para saber si estamos en el cliente
  const router = useRouter();

  // Verifica si estamos en el cliente
  useEffect(() => {
    setIsClient(true); // Actualiza a verdadero cuando el componente se monta
  }, []);

  // Verifica la autenticación al cargar el componente
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true'); // Asigna el estado de autenticación
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false); // Actualiza el estado de autenticación
    router.push('/login'); // Redirige a la página de login
  };

  if (!isClient) {
    return null; // Evita el renderizado en el servidor
  }

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="text-2xl">🍅</span>
          <span>TIENDA CHIKI</span>
        </Link>

        {/* Menú de navegación */}
        <div className="nav-links">
          {/* Enlaces principales */}
          <Link href="/" className="nav-link">
            <FaHome className="icon" />
            <span>Home</span>
          </Link>
          <Link href="/marketplace" className="nav-link">
            <FaShoppingCart className="icon" />
            <span>Marketplace</span>
          </Link>
      
          {/* Menú de usuario */}
          {isAuthenticated ? (
            <>
              <Link href="/profile" className="nav-link">
                <FaUser className="icon" />
                <span>Perfil</span>
              </Link>
              <button onClick={handleLogout} className="nav-link-button">
                <FaSignOutAlt className="icon" />
                <span>Cerrar Sesión</span>
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="nav-link-button">
                <FaUser className="icon" />
                <span>Login</span>
              </Link>
              <Link href="/register" className="nav-link-button">
                <FaUserPlus className="icon" />
                <span>Register</span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
