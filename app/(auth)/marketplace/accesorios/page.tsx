import { Metadata } from "next";
import Screenaccesorios from "@/modules/auth/Screenaccesorios";


export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu cuenta de beauty",
  alternates: {
    canonical: "https://alejabeauty.com/accesorios",
  },
};

export default function AccesoriosPage() {
   return <Screenaccesorios/>;
}