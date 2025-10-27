import { getCitiesPaginated } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
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
        { status: 400 }
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
      { status: 200 }
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
      { status: 500 }
    );
  }
}
