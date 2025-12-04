import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// GET handler
export async function GET(request) {
  try {
    // Varsayılan endpoint
    return NextResponse.json(
      { success: true, message: 'Halef Grup Yapı API - Email gönderimi aktif' },
      { headers: corsHeaders }
    );

  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

// POST handler
export async function POST(request) {
  try {
    const { pathname } = new URL(request.url);
    const pathParts = pathname.split('/').filter(Boolean);
    const endpoint = pathParts[1];

    const body = await request.json();

    // İletişim formu gönderimi
    if (endpoint === 'contact') {
      const { name, email, phone, subject, message, kvkkConsent } = body;

      // Validasyon
      if (!name || !email || !message || !kvkkConsent) {
        return NextResponse.json(
          { success: false, error: 'Lütfen tüm zorunlu alanları doldurun' },
          { status: 400, headers: corsHeaders }
        );
      }

      // Email format kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: 'Geçerli bir e-posta adresi girin' },
          { status: 400, headers: corsHeaders }
        );
      }

      try {
        // Resend ile email gönder
        await resend.emails.send({
          from: 'Halef Grup Yapı <onboarding@resend.dev>',
          to: ['info@halefyapi.com'],
          subject: `Yeni İletişim Formu: ${subject || 'Genel'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A2463; border-bottom: 3px solid #D4AF37; padding-bottom: 10px;">
                Yeni İletişim Formu Mesajı
              </h2>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>Ad Soyad:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>E-posta:</strong> ${email}</p>
                <p style="margin: 10px 0;"><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
                <p style="margin: 10px 0;"><strong>Konu:</strong> ${subject || 'Genel'}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #0A2463;">Mesaj:</h3>
                <p style="background-color: #fff; padding: 15px; border-left: 4px solid #D4AF37; border-radius: 4px;">
                  ${message}
                </p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>Bu mesaj www.halefyapi.com web sitesindeki iletişim formundan gönderilmiştir.</p>
                <p>Tarih: ${new Date().toLocaleString('tr-TR')}</p>
              </div>
            </div>
          `,
        });

        return NextResponse.json(
          { 
            success: true, 
            message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
          },
          { headers: corsHeaders }
        );

      } catch (emailError) {
        console.error('Email gönderim hatası:', emailError);
        return NextResponse.json(
          { success: false, error: 'Email gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
          { status: 500, headers: corsHeaders }
        );
      }
    }

    return NextResponse.json(
      { success: false, error: 'Geçersiz endpoint' },
      { status: 404, headers: corsHeaders }
    );

  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}
