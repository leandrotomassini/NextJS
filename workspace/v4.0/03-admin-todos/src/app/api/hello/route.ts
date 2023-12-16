import { NextResponse } from 'next/server';



export async function GET(request: Request) {



    return NextResponse.json({
        hola: 'Mundo',
        method: 'GET'
    });
}


export async function POST(request: Request) {



    return NextResponse.json({
        hola: 'Mundo',
        method: 'POST'
    });
}