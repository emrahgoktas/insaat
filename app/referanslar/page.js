'use client';

import { Building, MapPin, Calendar, DollarSign } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { references, clients } from '@/lib/data';

export default function ReferencesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Referanslarımız</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Türkiye'nin önde gelen şirketleriyle gerçekleştirdiğimiz projeler
          </p>
        </div>
      </section>

      {/* Müşteri Logosu Kartları */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            İş Ortaklarımız
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[140px]">
                  {client.isImage ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-16 w-auto mb-2 object-contain"
                    />
                  ) : (
                    <div className="text-4xl mb-2">{client.logo}</div>
                  )}
                  <p className="text-xs font-semibold text-foreground">{client.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referans Tablosu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Proje Referansları
          </h2>

          {/* Desktop Tablo */}
          <div className="hidden md:block">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                      <TableHead className="text-primary-foreground font-bold">Müşteri</TableHead>
                      <TableHead className="text-primary-foreground font-bold">Proje</TableHead>
                      <TableHead className="text-primary-foreground font-bold">Lokasyon</TableHead>
                      <TableHead className="text-primary-foreground font-bold">Yıl</TableHead>
                      <TableHead className="text-primary-foreground font-bold text-right">Bedel</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {references.map((ref, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-semibold text-foreground">{ref.client}</TableCell>
                        <TableCell className="text-muted-foreground">{ref.project}</TableCell>
                        <TableCell className="text-muted-foreground">{ref.location}</TableCell>
                        <TableCell className="text-muted-foreground">{ref.year}</TableCell>
                        <TableCell className="text-right font-semibold text-secondary">
                          {ref.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Kartlar */}
          <div className="md:hidden space-y-4">
            {references.map((ref, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{ref.client}</h3>
                      <p className="text-sm text-muted-foreground">{ref.project}</p>
                    </div>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                      {ref.value}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {ref.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {ref.year}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <p className="text-primary-foreground/80">Tamamlanan Proje</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🏭</div>
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <p className="text-primary-foreground/80">Mutlu Müşteri</p>
            </div>
            <div>
              <div className="text-5xl mb-4">☀️</div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-primary-foreground/80">GES Projesi</p>
            </div>
            <div>
              <DollarSign className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">200M+</div>
              <p className="text-primary-foreground/80">Toplam Proje Değeri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektörler */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Faaliyet Gösterdiğimiz Sektörler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '🥤', name: 'Gıda & İçecek' },
              { icon: '🚗', name: 'Otomotiv' },
              { icon: '✨', name: 'Enerji' },
              { icon: '🏨', name: 'Sağlık' },
              { icon: '🏨', name: 'Eğitim' },
              { icon: '🏨', name: 'Turizm' },
            ].map((sector, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-2">{sector.icon}</div>
                  <p className="text-sm font-semibold text-foreground">{sector.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
