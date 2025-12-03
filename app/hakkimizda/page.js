'use client';

import { Users, Target, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { companyInfo, founders, timeline, values } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Hakkımızda</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {companyInfo.foundedYear} yılından bu yana mühendislik, inşaat ve enerji sektörlerinde
            öncü projeler gerçekleştiriyoruz
          </p>
        </div>
      </section>

      {/* Şirket Hikayesi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Şirket Tarihçemiz</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Halef Grup Yapı, 1993 yılında enerji sektöründe faaliyetine başlamış, zamanla
              mühendislik çözümleri ve katma değerli işlere yönelmiş, en son olarak da anahtar
              teslim inşaat projeleri üretimine odaklanmıştır. 30 yılı aşkın deneyimimizle,
              sektörde güvenilir ve yenilikçi bir çözüm ortağı olarak konumlanmışızdır.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Coca-Cola, Tofaş, Nestlé, Efes Pilsen gibi Türkiye'nin önde gelen şirketleriyle
              gerçekleştirdiğimiz projeler, kalite ve mükemmellik anlayışımızın kanıtıdır.
              Sürdürülebilir enerji çözümlerinden anahtar teslim inşaat projelerine kadar geniş
              bir yelpazede hizmet sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Kilometre Taşlarımız</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20 pb-12 last:pb-0">
                  {/* Dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-secondary border-4 border-background"></div>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-semibold text-secondary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kurucu Ekip */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Kurucu Ortaklarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{founder.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{founder.title}</p>
                  <p className="text-muted-foreground">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-primary text-primary-foreground hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
                <p className="leading-relaxed text-primary-foreground/90">
                  Türkiye'de ve dünyada enerji, inşaat ve mühendislik alanlarında sektöre yön veren,
                  sürdürülebilir ve yenilikçi projelerle tanınan bir lider olmak.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
                <p className="leading-relaxed">
                  Müşterilerimize en yüksek kalitede, zamanında ve bütçe dostu çözümler sunarak,
                  uzun vadeli iş ortaklıkları kurmak ve topluma değer katmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
