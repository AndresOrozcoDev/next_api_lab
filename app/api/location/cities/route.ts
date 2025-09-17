import { getAllCities } from '@/app/lib/location.service';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const municipalities = await getAllCities();
    return NextResponse.json({
      success: true,
      message: 'Municipalities obtained correctly',
      data: municipalities,
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching municipalities:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      data: null,
    }, { status: 500 });
  }
}
