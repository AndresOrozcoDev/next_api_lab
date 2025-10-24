import { getCitiesByStateId } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const { searchParams } = new URL(req.url);
    const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);
    const page = parseInt(searchParams.get('page') || '1', 10);

    const cities = await getCitiesByStateId(id);

    // Paginación
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = cities.slice(start, end);

    return NextResponse.json({
      success: true,
      message: `Cities for state ${id} obtained correctly (v2)`,
      data: paginated,
      pagination: {
        total: cities.length,
        page,
        pageSize,
        totalPages: Math.ceil(cities.length / pageSize),
      },
    });
  } catch (error) {
    console.error('Error fetching cities by state:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      data: null,
    }, { status: 500 });
  }
}
