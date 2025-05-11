import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import OjosPage from '@/modules/auth/Screenojos'


describe('Estados visuales de OjosPage', () => {
  const originalUseState = React.useState;
  
  beforeEach(() => {
    // Limpiamos todos los mocks antes de cada prueba
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Restauramos useState original después de cada prueba
    React.useState = originalUseState;
  });

  describe('Estado de carga', () => {
    it('muestra spinner y texto de carga', () => {
      // Mock solo el estado de loading
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [true, jest.fn()]) // cargar
        .mockImplementationOnce(() => [[], jest.fn()])  // productos vacios
        .mockImplementationOnce(() => [null, jest.fn()]); // error
      
      render(<OjosPage />);
      
      expect(screen.getByText('Cargando productos...')).toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.queryByText('Nuestros Productos')).not.toBeInTheDocument();
    });
  });

  describe('Estado de error', () => {
    it('muestra mensaje de error y botón de reintentar', () => {
      // Mock del estado de error
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [false, jest.fn()]) 
        .mockImplementationOnce(() => [[], jest.fn()])   
        .mockImplementationOnce(() => ['Error de carga', jest.fn()]);
      
      render(<OjosPage />);
      
      expect(screen.getByText('Error de carga')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /reintentar/i })).toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });
  });

  describe('Estado sin productos', () => {
    it('muestra mensaje de productos no disponibles', () => {
      // Mock del estado sin productos
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [false, jest.fn()]) 
        .mockImplementationOnce(() => [[], jest.fn()])    
        .mockImplementationOnce(() => [null, jest.fn()]); 
      render(<OjosPage />);
      
      expect(screen.getByText('No hay productos disponibles en esta categoría')).toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });
  });
});