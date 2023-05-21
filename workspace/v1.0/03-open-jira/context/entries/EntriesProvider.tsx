import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Pendiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum accusamus dolorem, veniam nobis nam optio odit exercitationem consequatur illo necessitatibus esse libero pariatur delectus qui cumque natus officia sint!",
            status: 'pending',
            createAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: "En progreso Praesentium eum accusamus dolorem, veniam nobis nam optio odit exercitationem consequatur illo necessitatibus esse libero pariatur delectus qui cumque natus officia sint!",
            status: 'in-progress',
            createAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: "Terminado Esse libero pariatur delectus qui cumque natus officia sint!",
            status: 'finished',
            createAt: Date.now() - 100000000
        },
    ]
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createAt: Date.now(),
            status: 'pending'
        };

        dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] - Entry-Updated', payload: entry });
    }

    return (
        <>
            <EntriesContext.Provider value={{
                ...state,
                addNewEntry,
                updateEntry
            }}>
                {children}
            </EntriesContext.Provider>
        </>
    )
}