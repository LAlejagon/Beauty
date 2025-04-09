import { Metadata } from "next";
import Screencuidadocorporal from '@/modules/auth/Screencuidadocorporal';

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: 'Accede a tu cuenta de beauty',
  alternates: {
    canonical: 'https://alejabewty.com/cuidado-corporal',
  },
};

export default function CuidadocorporalPage() {
  return <Screencuidadocorporal />;
}