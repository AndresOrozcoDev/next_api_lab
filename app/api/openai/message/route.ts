import { NextRequest, NextResponse } from 'next/server';
import { sendMessageToOpenAI } from '@/app/lib/openai.service';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { message: 'Message is required' },
        { status: 400 }
      );
    }

    const result = await sendMessageToOpenAI(message);

    return NextResponse.json({ message: result });
  } catch (error: any) {
    console.error('OpenAI error:', error);

    const { requestID, code, type, param } = error || {};
    const errorMessage =
      error?.error?.message || error?.message || 'Unknown error';

    return NextResponse.json(
      {
        requestID: requestID || null,
        error: errorMessage,
        code: code || 'unknown_error',
        param: param || null,
        type: type || 'openai_error'
      },
      { status: 502 }
    );
  }
}
