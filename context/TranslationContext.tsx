// contexts/TranslationContext.tsx
'use client';

import React, { createContext, useContext } from 'react';
import { useTranslations } from 'next-intl';

type TranslationContextType = ReturnType<typeof useTranslations>;

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({
  children,
  namespace
}: {
  children: React.ReactNode;
  namespace: string;
}) {
  const t = useTranslations(namespace);
  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}