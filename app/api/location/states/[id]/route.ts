import { getCitiesByStateId } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }
) {
  try {
    const cities = await getCitiesByStateId(params.id);

    return NextResponse.json({
      status_code: 200,
      message: 'success',
      data: cities,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status_code: 500,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
