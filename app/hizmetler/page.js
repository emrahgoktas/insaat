"use client";

import { Zap, Building2, FileCheck, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

const serviceDetails = [
  {
    icon: Zap,
    title: "ENERJİ ÇÖZÜMLERİ",
    description: "Sürdürülebilir enerji sistemleri ve yenilenebilir enerji projeleri",
    image: "https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzb2xhciUyMGVuZXJneSUyMHBsYW50fGVufDB8fHxibHVlfDE3NjQ4MDQ4MDl8MA&ixlib=rb-4.1.0&q=85",
    items: [
      {
        name: "Güneş Enerjisi Santralleri (GES)",
        description: "Arazi ve çatı tipi güneş enerjisi sistemleri, EPC hizmetleri"
      },
      {
        name: "Biyogaz Tesisleri",
        description: "Tarımsal ve endüstriyel atıklardan enerji üretimi çözümleri"
      },
      {
        name: "Doğalgaz Çevrim Santralleri",
        description: "Yüksek verimli kombine çevrim enerji üretim tesisleri"
      },
      {
        name: "EPC Hizmetleri",
        description: "Mühendislik, tedarik ve inşaat projelerinde anahtar teslim çözümler"
      }
    ]
  },
  {
    icon: Building2,
    title: "İNŞAAT PROJELERİ",
    description: "Anahtar teslim inşaat projeleri ve mühendislik çözümleri",
    image: "https://images.unsplash.com/photo-1655975719898-8f3432eed322?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZ3xlbnwwfHx8Ymx1ZXwxNzY0ODA0ODA1fDA&ixlib=rb-4.1.0&q=85",
    items: [
      {
        name: "Anahtar Teslim Fabrika İnşaatı",
        description: "Endüstriyel tesislerin tam kapsamlı inşaatı ve ekipman montajı"
      },
      {
        name: "Otel ve Turizm Yapıları",
        description: "Lüks otel ve turistik tesislerin modern mimari ile inşası"
      },
      {
        name: "Eğitim Kurumları",
        description: "Okul, kampüs ve eğitim tesisleri yapımı"
      },
      {
        name: "Hastane ve Sağlık Tesisleri",
        description: "Modern sağlık tesisleri ve mekanik tesisat uygulamaları"
      },
      {
        name: "Kentsel Dönüşüm Projeleri",
        description: "Konut ve ticari alan dönüşüm projeleri"
      }
    ]
  },
  {
    icon: FileCheck,
    title: "TAAHHÜT & DANIŞMANLIK",
    description: "Proje yönetimi ve teknik danışmanlık hizmetleri",
    image: "https://images.unsplash.com/photo-1705147219076-64e705d05a62?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MHx8fGJsdWV8MTc2NDgwNDgxOXww&ixlib=rb-4.1.0&q=85",
    items: [
      {
        name: "Enerji Yatırım Danışmanlığı",
        description: "Yenilenebilir enerji yatırımları için fizibilite ve danışmanlık"
      },
      {
        name: "Proje Yönetimi",
        description: "Büyük ölçekli projelerde profesyonel yönetim hizmetleri"
      },
      {
        name: "Fizibilite Analizleri",
        description: "Teknik ve ekonomik fizibilite raporları hazırlama"
      },
      {
        name: "Teknik Danışmanlık",
        description: "Mühendislik ve inşaat konularında uzman danışmanlık"
      }
    ]
  },
  {
    icon: GraduationCap,
    title: "EĞİTİM YATIRIMLARI",
    description: "Eğitim sektöründe yatırım ve danışmanlık",
    image: "https://images.unsplash.com/photo-1603294278610-b5bd0506303e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBidWlsZGluZ3xlbnwwfHx8Ymx1ZXwxNzY0ODA0ODE0fDA&ixlib=rb-4.1.0&q=85",
    items: [
      {
        name: "İngiltere Anaokulu",
        description: "Londrada faaliyet gösteren anaokulu yatırımı"
      },
      {
        name: "Üniversite İşbirlikleri",
        description: "Uluslararası üniversitelerle eğitim ortaklıkları"
      },
      {
        name: "Eğitim Danışmanlığı",
        description: "Yurtdışı eğitim ve öğrenci yerleştirme danışmanlığı"
      },
      {
        name: "Eğitim Tesisi Yatırımları",
        description: "Eğitim kurumları için yatırım ve geliştirme projeleri"
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Hizmetlerimiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enerji, inşaat ve mühendislik alanlarında geniş kapsamlı çözümler sunuyoruz
          </p>
        </div>
      </section>

      {/* Hizmet Detayları */}
      {serviceDetails.map((service, index) => {
        const Icon = service.icon;
        return (
          <section
            key={index}
            className={`py-16 ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image - Left on even, Right on odd */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className="rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-4">
                    {service.items.map((item, idx) => (
                      <Card key={idx} className="border-l-4 border-l-secondary">
                        <CardContent className="p-4">
                          <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Projeniz İçin Çözüm Arıyorsanız</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun hizmeti sunmak için hazır
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
            <Link href="/iletisim">
              Hemen İletişime Geçin
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
