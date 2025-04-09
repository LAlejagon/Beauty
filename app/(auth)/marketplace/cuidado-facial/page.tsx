import { Metadata } from "next";
import Screencuidadofacial from '@/modules/auth/Screencuidadofacial';

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: 'Accede a tu cuenta de beauty',
  alternates: {
    canonical: 'https://alejabewty.com/cuidado-facial',
  },
};

export default function CuidadofacialPage() {
  return <Screencuidadofacial />;
}