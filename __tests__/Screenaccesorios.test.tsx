import { render, screen } from '@testing-library/react';
import Screenaccesorios from '@/modules/auth/Screenaccesorios';
import '@testing-library/jest-dom';

describe('Screenaccesorios', () => {
  it('muestra el título principal de accesorios', () => {
    render(<Screenaccesorios />);
    
    // Busca específicamente el h1 con el título exacto
    const tituloPrincipal = screen.getByRole('heading', {
      name: 'Accesorios de Belleza',
      level: 1
    });
    expect(tituloPrincipal).toBeInTheDocument();
  });

  it('muestra el mensaje de no productos disponibles', () => {
    render(<Screenaccesorios />);
    
    // Busca el mensaje exacto que está en el componente
    const mensaje = screen.getByText('No hay accesorios disponibles actualmente');
    expect(mensaje).toBeInTheDocument();
  });
});