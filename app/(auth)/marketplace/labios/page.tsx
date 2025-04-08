import { Metadata } from "next";
import Screenlabios from "@/modules/auth/Screenlabios"


export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu cuenta de beauty",
  alternates: {
    canonical: "https://alejabeauty.com/labios",
  },
};

export default function OjosPage() {
  return <Screenlabios />;
}