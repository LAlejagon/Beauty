// components/LanguageSwitcher.tsx
'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FaGlobeAmericas } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname?.split('/')[1] || 'es';

  const changeLocale = (locale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-white/10 transition-colors">
        <FaGlobeAmericas className="text-lg" />
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
      </button>
      <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
        <button
          onClick={() => changeLocale('es')}
          className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === 'es' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-50 text-gray-700'}`}
        >
          {t('spanish')}
        </button>
        <button
          onClick={() => changeLocale('en')}
          className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === 'en' ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-50 text-gray-700'}`}
        >
          {t('english')}
        </button>
      </div>
    </div>
  );
}