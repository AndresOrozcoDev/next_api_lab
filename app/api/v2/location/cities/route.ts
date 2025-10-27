import { getCitiesPaginated } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGINS = [
  'http://localhost:4200',
  'https://paginator-six.vercel.app'
];

export async function GET(req: NextRequest) {
  try {
    const origin = req.headers.get('origin') || '';
    const isAllowed = ALLOWED_ORIGINS.includes(origin);
    const corsHeaders = {
      'Access-Control-Allow-Origin': isAllowed ? origin : '',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    };
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get('page')) || 1;
    const pageSize = Number(searchParams.get('pageSize')) || 20;
    const stateId = searchParams.get('state') || undefined;

    // Validación básica
    if (page < 1 || pageSize < 1) {
      return NextResponse.json(
        {
          status: 400,
          message: 'Parámetros de paginación inválidos',
          totalRecords: 0,
          data: [],
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const { cities, total, totalPages } = await getCitiesPaginated({
      page,
      pageSize,
      stateId,
    });

    return NextResponse.json(
      {
        status: 200,
        message: 'Respuesta exitosa obteniendo las ciudades',
        totalRecords: cities.length,
        data: cities,
        pagination: {
          total,
          totalPages,
          currentPage: page,
          pageSize,
        },
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Error obteniendo ciudades:', error);
    return NextResponse.json(
      {
        status: 500,
        message: 'Error interno del servidor',
        totalRecords: 0,
        data: [],
      },
      { status: 500, headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,OPTIONS',
          'Access-Control-Allow-Headers': '*'
        } } }
    );
  }
}
