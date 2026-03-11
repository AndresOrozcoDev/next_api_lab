import { getCitiesPaginated } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGINS = [
  'http://localhost:4200',
  'https://paginator-six.vercel.app'
];

function getCorsHeaders(origin: string) {
  const isAllowed = ALLOWED_ORIGINS.includes(origin);
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
  };
}

export function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const corsHeaders = getCorsHeaders(origin);

  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET(req: NextRequest) {
  try {
    const origin = req.headers.get('origin') || '';
    const corsHeaders = getCorsHeaders(origin);
    
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get('page')) || 1;
    const pageSize = Number(searchParams.get('pageSize')) || 20;
    const stateId = searchParams.get('state') || undefined;

    // Validación básica
    if (page < 1 || pageSize < 1) {
      return NextResponse.json(
        {
          status: 400,
          success: false,
          message: 'Invalid paging parameters',
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
        success: true,
        message: 'Successfully retrieved cities',
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
    console.error('Error retrieving cities:', error);
    const origin = req.headers.get('origin') || '';
    const corsHeaders = getCorsHeaders(origin);

    return NextResponse.json(
      {
        status: 500,
        success: false,
        message: 'Internal server error',
        totalRecords: 0,
        data: [],
      },
      { status: 500, headers: corsHeaders }
    );
}
}
