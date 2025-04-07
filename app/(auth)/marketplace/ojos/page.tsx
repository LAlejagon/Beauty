import { Metadata } from "next";
import ScreenMarketplace from "@/modules/auth/ScreenMarketplace";


export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu cuenta de beauty",
  alternates: {
    canonical: "https://alejabeauty.com/ojos",
  },
};

export default function OjosPage() {
  return <ScreenMarketplace />;
}