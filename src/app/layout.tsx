import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin', 'cyrillic'] });
export const metadata: Metadata = { title: 'Game Finder - Поиск игр', description: 'Интерактивная платформа для поиска и фильтрации видеоигр' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ru"><body className={inter.className}>{children}</body></html>);
}
