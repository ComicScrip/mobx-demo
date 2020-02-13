
import React from 'react';
import { observer } from "mobx-react"

const Todo = observer(({ todo }) => {
    return (
        <li className={'todo-item' + (todo.finished ? ' finished' : '')} onClick={todo.toggleFinished}>{todo.title}</li>
    )
})

export default Todo