'use client';

import { useState } from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { allProjects } from '@/lib/data';

const categories = ['TÜMÜ', 'ENERJİ', 'İNŞAAT', 'ENDÜSTRİYEL', 'KONUT'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('TÜMÜ');

  const filteredProjects =
    activeFilter === 'TÜMÜ'
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Projelerimiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Yılların deneyimi ile gerçekleştirdiğimiz başarılı projeleri keşfedin
          </p>
        </div>
      </section>

      {/* Filtreleme */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? 'default' : 'outline'}
                className={`${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border-border hover:bg-muted'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Proje Listesi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="h-4 w-4 mr-2 text-primary" />
                      {project.type}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    {project.client && (
                      <div>
                        <p className="text-xs text-muted-foreground">Müşteri</p>
                        <p className="text-sm font-semibold text-foreground">{project.client}</p>
                      </div>
                    )}
                    {project.value && (
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Bedel</p>
                        <p className="text-sm font-semibold text-secondary">{project.value}</p>
                      </div>
                    )}
                    {project.capacity && (
                      <div>
                        <p className="text-xs text-muted-foreground">Kapasite</p>
                        <p className="text-sm font-semibold text-foreground">{project.capacity}</p>
                      </div>
                    )}
                    {project.production && (
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Üretim</p>
                        <p className="text-sm font-semibold text-foreground">{project.production}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Bu kategoride henüz proje bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
