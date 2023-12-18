'use client';
import { useRouter } from 'next/navigation';
import { Todo } from '@prisma/client';

import { TodoItem } from './';
import { toggleTodo } from '../actions/todo-actions';


interface Props {
    todos?: Todo[];
}


export const TodosGrid = ({ todos = [] }: Props) => {

    const router = useRouter();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)
            }
        </div>
    );
}
