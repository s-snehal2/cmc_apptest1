import { db } from "@/db";
import { profile } from "@/db/schema/user/profile";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const key = request.headers.get("api-key");
        const validkey = process.env.NEXT_API_KEY;
        const isAuthroized = key && validkey && key === validkey;
        if (!isAuthroized) {
            return NextResponse.json({
                success: false,
                message: "UNAUTHARIZED USER",
                statuscode: 400,
            })
        }
        const data = await db.select().from(profile)
        return NextResponse.json({
            success: true,
            data
        })
    } catch {
        return NextResponse.json({
            success: false,
            message: "INTERNAL ERROR ",
            statuscode: 500
        })

    }

}