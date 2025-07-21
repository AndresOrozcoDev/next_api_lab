import { getAllStates } from '@/app/lib/location.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest) {
  try {
    const states = await getAllStates();
    return NextResponse.json({
      status_code: 200,
      message: 'success',
      data: states,
    });
  } catch (error) {
    console.error('Error fetching states:', error);
    return NextResponse.json(
      { status_code: 500, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
