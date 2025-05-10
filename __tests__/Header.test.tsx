import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/molecules/Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  // 1. Prueba del logo - Esta ya funcionaba
  it('muestra el logo de Aleja Beauty', () => {
    expect(screen.getByAltText(/aleja beauty/i)).toBeInTheDocument();
  });

  // 2. Prueba del carrito - Corregida
  it('muestra el icono del carrito con la cantidad', () => {
    const carritoLink = screen.getByRole('link', { name: /0 mi carrito/i });
    expect(carritoLink).toHaveAttribute('href', '/carrito');
    expect(screen.getByText('0')).toBeInTheDocument(); // Verifica el contador
  });

  // 3. Prueba del enlace a inicio - Esta ya funcionaba
  it('Muestra un enlace a la página de inicio', () => {
    const link = screen.getByRole('link', { name: /aleja beauty/i });
    expect(link).toHaveAttribute('href', '/');
  });

  // 4. Prueba del enlace a login - Corregida
  it('Muestra un enlace a login', () => {
    const loginLink = screen.getByRole('link', { name: /mi cuenta/i });
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  // 5. Prueba del campo de búsqueda - Corregida
  it('contiene un campo de búsqueda funcional', () => {
    const searchInput = screen.getByPlaceholderText(
      /buscar productos, marcas o categorías.../i
    );
    expect(searchInput).toBeInTheDocument();
    
    fireEvent.change(searchInput, { target: { value: 'labial' } });
    expect(searchInput).toHaveValue('labial');
  });

  // 6. Prueba del botón móvil - Corregida
  it('muestra el botón del menú móvil', () => {
    const menuButton = screen.getByRole('button', { name: /menú/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveClass('md:hidden'); // Verifica que solo se muestra en móvil
  });

  // 7. Prueba de enlaces existentes (no los que tú pensabas)
  it('muestra enlaces de catálogo y mayoristas', () => {
    expect(screen.getByRole('link', { name: /catálogo premium/i })).toHaveAttribute('href', '/catalogo');
    expect(screen.getByRole('link', { name: /ingreso mayorista/i })).toHaveAttribute('href', '/mayoristas');
  });


});