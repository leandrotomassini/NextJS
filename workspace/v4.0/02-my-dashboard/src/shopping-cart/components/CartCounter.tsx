'use client';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';

interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json());
    return data;
}

export const CartCounter = ({ value = 0 }: Props) => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch(initCounterState(count)))
    }, [dispatch]);


    return (
        <>
            <span className="text-9xl">
                {count}
            </span>

            <div className="flex">

                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch(addOne())}
                >
                    +1
                </button>

                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch(substractOne())}
                >
                    -1
                </button>

            </div>
        </>
    );
}
