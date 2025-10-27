import { getAllStates } from '@/app/lib/location.service';
import { NextResponse } from 'next/server';

const ALLOWED_ORIGINS = [
  'http://localhost:4200',
  'https://paginator-six.vercel.app'
];

export async function GET() {
  try {
    const origin = req.headers.get('origin') || '';
    const isAllowed = ALLOWED_ORIGINS.includes(origin);
    const corsHeaders = {
      'Access-Control-Allow-Origin': isAllowed ? origin : '',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    };
    const states = await getAllStates();
    return NextResponse.json({
      status: 200,
      success: true,
      message: 'States obtained correctly (v2)',
      data: states,
    }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error('Error fetching states:', error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: 'Internal server error',
      data: null,
    }, { status: 500, headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    } });
  }
}

export function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin') || '';
  const isAllowed = ALLOWED_ORIGINS.includes(origin);

  return NextResponse.json({}, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': isAllowed ? origin : '',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': '*',
    }
  });
}
