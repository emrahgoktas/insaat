import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Halef Grup Yapı | Mühendislik, İnşaat ve Enerji',
  description: 'Mühendislik, İnşaat ve Enerjide 30+ Yıllık Tecrübe. Güneş enerjisi santralleri, anahtar teslim inşaat projeleri ve enerji çözümleri.',
  keywords: 'Halef Grup Yapı, inşaat, mühendislik, enerji, GES, güneş enerjisi, anahtar teslim proje, Bursa',
  author: 'Halef Grup Yapı',
  openGraph: {
    title: 'Halef Grup Yapı | Geleceği İnşa Ediyoruz',
    description: 'Mühendislik, İnşaat ve Enerjide 30+ Yıllık Tecrübe',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="halef-theme"
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
