"use client";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema de validación con Zod
const registerSchema = z
  .object({
    email: z.string().email("Email inválido").min(1, "Email es requerido"),
    username: z
      .string()
      .min(3, "Usuario debe tener al menos 3 caracteres")
      .max(20, "Usuario no puede exceder 20 caracteres"),
    password: z
      .string()
      .min(8, "Contraseña debe tener al menos 8 caracteres")
      .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
      .regex(/[0-9]/, "Debe contener al menos un número"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

// Definición del tipo a partir del esquema
type RegisterInputs = z.infer<typeof registerSchema>;

export default function ScreenRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => console.log(data);

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Regístrate</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div>
            <input
              {...register("username")}
              type="text"
              placeholder="Nombre de usuario"
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>

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

          {/* Confirm Password */}
          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirmar contraseña"
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit">Registrarse</button>
          
        </form>

        {/* Login Link */}
        <div className="login-link">
          <span>¿Ya tienes una cuenta?</span>
          <Link href="/Screenregistro">Regístrate</Link>
        </div>
      </div>
    </div>
  );
}