import { Metadata } from "next";
import ScreenRegistro from "@/modules/auth/Screenregistro";

export const metadata: Metadata = {
  title: "Registro",
  description: "Crea tu cuenta en Tienda Beauty",
  alternates: {
    canonical: "https://alejabeauty.com/registro",
  },
};

export default function RegistroPage() {
  return <ScreenRegistro />;
}