'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Building2, Zap, FileCheck, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { companyInfo, services, clients, featuredProjects } from '@/lib/data';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1650901161049-5a508b78388d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZ3xlbnwwfHx8Ymx1ZXwxNzY0ODA0ODA1fDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {companyInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Mühendislik, İnşaat ve Enerjide {companyInfo.experience} Tecrübe
          </p>
          <p className="text-lg md:text-xl text-secondary font-semibold mb-8">
            {companyInfo.slogan}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              <Link href="/projeler">
                Projelerimiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 border-2 border-white">
              <Link href="/iletisim">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hizmet Özeti */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Hizmetlerimiz
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enerji, inşaat ve mühendislik alanlarında kapsamlı çözümler sunuyoruz
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className="mt-4 p-0 text-primary">
                    <Link href="/hizmetler">
                      Detaylı Bilgi
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referans Slider */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Değerli Referanslarımız
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-8 overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-0 z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex items-center gap-8">
                {[-1, 0, 1].map((offset) => {
                  const index = (currentSlide + offset + clients.length) % clients.length;
                  const client = clients[index];
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        offset === 0 ? 'scale-110 opacity-100' : 'scale-90 opacity-50'
                      }`}
                    >
                      <Card className="w-48 h-32 flex items-center justify-center">
                        <CardContent className="p-6 text-center">
                          {client.isImage ? (
                            <img 
                              src={client.logo} 
                              alt={client.name}
                              className="h-16 w-auto mx-auto mb-2 object-contain"
                            />
                          ) : (
                            <div className="text-5xl mb-2">{client.logo}</div>
                          )}
                          <p className="text-sm font-semibold text-foreground">{client.name}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-0 z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proje Öne Çıkanlar */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Öne Çıkan Projelerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Yılların deneyimi ile gerçekleştirdiğimiz başarılı projelerimizden örnekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-white/80">
                      📍 {project.location} • {project.year}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <p className="text-muted-foreground">Proje Tipi</p>
                      <p className="font-semibold text-foreground">{project.type}</p>
                    </div>
                    {project.value && (
                      <div className="text-sm text-right">
                        <p className="text-muted-foreground">Bedel</p>
                        <p className="font-semibold text-secondary">{project.value}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/projeler">
                Tüm Projeleri Görüntüle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">30+</div>
              <p className="text-primary-foreground/80">Yıllık Tecrübe</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-primary-foreground/80">Tamamlanan Proje</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">100+</div>
              <p className="text-primary-foreground/80">Mutlu Müşteri</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <p className="text-primary-foreground/80">GES Projesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Projenizi Hayata Geçirelim</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz, projeniz için en uygun çözümleri sunmaya hazır
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
            <Link href="/iletisim">
              Ücretsiz Danışmanlık Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
