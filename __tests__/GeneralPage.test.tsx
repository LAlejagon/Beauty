import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import GeneralPage from '../modules/homepage/generalPage';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/'),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
  })),
}));

describe('GeneralPage Component', () => {
  const mockUsePathname = usePathname as jest.Mock;

  describe('categorías', () => {
    it('muestra todas las categorías correctamente', () => {
      mockUsePathname.mockReturnValue('/');
      render(<GeneralPage />);
      
      expect(screen.getByText('Ojos')).toBeInTheDocument();
      expect(screen.getByText('Labios')).toBeInTheDocument();
      expect(screen.getByText('Rostro')).toBeInTheDocument();
      expect(screen.getByText('Cuidado Facial')).toBeInTheDocument();
      expect(screen.getByText('Corporal')).toBeInTheDocument();
      expect(screen.getByText('Accesorios')).toBeInTheDocument();
    });

    it('resalta la categoría activa según la ruta', () => {
      mockUsePathname.mockReturnValue('/marketplace/labios');
      render(<GeneralPage />);
      
      const activeLink = screen.getByText('Labios').closest('a');
      expect(activeLink).toHaveClass('border-pink-600');
      expect(activeLink).toHaveClass('text-pink-600');
    });
  });

  // 3. Pruebas de la sección hero
  describe('Sección Home', () => {
    beforeEach(() => {
      mockUsePathname.mockReturnValue('/');
    });

    it('muestra la imagen promocional', () => {
      render(<GeneralPage />);
      
      const heroImage = screen.getByAltText('Promoción de maquillaje');
      expect(heroImage).toBeInTheDocument();
    });

    it('muestra el título y texto de bienvenida', () => {
      render(<GeneralPage />);
      
      expect(screen.getByText('BIENVENIDOS A ALEJA BEAUTY')).toBeInTheDocument();
      expect(screen.getByText(/productos de maquillaje de alta calidad/i)).toBeInTheDocument();
    });

    it('muestra el botón de registro', () => {
      render(<GeneralPage />);
      
      const registerButton = screen.getByRole('link', { name: /¡registate ya!/i });
      expect(registerButton).toBeInTheDocument();
      expect(registerButton).toHaveAttribute('href', '/register');
    });
  });

  // 4. Pruebas de la sección de beneficios
  describe('Sección de Beneficios', () => {
    it('muestra las tres tarjetas de beneficios', () => {
      mockUsePathname.mockReturnValue('/');
      render(<GeneralPage />);
      
      expect(screen.getByText('Envío Rápido')).toBeInTheDocument();
      expect(screen.getByText('Pago Seguro')).toBeInTheDocument();
      expect(screen.getByText('Productos Premium')).toBeInTheDocument();
    });
  });
     it('manjea rutas desconocidas sin errores', () => {
     mockUsePathname.mockReturnValue('/ruta/desconocida');
     expect(() => render(<GeneralPage />)).not.toThrow();
    });

});
