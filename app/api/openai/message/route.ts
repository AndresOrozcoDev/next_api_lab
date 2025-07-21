import { NextRequest, NextResponse } from 'next/server';
import { sendMessageToOpenAI } from '@/app/lib/openai.service';

export async function POST(_req: NextRequest) {
  try {
    const { message } = await _req.json();

    if (!message) {
      return NextResponse.json(
        { message: 'Message is required' },
        { status: 400 }
      );
    }

    const result = await sendMessageToOpenAI(message);

    return NextResponse.json({ message: result });
  } catch (error: unknown) {
    console.error('OpenAI error:', error);

    let errorMessage = 'Unknown error';

    if (
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      typeof error.message === 'string'
    ) {
      errorMessage = error.message;
    }

    const code = 'unknown_error';
    const param = null;
    const requestID = null;
    const type = 'openai_error';

    return NextResponse.json(
      {
        requestID,
        error: errorMessage,
        code,
        param,
        type,
      },
      { status: 502 }
    );
  }
}
