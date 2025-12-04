'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Projeler', href: '/projeler' },
  { name: 'Referanslar', href: '/referanslar' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Şirket Bilgisi */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/065cwz7x_logo.png"
                alt="Halef Grup Yapı"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">{companyInfo.name}</h3>
                <p className="text-xs text-primary-foreground/80">{companyInfo.slogan}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {companyInfo.foundedYear} yılından beri mühendislik, inşaat ve enerji sektöründe
              öncü projeler gerçekleştiriyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Enerji Çözümleri</li>
              <li>İnşaat Projeleri</li>
              <li>Taahhüt & Danışmanlık</li>
              <li>Eğitim Yatırımları</li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-bold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{companyInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{companyInfo.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">{companyInfo.workHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
