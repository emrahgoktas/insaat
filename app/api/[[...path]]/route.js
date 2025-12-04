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

    const client = await connectToDatabase();
    const db = client.db(DB_NAME);

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

      const contactData = {
        id: uuidv4(),
        name,
        email,
        phone: phone || '',
        subject: subject || 'Genel',
        message,
        kvkkConsent,
        status: 'new',
        createdAt: new Date().toISOString(),
      };

      await db.collection('contacts').insertOne(contactData);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
          data: { id: contactData.id }
        },
        { headers: corsHeaders }
      );
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
