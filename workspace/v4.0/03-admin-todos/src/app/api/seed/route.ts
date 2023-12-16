import { NextResponse, NextRequest } from 'next/server';

import prisma from '@/lib/prisma';



export async function GET(request: Request) {

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: 'Priedra del alma', complete: true },
            { description: 'Priedra del poder' },
            { description: 'Priedra del tiempo' },
            { description: 'Priedra del espacio' },
            { description: 'Priedra de la realidad' }
        ]
    });

    return NextResponse.json({ message: 'Seed Executed' });
}