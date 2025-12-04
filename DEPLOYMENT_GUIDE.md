# 🚀 Halef Grup Yapı - Deployment Kılavuzu

Bu kılavuz, projeyi kendi sunucunuza veya hosting sağlayıcınıza yüklemeniz için gerekli adımları içerir.

---

## 📋 Gereksinimler

- **Node.js:** v18.0.0 veya üzeri
- **MongoDB:** Aktif bir MongoDB veritabanı
- **Yarn veya npm:** Paket yöneticisi
- **Domain:** Kendi domain adresiniz
- **Hosting:** VPS, Dedicated Server veya Cloud (Vercel, Netlify, DigitalOcean, AWS, vb.)

---

## 🔧 1. Projeyi İndirin

```bash
# GitHub'dan klonlayın
git clone <repository-url>
cd halef-grup-yapi

# veya ZIP olarak indirdiyseniz
unzip halef-grup-yapi.zip
cd halef-grup-yapi
```

---

## 📦 2. Dependencies Yükleyin

```bash
# Yarn kullanıyorsanız (önerilen)
yarn install

# veya npm kullanıyorsanız
npm install
```

---

## 🔐 3. Environment Variables Ayarlayın

Proje root dizininde `.env.local` dosyası oluşturun:

```bash
# .env.local
MONGO_URL=mongodb://localhost:27017
# veya MongoDB Atlas kullanıyorsanız:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net

DB_NAME=halef_grup_yapi

NEXT_PUBLIC_BASE_URL=https://yourdomain.com
CORS_ORIGINS=*
```

### MongoDB Atlas Kullanıyorsanız:

1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) hesabı oluşturun
2. Yeni bir cluster oluşturun (ücretsiz tier yeterli)
3. Database user oluşturun
4. Network Access'ten IP adresinizi ekleyin (veya 0.0.0.0/0 tüm IP'ler için)
5. Connection string'i kopyalayın ve `MONGO_URL`'e yapıştırın

---

## 🏗️ 4. Production Build Oluşturun

```bash
# Build komutu
yarn build

# veya npm ile
npm run build
```

Bu komut `.next` klasörü oluşturur ve production için optimize edilmiş dosyalar üretir.

**Build süresinde hatalar:**
- Syntax hataları varsa düzeltin
- Missing dependencies varsa yükleyin: `yarn add <package-name>`

---

## 🚀 5. Production'da Çalıştırın

### Seçenek A: Node.js Sunucusu (VPS/Dedicated Server)

```bash
# Production modda başlat
yarn start

# veya
npm run start
```

**Not:** Bu komut port 3000'de çalışır. Port değiştirmek için:
```bash
PORT=8080 yarn start
```

### Seçenek B: PM2 ile Daemonize (Önerilen)

PM2, Node.js uygulamalarını arka planda çalıştırmak için:

```bash
# PM2 yükleyin
npm install -g pm2

# Uygulamayı başlatın
pm2 start yarn --name "halef-yapi" -- start

# Sunucu yeniden başladığında otomatik başlat
pm2 startup
pm2 save

# Logları görüntüleyin
pm2 logs halef-yapi

# Uygulamayı yeniden başlatın
pm2 restart halef-yapi
```

---

## 🌐 6. Nginx Reverse Proxy (Önerilen)

Domain'inizle bağlamak için Nginx kullanın:

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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Siteyi aktifleştirin
sudo ln -s /etc/nginx/sites-available/halefyapi.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 7. SSL Sertifikası (HTTPS) - Let's Encrypt

```bash
# Certbot yükleyin
sudo apt install certbot python3-certbot-nginx

# SSL sertifikası alın (otomatik)
sudo certbot --nginx -d halefyapi.com -d www.halefyapi.com

# Otomatik yenileme test
sudo certbot renew --dry-run
```

---

## ☁️ 8. Cloud Platform Deployment

### Vercel (En Kolay)

```bash
# Vercel CLI yükleyin
npm i -g vercel

# Deploy edin
vercel

# Environment variables ekleyin
vercel env add MONGO_URL
vercel env add DB_NAME
```

### Netlify

1. Netlify dashboard'a gidin
2. "New site from Git" tıklayın
3. Repository'nizi seçin
4. Build settings:
   - **Build command:** `yarn build`
   - **Publish directory:** `.next`
5. Environment variables ekleyin

### DigitalOcean App Platform

1. App Platform'a gidin
2. "Create App" tıklayın
3. GitHub repository seçin
4. Environment variables ekleyin
5. Deploy edin

---

## 🗄️ 9. MongoDB Bağlantısı Kontrol

Deployment'tan sonra kontrol edin:

```bash
# Form test
curl -X POST https://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test","kvkkConsent":true}'

# Response:
# {"success":true,"message":"Mesajınız başarıyla gönderildi..."}
```

---

## 📊 10. Monitoring ve Maintenance

### PM2 Monitoring

```bash
# Status kontrol
pm2 status

# CPU/Memory kullanımı
pm2 monit

# Logları izle
pm2 logs --lines 100
```

### Nginx Access Logs

```bash
# Canlı log izle
tail -f /var/log/nginx/access.log

# Error logları
tail -f /var/log/nginx/error.log
```

---

## 🐛 Troubleshooting

### Build Hatası

```bash
# Node modules temizle ve yeniden yükle
rm -rf node_modules .next
yarn install
yarn build
```

### Port Zaten Kullanılıyor

```bash
# Port'u kullanan process'i bul
lsof -i :3000

# Process'i öldür
kill -9 <PID>
```

### MongoDB Bağlantı Hatası

1. MongoDB servisinin çalıştığından emin olun:
   ```bash
   sudo systemctl status mongodb
   ```

2. MongoDB Atlas kullanıyorsanız:
   - IP whitelist kontrol edin
   - Username/password doğru mu?
   - Connection string formatı: `mongodb+srv://...`

### 502 Bad Gateway (Nginx)

```bash
# Next.js çalışıyor mu?
pm2 status

# Nginx restart
sudo systemctl restart nginx
```

---

## 📈 Performance Optimizasyonu

### 1. Image Optimization

Next.js otomatik optimize eder, ancak external images için:

```javascript
// next.config.js
images: {
  domains: ['customer-assets.emergentagent.com'],
  formats: ['image/avif', 'image/webp'],
}
```

### 2. Caching Headers (Nginx)

```nginx
location /_next/static {
    expires 365d;
    add_header Cache-Control "public, immutable";
}
```

### 3. Compression (Nginx)

```nginx
gzip on;
gzip_types text/css application/javascript image/svg+xml;
gzip_min_length 1000;
```

---

## 🔄 Update / Güncelleme

```bash
# Kodu pull edin
git pull origin main

# Dependencies güncelle
yarn install

# Yeniden build
yarn build

# Uygulamayı yeniden başlat
pm2 restart halef-yapi
```

---

## 📞 Destek

Sorun yaşarsanız:

1. Logları kontrol edin: `pm2 logs`
2. Environment variables doğru mu: `.env.local`
3. MongoDB bağlantısı çalışıyor mu
4. Port açık mı: `netstat -tuln | grep 3000`

---

## ✅ Deployment Checklist

- [ ] Node.js kurulu (v18+)
- [ ] MongoDB aktif ve erişilebilir
- [ ] Dependencies yüklendi (`yarn install`)
- [ ] `.env.local` dosyası oluşturuldu
- [ ] Build başarılı (`yarn build`)
- [ ] Production'da çalışıyor (`yarn start` veya PM2)
- [ ] Nginx yapılandırıldı (opsiyonel)
- [ ] SSL sertifikası kuruldu (HTTPS)
- [ ] Domain DNS ayarları yapıldı
- [ ] Form testi yapıldı ve çalışıyor

---

## 🎉 Başarılı Deployment!

Siteniz artık canlı: **https://yourdomain.com**

İyi çalışmalar! 🚀
