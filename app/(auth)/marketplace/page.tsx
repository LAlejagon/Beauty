// app/marketplace/page.tsx
import { Metadata } from "next";
import ScreenMarketplace from "@/modules/auth/ScreenMarketplace"; // Asegúrate de que esta ruta sea correcta

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Explora y compra los mejores productos para tu mascota",
  alternates: {
    canonical: "https://mydomain.com/marketplace",
  },
};

export default function MarketplacePage() {
  return <ScreenMarketplace />; // Debe ser un componente válido de React
}
