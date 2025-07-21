import { getAllCities } from '@/app/lib/location.service';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const municipalities = await getAllCities();
    return NextResponse.json({
      status_code: 200,
      message: 'success',
      data: municipalities,
    });
  } catch (error) {
    console.error('Error fetching municipalities:', error);
    return NextResponse.json(
      { status_code: 500, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
