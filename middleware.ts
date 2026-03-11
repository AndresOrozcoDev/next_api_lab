import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const key = req.headers.get("x-api-key");

    if (!key || key !== process.env.API_KEY) {
        return NextResponse.json({
            success: false,
            message: 'API Key missing or invalid',
            data: null,
        },
            { status: 401 }
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/v1/location/:path*", "/api/v2/location/:path*"],
};