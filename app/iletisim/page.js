'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { companyInfo } from '@/lib/data';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    kvkkConsent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, kvkkConsent: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          kvkkConsent: false,
        });
      } else {
        toast.error(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      toast.error('Bağlantı hatası. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">İletişim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projeniz hakkında konuşmak için bizimle iletişime geçin
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">İletişim Bilgilerimiz</h2>

              <div className="space-y-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-foreground">Adres</h3>
                      <p className="text-muted-foreground">{companyInfo.address}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-foreground">Telefon</h3>
                      <p className="text-muted-foreground">{companyInfo.phone}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-foreground">E-posta</h3>
                      <p className="text-muted-foreground">{companyInfo.email}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-foreground">Çalışma Saatleri</h3>
                      <p className="text-muted-foreground">{companyInfo.workHours}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Harita */}
              <Card className="overflow-hidden">
                <iframe
                  src={companyInfo.mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </Card>
            </div>

            {/* İletişim Formu */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Bize Ulaşın</h2>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Ad Soyad <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınızı girin"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        E-posta <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@email.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0555 123 45 67"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        Konu
                      </Label>
                      <Select onValueChange={handleSubjectChange} value={formData.subject}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Konu seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Genel">Genel Bilgi</SelectItem>
                          <SelectItem value="Enerji">Enerji Projeleri</SelectItem>
                          <SelectItem value="İnşaat">İnşaat Projeleri</SelectItem>
                          <SelectItem value="Danışmanlık">Danışmanlık</SelectItem>
                          <SelectItem value="Diğer">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Mesaj <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Mesajınızı yazın..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="kvkk"
                        checked={formData.kvkkConsent}
                        onCheckedChange={handleCheckboxChange}
                        required
                      />
                      <Label
                        htmlFor="kvkk"
                        className="text-sm text-muted-foreground cursor-pointer leading-tight"
                      >
                        Kişisel verilerimin KVKK kapsamında işlenmesini kabul ediyorum.
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-secondary hover:bg-secondary/90 text-primary"
                      size="lg"
                    >
                      {loading ? (
                        'Gönderiliyor...'
                      ) : (
                        <>
                          Mesaj Gönder
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
