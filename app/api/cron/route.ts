import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Verificar la autenticación mediante el token secreto
  if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) { 
    return new NextResponse('Unauthorized', { status: 401 });
  }
  
  // Lógica del cron job aquí
  console.log('Ejecutando tarea programada a las 10:00 AM');
  
  // Devolver respuesta exitosa
  return NextResponse.json({ ok: true });
}