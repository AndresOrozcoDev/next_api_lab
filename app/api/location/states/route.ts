import { getAllStates } from '@/app/lib/location.service';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const states = await getAllStates();
    return NextResponse.json({
      success: true,
      message: 'States obtained correctly',
      data: states,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      data: null,
    }, { status: 500 });
  }
}
