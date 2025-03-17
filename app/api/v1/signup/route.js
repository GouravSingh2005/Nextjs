import { NextResponse,NextRequest } from "next/server";

export async function POST(req){

    const data=await req.json();
    console.log(data);
    return NextResponse.json({
        message:"You have Signed up"
    })
}