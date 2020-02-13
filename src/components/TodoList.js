import React from 'react';
import { observer } from "mobx-react"
import Todo from './TodoItem'

@observer
class TodoList extends React.Component {
  render() {
    const {todos} = this.props.todoList
    return (
      <div>
        <ul>
          {todos.map(t => <Todo todo={t} key={t.id} />)}
        </ul>
      </div>
    )
  }
}

export default TodoList
