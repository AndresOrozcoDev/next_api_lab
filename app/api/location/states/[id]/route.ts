import { getCitiesByStateId } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  try {
    const id = (await params).id
    const cities = await getCitiesByStateId(id);

    return NextResponse.json({
      success: true,
      message: 'Cities by states obtained correctly',
      data: cities,
    }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      data: null,
    }, { status: 500 });
  }
}
