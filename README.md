# 🏗️ Halef Grup Yapı - Kurumsal Web Sitesi

Modern, responsive ve SEO-optimized kurumsal web sitesi. Next.js 14 ve MongoDB ile geliştirilmiştir.

## ✨ Özellikler

- **6 Ana Sayfa:** Ana Sayfa, Hakkımızda, Hizmetler, Projeler, Referanslar, İletişim
- **İletişim Formu:** MongoDB entegrasyonu ile form yönetimi
- **Dark Mode:** Kullanıcı tercihine göre tema değişimi
- **Responsive Design:** Mobil, tablet ve desktop uyumlu
- **SEO Optimized:** Meta tags, semantic HTML, sitemap
- **Gerçek İçerik:** Firma logoları, proje fotoğrafları, referanslar
- **Modern Stack:** Next.js 14, Tailwind CSS, Shadcn UI

## 🚀 Hızlı Başlangıç

### 1. Proje Kurulumu

```bash
# Dependencies yükle
yarn install
# veya
npm install

# Environment variables oluştur
cp .env.example .env.local
# .env.local dosyasını düzenleyin
```

### 2. Geliştirme Sunucusu

```bash
# Development modda çalıştır
yarn dev
# veya
npm run dev
```

Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

### 3. Production Build

```bash
# Build
yarn build

# Production'da çalıştır
yarn start
```

## 📋 Gerekli Environment Variables

`.env.local` dosyasında:

```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=halef_grup_yapi
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
CORS_ORIGINS=*
```

## 🗂️ Proje Yapısı

```
/app
├── app/
│   ├── api/[[...path]]/route.js  # Backend API
│   ├── page.js                    # Ana sayfa
│   ├── hakkimizda/               # Hakkımızda sayfası
│   ├── hizmetler/                # Hizmetler sayfası
│   ├── projeler/                 # Projeler sayfası
│   ├── referanslar/              # Referanslar sayfası
│   ├── iletisim/                 # İletişim sayfası
│   ├── layout.js                 # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── header.jsx                # Navigation
│   ├── footer.jsx                # Footer
│   ├── ui/                       # Shadcn components
│   └── theme-provider.jsx        # Dark mode
├── lib/
│   ├── data.js                   # Site verileri
│   └── utils.js                  # Utility fonksiyonlar
└── public/                       # Static assets
```

## 🎨 Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Database:** MongoDB
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Icons:** Lucide React
- **Theme:** next-themes (Dark mode)
- **Forms:** React Hook Form
- **Toasts:** Sonner

## 📱 Sayfalar

1. **Ana Sayfa** - Hero, Hizmetler, Referans Slider, Öne Çıkan Projeler
2. **Hakkımızda** - Şirket tarihçesi, Timeline, Kurucu ekip, Değerler
3. **Hizmetler** - 4 ana kategori detaylı açıklamalar
4. **Projeler** - Filtrelenebilir proje galerisi
5. **Referanslar** - Müşteri logoları, Proje tablosu, İstatistikler
6. **İletişim** - Form, İletişim bilgileri, Google Maps

## 🔧 API Endpoints

### POST /api/contact
İletişim formu gönderimi

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string",
  "kvkkConsent": true
}
```

### GET /api/contacts
Tüm iletişim formlarını getir (Admin için)

## 🚀 Deployment

**Detaylı deployment talimatları için:** [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Hızlı Deployment Seçenekleri:

- **Vercel:** `vercel`
- **Netlify:** Git push ile otomatik
- **VPS/Dedicated:** PM2 + Nginx
- **DigitalOcean:** App Platform

## 📊 Scripts

```bash
yarn dev          # Development server
yarn build        # Production build
yarn start        # Production server
```

## 🌐 Browser Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📞 İletişim

- **Website:** [www.halefyapi.com](https://www.halefyapi.com)
- **Email:** info@halefyapi.com
- **Telefon:** 0535 504 05 10

## 📄 Lisans

© 2024 Halef Grup Yapı. Tüm hakları saklıdır.

---

**Web Tasarım:** [Emrah Göktaş](https://emrahgoktas.com/)
