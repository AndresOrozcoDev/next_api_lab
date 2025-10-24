import { getAllCities } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const stateId = searchParams.get('state') || null;

    let cities = await getAllCities();

    // Filtro por estado
    if (stateId) {
      cities = cities.filter(city => city.state_dane_code === stateId);
    }

    // Paginación
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = cities.slice(start, end);

    return NextResponse.json({
      success: true,
      message: 'Cities obtained correctly (v2)',
      data: paginated,
      pagination: {
        total: cities.length,
        page,
        pageSize,
        totalPages: Math.ceil(cities.length / pageSize),
      },
    });
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      data: null,
    }, { status: 500 });
  }
}
