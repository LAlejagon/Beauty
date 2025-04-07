import { Metadata } from "next";
import ScreenLogin from "@/modules/auth/Screenlogin";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu cuenta en Tienda Chiki",
  alternates: {
    canonical: "https://alejabeauty.com/login",
  },
};

export default function LoginPage() {
  return <ScreenLogin />;
}