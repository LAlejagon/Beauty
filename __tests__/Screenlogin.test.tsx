// __tests__/Screenlogin.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Screenlogin from '../modules/auth/Screenlogin';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(), 
  }),
}));

jest.mock('@/context/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe('Screenlogin', () => {
  test('muestra formulario de inicio de sesión', () => {
    render(<Screenlogin />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  test('tiene botón para iniciar sesión', () => {
    render(<Screenlogin />);
    expect(screen.getByRole('button', { name: /iniciar sesión/i })).toBeInTheDocument();
  });
});
