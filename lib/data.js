// Halef Grup Yapı - Şirket Verileri

export const companyInfo = {
  name: 'Halef Grup Yapı',
  fullName: 'HALEF GRUP YAPI MÜHENDİSLİK İNŞAAT SANAYİ TİCARET LTD. ŞTİ.',
  slogan: 'Geleceği İnşa Ediyoruz',
  foundedYear: 1993,
  experience: '30+ Yıl',
  address: 'Ahmet Vefik Paşa OSB Mah. Uludağ Cad. No: 4 İç Kapı No:2 Kestel / BURSA',
  phone: '0535 504 05 10',
  email: 'info@halefyapi.com',
  website: 'www.halefyapi.com',
  workHours: 'Pazartesi-Cuma 08:30-18:00',
  taxOffice: 'GÖKDERE V.D.',
  taxNumber: '265 001 5978',
  tradeRegistryNumber: '34355',
  mersisNumber: '026 500 159 780 0014',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.847285746892!2d29.217774315249807!3d40.10663827939572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e5d7c8c8c8d%3A0x1c8c8c8c8c8c8c8c!2sAhmet%20Vefik%20Pa%C5%9Fa%20OSB%2C%20Uluda%C4%9F%20Cd.%20No%3A4%2C%2016450%20Kestel%2FBursa!5e0!3m2!1str!2str!4v1234567890'
};

export const founders = [
  {
    name: 'Mehmet Büyükyanbolu',
    title: 'Kurucu Ortak',
    bio: '30 yılı aşkın deneyimi ile enerji ve inşaat sektöründe öncü projeler gerçekleştirmiştir.'
  },
  {
    name: 'Hüseyin Köken',
    title: 'Kurucu Ortak',
    bio: 'Mühendislik çözümleri ve proje yönetiminde uzman, sektöre yön veren liderlerdendir.'
  }
];

export const timeline = [
  {
    year: '1993-1998',
    title: 'Doğalgaz Altyapı',
    description: 'Bursa doğalgaz altyapı ve iç tesisat projeleri ile sektöre giriş'
  },
  {
    year: '1998-2003',
    title: 'LPG Sistemleri',
    description: 'AYGAZ ile 2000+ LPG sistemi kurulumu ve projelendirme'
  },
  {
    year: '2003-2008',
    title: 'Alternatif Enerji',
    description: 'KOÇ STATOIL ile 100+ büyük NG-LNG-CNG sistemi kurulumu'
  },
  {
    year: '2013-2016',
    title: 'Anahtar Teslim İnşaat',
    description: 'AKFEN Holding ile otel, okul ve sağlık tesisleri inşaatı'
  },
  {
    year: '2021-Günümüz',
    title: 'GES Projeleri',
    description: 'ONSOLAR ile güneş enerjisi santralleri ve sürdürülebilir enerji'
  }
];

export const services = [
  {
    icon: '⚡',
    title: 'ENERJİ ÇÖZÜMLERİ',
    items: [
      'Güneş Enerjisi Santralleri (GES)',
      'Biyogaz Tesisleri',
      'Doğalgaz Çevrim Santralleri',
      'EPC (Mühendislik, Tedarik, İnşaat)'
    ]
  },
  {
    icon: '🏗️',
    title: 'İNŞAAT PROJELERİ',
    items: [
      'Anahtar Teslim Fabrika İnşaatı',
      'Otel ve Turizm Yapıları',
      'Eğitim Kurumları',
      'Hastane ve Sağlık Tesisleri',
      'Kentsel Dönüşüm Projeleri'
    ]
  },
  {
    icon: '📐',
    title: 'TAAHHÜT & DANIŞMANLIK',
    items: [
      'Enerji Yatırım Danışmanlığı',
      'Proje Yönetimi',
      'Fizibilite Analizleri',
      'Teknik Danışmanlık'
    ]
  },
  {
    icon: '🌍',
    title: 'EĞİTİM YATIRIMLARI',
    items: [
      'İngiltere Anaokulu',
      'Üniversite İşbirlikleri',
      'Eğitim Danışmanlığı',
      'Yurtdışı Eğitim Programları'
    ]
  }
];

export const values = [
  {
    icon: '🎯',
    title: 'Kalite Odaklılık',
    description: 'Her projede en yüksek kalite standartlarını hedefleriz'
  },
  {
    icon: '⏰',
    title: 'Zamanında Teslim',
    description: 'Taahhütlerimizi belirlenen sürede eksiksiz yerine getiririz'
  },
  {
    icon: '♻️',
    title: 'Sürdürülebilirlik',
    description: 'Çevre dostu ve enerji verimli çözümler üretiriz'
  },
  {
    icon: '🤝',
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizin başarısı bizim önceliğimizdir'
  }
];

export const featuredProjects = [
  {
    id: '1',
    title: 'İbis Otel Ankara',
    location: 'Ankara',
    year: '2015',
    category: 'İNŞAAT',
    type: 'Otel İnşaatı',
    client: 'Akfen Holding',
    value: '5.4M €',
    description: 'Anahtar teslim otel inşaat projesi',
    image: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/5pt77paw_ibis-hotel-ankara.jpg'
  },
  {
    id: '2',
    title: 'Novotel İstanbul',
    location: 'İstanbul Karaköy',
    year: '2016',
    category: 'İNŞAAT',
    type: 'Otel + Dükkan',
    client: 'Akfen Holding',
    value: '16.5M €',
    description: 'Karaköy merkezinde otel ve ticari alan inşaatı',
    image: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/c6obcvel_Novotel-%C4%B0stanbul.avif'
  },
  {
    id: '3',
    title: 'Adıyaman GES 3MW',
    location: 'Adıyaman',
    year: '2021',
    category: 'ENERJİ',
    type: 'Güneş Enerjisi Santrali',
    capacity: '3 MW',
    production: '5.120.000 kWh/yıl',
    description: 'Arazi tipi güneş enerjisi santrali projesi',
    image: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/f1g0opyf_ad%C4%B1yaman-ges-3mw.jpg'
  },
  {
    id: '4',
    title: 'Eskişehir Şehir Hastanesi',
    location: 'Eskişehir',
    year: '2018',
    category: 'İNŞAAT',
    type: 'Dış Mekan İnşaatları',
    client: 'Dost İnşaat',
    value: '5.3M TL',
    description: 'Şehir hastanesi peyzaj ve dış alan çalışmaları',
    image: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/twy6haxp_Eskisehir-sehir-Hastanesi.webp'
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    id: '5',
    title: 'Malatya GES 7MW',
    location: 'Malatya',
    year: '2021',
    category: 'ENERJİ',
    type: 'Güneş Enerjisi Santrali',
    capacity: '7 MW',
    production: '12.152.000 kWh/yıl',
    description: 'Büyük ölçekli arazi tipi GES projesi',
    image: 'https://images.unsplash.com/photo-1698755394237-0f820cf55f79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxzb2xhciUyMGVuZXJneSUyMHBsYW50fGVufDB8fHxibHVlfDE3NjQ4MDQ4MDl8MA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: '6',
    title: 'Sodsan Otomotiv Fabrikası',
    location: 'Bursa',
    year: '2023',
    category: 'ENDÜSTRİYEL',
    type: 'Prefabrik Fabrika',
    client: 'Sodsan Otomotiv A.Ş.',
    value: '945.000 $',
    description: 'Anahtar teslim prefabrik fabrika inşaatı',
    image: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/9hyzq5zx_Sodsan-Otomotiv-Fabrikas%C4%B1.webp'
  },
  {
    id: '7',
    title: 'Karadeniz Apartmanı',
    location: 'İstanbul Kadıköy',
    year: '2018',
    category: 'KONUT',
    type: 'Kentsel Dönüşüm',
    description: '2 bodrum + zemin + 14 kat konut projesi',
    value: '16.4M TL',
    image: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/u4nek1ro_Karadeniz-Apartman%C4%B1.jpg'
  },
  {
    id: '8',
    title: 'Hikmet Akın İlköğretim Okulu',
    location: 'Bolu',
    year: '2014',
    category: 'İNŞAAT',
    type: 'Eğitim Kurumu',
    client: 'Akfen İnşaat',
    value: '2.2M TL',
    description: '16 derslikli okul binası anahtar teslim inşaatı',
    image: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/tim8hb6t_Hikmet-Ak%C4%B1n-%C4%B0lk%C3%B6%C4%9Fretim-Okulu.webp'
  }
];

export const clients = [
  { 
    name: 'Coca-Cola', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/t9kwt61h_Coca-Cola_Logo_1.png',
    isImage: true 
  },
  { 
    name: 'Nestlé', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/au223vzm_Nestl%C3%A9_Logo_1.png',
    isImage: true 
  },
  { 
    name: 'Tofaş', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/rcad6duf_tofas.png',
    isImage: true 
  },
  { 
    name: 'Efes Pilsen', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/1wqmd9sl_efes-pilsen-seeklogo.png',
    isImage: true 
  },
  { 
    name: 'Penguen Gıda', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/0zrdje33_penguen-logos.png',
    isImage: true 
  },
  { 
    name: 'Akfen Holding', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/ga60j64f_akfen-logo.png',
    isImage: true 
  },
  { 
    name: 'Aygaz', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/0bxxokil_Aygaz-logo.png',
    isImage: true 
  },
  { 
    name: 'OnSolar', 
    logo: 'https://customer-assets.emergentagent.com/job_3f7647fb-9cf0-48e0-8403-f72a7676d84d/artifacts/vapgo7u6_onsolar.webp',
    isImage: true 
  }
];

export const references = [
  {
    client: 'Coca-Cola İçecek A.Ş.',
    project: 'LPG Sistemi ve Mekanik İşler',
    location: 'Bursa',
    year: '2007-2008',
    value: '1.68M $'
  },
  {
    client: 'Tofaş',
    project: 'Termik Santral ve Arıtma Tesisleri',
    location: 'Bursa',
    year: '2010',
    value: '5M TL'
  },
  {
    client: 'Akfen İnşaat',
    project: 'İbis Otel',
    location: 'Ankara',
    year: '2015',
    value: '6.5M $'
  },
  {
    client: 'Akfen İnşaat',
    project: 'Novotel Otel + Dükkan',
    location: 'İstanbul',
    year: '2016',
    value: '18M $'
  },
  {
    client: 'Özel Kütahya Kent Hastanesi',
    project: 'Mekanik Tesisat İşleri',
    location: 'Kütahya',
    year: '2010',
    value: '698K $'
  },
  {
    client: 'Anadolu Efes Pilsen A.Ş.',
    project: 'Proses Biyogaz',
    location: 'Ankara',
    year: '2020',
    value: '4.7M $'
  },
  {
    client: 'Dost İnşaat',
    project: 'Eskişehir Şehir Hastanesi Peyzaj',
    location: 'Eskişehir',
    year: '2018',
    value: '1.1M $'
  },
  {
    client: 'Sodsan Otomotiv A.Ş.',
    project: 'Prefabrik Fabrika İnşaatı',
    location: 'Bursa',
    year: '2023',
    value: '945K $'
  }
];
