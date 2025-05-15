import GeneralPage from "../../modules/homepage/generalPage";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home'); // Usa las traducciones
  
  return (
    <main className="w-full items-center">
      <div>
        <GeneralPage t={t} /> {/* Pasa las traducciones como prop */}
      </div>
    </main>
  );
}