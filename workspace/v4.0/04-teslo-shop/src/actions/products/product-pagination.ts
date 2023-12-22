'use server';

import prisma from '@/lib/prisma';

export const getPaginatedProductsWithImages = async () => {

    try {

        const products = await prisma.product.findMany({
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        });


    } catch (error) {

    }



}