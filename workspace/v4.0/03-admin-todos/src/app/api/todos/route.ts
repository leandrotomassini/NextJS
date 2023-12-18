import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';


import prisma from '@/lib/prisma';



export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);

    const take = Number(searchParams.get('take') ?? '10');
    const skip = Number(searchParams.get('skip') ?? '0');

    if (isNaN(take) || isNaN(skip))
        return NextResponse.json(
            { message: 'Take y skip deben ser un número.' },
            { status: 400 }
        );

    const todos = await prisma.todo.findMany({
        take,
        skip
    });

    return NextResponse.json({
        todos
    });
}

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
});


export async function POST(request: Request) {

    try {
        const { complete, description } = await postSchema.validate(await request.json());

        const todo = await prisma.todo.create({ data: { complete, description } });

        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}

export async function DELETE(request: Request) {

    try {
        await prisma.todo.deleteMany({ where: { complete: true } });

        return NextResponse.json('Tareas completas borradas.');
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}