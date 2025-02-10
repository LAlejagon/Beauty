"use client";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

// Esquema de validación para el login
const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email es requerido"),
  password: z.string().min(8, "Contraseña debe tener al menos 8 caracteres"), // Validación de la contraseña
});

type LoginInputs = z.infer<typeof loginSchema>;

export default function ScreenLogin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    // Guardar la información de autenticación en el localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("email", data.email); // Guardar el correo electrónico
    localStorage.setItem("password", data.password); // Guardar la contraseña

    // Redirigir a la página de inicio o cualquier otra página
    router.push("/"); // Redirige a la página principal
  };

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="login-container">
        <div className="login-form">
          <h2>Inicia sesión</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Correo electrónico"
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Contraseña"
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit">Iniciar sesión</button>
          </form>

          {/* Sign Up Link */}
          <div className="register-link">
            <span>¿No tienes cuenta?</span>
            <Link href="/registro">Regístrate</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
