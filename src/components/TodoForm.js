import React from 'react'
import { useInput } from '../hooks/input-hook';
import todoStore from '../stores/TodoStore'

export const TodoForm = () => {
    const { value, bind, reset } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        todoStore.createTodo(value)
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="todo-input" name="title" placeholder="New Todo" {...bind} />
        </form>
    )
}
