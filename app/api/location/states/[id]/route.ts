import { getCitiesByStateId } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }
) {
  const id = params.id;
  const cities = await getCitiesByStateId(id);

  return NextResponse.json({
    status_code: 200,
    message: 'success',
    data: cities,
  });
}

