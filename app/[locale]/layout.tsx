import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

// Configuración básica
const locales = ['en', 'es'];

// Metadata fija (puedes hacerla dinámica después)
export const metadata: Metadata = {
  title: "Tienda Beauty",
  description: "Compra los mejores productos",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validación simple del locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Carga directa de mensajes sin try/catch (simplificado)
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider 
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}