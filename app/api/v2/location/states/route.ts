import { getAllStates } from '@/app/lib/location.service';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const states = await getAllStates();
    return NextResponse.json({
      status: 200,
      success: true,
      message: 'States obtained correctly (v2)',
      data: states,
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching states:', error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: 'Internal server error',
      data: null,
    }, { status: 500 });
  }
}
