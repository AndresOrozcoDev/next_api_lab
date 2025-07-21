import { getCitiesByStateId } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  try {
    const id = (await params).id
    const cities = await getCitiesByStateId(id);

    return NextResponse.json({
      status_code: 200,
      message: 'success',
      data: cities,
    });
  } catch (error: unknown) {
    console.error('Error:', error);
    return NextResponse.json(
      {
        status_code: 500,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
