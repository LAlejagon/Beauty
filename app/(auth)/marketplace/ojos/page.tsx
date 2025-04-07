import { Metadata } from "next";
import Screenojos from "@/modules/auth/Screenojos";
import Screenlabios from "@/modules/auth/Screenlabios"


export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu cuenta de beauty",
  alternates: {
    canonical: "https://alejabeauty.com/ojos",
  },
};

export default function OjosPage() {
  return <Screenojos />;
}