// app/auth/register/layout.tsx
import Header from "@/components/molecules/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-slate-100">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}
