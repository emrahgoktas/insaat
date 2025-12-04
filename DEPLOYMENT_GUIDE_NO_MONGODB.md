# 🚀 Halef Grup Yapı - Kolay Deployment Kılavuzu (MongoDB YOK)

Bu proje **MongoDB gerektirmez**! Sadece Resend email servisi kullanılır.

---

## 📋 Gereksinimler

- **Node.js:** v18.0.0 veya üzeri
- **Yarn veya npm:** Paket yöneticisi
- **Resend API Key:** Ücretsiz (https://resend.com)
- **Domain:** Kendi domain adresiniz (opsiyonel)

---

## ⚡ Hızlı Başlangıç (5 Dakika)

### 1. Projeyi İndirin

```bash
git clone <repository-url>
cd halef-grup-yapi
```

### 2. Dependencies Yükleyin

```bash
yarn install
# veya
npm install
```

### 3. Resend API Key Alın

1. https://resend.com adresine gidin
2. Ücretsiz hesap oluşturun
3. API Keys bölümünden yeni key oluşturun
4. Key'i kopyalayın (re_... ile başlar)

### 4. Environment Variables

`.env.local` dosyası oluşturun:

```bash
# .env.local
RESEND_API_KEY=re_YourApiKeyHere
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
CORS_ORIGINS=*
```

### 5. Build & Çalıştır

```bash
# Build
yarn build

# Production'da çalıştır
yarn start
```

**Tamamlandı!** Site http://localhost:3000 adresinde çalışıyor 🎉

---

## 🌐 Cloud Deployment Seçenekleri

### Vercel (En Kolay - Önerilen) ⭐

```bash
# Vercel CLI yükle
npm i -g vercel

# Deploy et
vercel

# Environment variable ekle
vercel env add RESEND_API_KEY
# Resend API key'inizi yapıştırın

# Production deploy
vercel --prod
```

**Avantajlar:**
- ✅ Ücretsiz SSL
- ✅ Global CDN
- ✅ Git push ile otomatik deploy
- ✅ 5 dakikada canlı

---

### Netlify

1. Netlify'a giriş yapın
2. "New site from Git" tıklayın
3. GitHub repository seçin
4. Build settings:
   - **Build command:** `yarn build`
   - **Publish directory:** `.next`
5. Environment variables:
   - `RESEND_API_KEY`: Resend API key'iniz
6. Deploy edin

---

### DigitalOcean App Platform

1. App Platform'a gidin
2. "Create App" tıklayın
3. GitHub repository seçin
4. Build settings otomatik algılanır
5. Environment variables ekleyin:
   - `RESEND_API_KEY`: Resend API key'iniz
6. Deploy edin

**Maliyet:** $5/ay ile başlar

---

### Railway.app

```bash
# Railway CLI yükle
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
```

Environment variables Railway dashboard'dan ekleyin.

---

## 🖥️ VPS/Dedicated Server Deployment

### Gereksinimler
- Ubuntu 20.04+ veya Debian
- Node.js 18+
- Nginx (opsiyonel)

### Kurulum

```bash
# Node.js yükle
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# PM2 yükle (Process manager)
sudo npm install -g pm2

# Projeyi yükle
git clone <repository-url>
cd halef-grup-yapi

# Dependencies
yarn install

# Environment variables
nano .env.local
# Resend API key ekleyin

# Build
yarn build

# PM2 ile başlat
pm2 start yarn --name "halef-yapi" -- start
pm2 startup
pm2 save
```

### Nginx Reverse Proxy (80/443 port için)

```nginx
# /etc/nginx/sites-available/halefyapi.com
server {
    listen 80;
    server_name halefyapi.com www.halefyapi.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Aktifleştir
sudo ln -s /etc/nginx/sites-available/halefyapi.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# SSL (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d halefyapi.com -d www.halefyapi.com
```

---

## 📧 Email Ayarları

### Form Nasıl Çalışır?

1. Kullanıcı formu doldurur
2. Next.js API Route form verilerini alır
3. Resend ile email gönderir
4. Email **info@halefyapi.com** adresine ulaşır

### Email Önizleme

Gönderilen email şu bilgileri içerir:
- Ad Soyad
- E-posta
- Telefon
- Konu
- Mesaj
- Tarih/saat

### Resend Limitleri

**Ücretsiz Plan:**
- 3,000 email/ay
- 100 email/gün
- Çoğu site için yeterli

**Pro Plan ($20/ay):**
- 50,000 email/ay
- Sınırsız günlük gönderim

---

## 🔧 Troubleshooting

### Email Gelmiyor

1. **Resend API Key Doğru mu?**
   ```bash
   # .env.local kontrol
   cat .env.local
   ```

2. **Resend Dashboard Kontrol:**
   - https://resend.com/emails
   - Gönderilen emailleri görün
   - Delivery status kontrol edin

3. **Spam Klasörü:**
   - info@halefyapi.com spam'e bakın
   - Resend'i güvenilir gönderici olarak ekleyin

### Build Hatası

```bash
# Temizle ve tekrar dene
rm -rf .next node_modules
yarn install
yarn build
```

### Port Zaten Kullanılıyor

```bash
# Port 3000'i kullanan process'i bul
lsof -i :3000

# Process'i öldür
kill -9 <PID>
```

---

## 🎨 Custom Domain Email (İsteğe Bağlı)

Resend'de kendi domain'inizden email göndermek için:

1. Resend Dashboard → Domains
2. Domain ekleyin (halefyapi.com)
3. DNS kayıtlarını ekleyin:
   - TXT record (SPF)
   - CNAME record (DKIM)
4. Domain onaylandıktan sonra:

```javascript
// API route'da değiştir
from: 'İletişim Formu <noreply@halefyapi.com>'
```

---

## 📊 Deployment Checklist

- [ ] Node.js kurulu
- [ ] Resend hesabı oluşturuldu
- [ ] Resend API key alındı
- [ ] `yarn install` çalıştırıldı
- [ ] `.env.local` oluşturuldu
- [ ] `yarn build` başarılı
- [ ] `yarn start` çalışıyor
- [ ] Form test edildi
- [ ] Email geldi ✅

---

## 🎯 Özet

**MongoDB Yok! Sadece:**
1. ✅ Resend API key (ücretsiz)
2. ✅ `yarn build`
3. ✅ `yarn start`
4. ✅ Done!

**Deployment süresi:** 5-10 dakika
**Maliyet:** Ücretsiz (3000 email/ay)
**Maintenance:** Sıfır

---

## 📞 Destek

Form çalışmıyor mu?
1. Resend dashboard'a bakın
2. Browser console loglarını kontrol edin
3. API response'u kontrol edin:
   ```bash
   curl -X POST https://yourdomain.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","message":"Test","kvkkConsent":true}'
   ```

---

## 🎉 Başarılı!

Siteniz artık canlı ve formlar **info@halefyapi.com** adresine email gönderiyor! 🚀

**Önemli:** Resend ücretsiz planda `onboarding@resend.dev` domain'i kullanır. 
Custom domain için domain verify gerekir (opsiyonel).
