import { render, screen } from '@testing-library/react';
import Footer from '@/components/molecules/Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('muestra el texto de derechos reservados', () => {
    expect(screen.getByText(/derechos reservados/i)).toBeInTheDocument();
  });

  it('muestra el nombre Aleja Beauty', () => {
    const alejaElements = screen.getAllByText(/Aleja Beauty/i);
    expect(alejaElements.length).toBeGreaterThan(0);
  });

  describe('Redes sociales', () => {
    it('muestra el enlace a Facebook', () => {
      const facebookLink = screen.getByRole('link', { name: /facebook/i });
      expect(facebookLink).toBeInTheDocument();
      expect(facebookLink).toHaveAttribute('href', 'https://facebook.com/AlejaBeauty');
    });

    it('muestra el enlace a Instagram', () => {
      const instagramLink = screen.getByRole('link', { name: /instagram/i });
      expect(instagramLink).toBeInTheDocument();
      expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/AlejaBeauty');
    });

    it('muestra el enlace a TikTok', () => {
      const tiktokLink = screen.getByRole('link', { name: /tiktok/i });
      expect(tiktokLink).toBeInTheDocument();
      expect(tiktokLink).toHaveAttribute('href', 'https://tiktok.com/@AlejaBeauty');
    });

    it('muestra el enlace a WhatsApp', () => {
      const whatsappLink = screen.getByRole('link', { name: /whatsapp/i });
      expect(whatsappLink).toBeInTheDocument();
      expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/573001234567');
    });

    it('los enlaces tienen target _blank', () => {
      const socialLinks = screen.getAllByRole('link').filter(link => 
        ['facebook', 'instagram', 'tiktok', 'whatsapp'].some(name => 
          link.getAttribute('aria-label')?.toLowerCase().includes(name)
        )
      );
      
      socialLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringMatching(/noopener|noreferrer/));
      });
    });
  });

  describe('Enlaces legales', () => {
    it('muestra el enlace a Términos y condiciones', () => {
      const terminosLink = screen.queryByRole('link', { name: /términos y condiciones/i })
      screen.getByText(/términos y condiciones/i).closest('a');
      expect(terminosLink).toBeInTheDocument();
      expect(terminosLink).toHaveAttribute('href', '/terminos-condiciones');
    });

    it('muestra el enlace a Política de privacidad', () => {
      const privacidadLink = screen.queryByRole('link', { name: /política de privacidad/i })
      screen.getByText(/política de privacidad/i).closest('a');
      expect(privacidadLink).toBeInTheDocument();
      expect(privacidadLink).toHaveAttribute('href', '/politica-privacidad');
    });
  });

  describe('derecho de autor', () => {
    it('muestra el año de creacion del proyecto', () => {
      const currentYear = new Date().getFullYear();
      const copyrightElement = screen.getByText(/©.*Aleja Beauty/i);
      expect(copyrightElement.textContent).toContain(currentYear.toString());
    });

    it('muestra el texto de desarrollo', () => {
      expect(screen.getByText(/Desarrollado con amor/i)).toBeInTheDocument();
    });
  });
});