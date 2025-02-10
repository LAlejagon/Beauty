// app/auth/register/page.tsx
import { Metadata } from "next";
import ScreenRegister from "@/modules/auth/Screenregistro";

export const metadata: Metadata = {
  title: "Register",
  description: "Regístrate para crear una nueva cuenta",
  alternates: {
    canonical: "https://mydomain.com/register",
  },
};

export default function RegisterPage() {
  return <ScreenRegister />;
}
