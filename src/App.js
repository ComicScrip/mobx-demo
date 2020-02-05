import React from 'react';
import './App.css';
import { observer } from "mobx-react"
import TodoStore from './TodoStore';

@observer
class TodoListView extends React.Component {
    render() {
      const {todos} = this.props.todoList

        return (
            <div>
              <br/>
                Tasks left: {this.props.todoList.unfinishedTodoCount}
              <ul>
                  {todos.map(todo => (
                      <TodoView todo={todo} key={todo.id} />
                  ))}
              </ul>
            </div>
        )
    }
}

const TodoView = observer(({ todo }) => (
    <li onClick={todo.toggleFinished} className={'todo-item ' + (todo.finished ? 'finished' : '')}>
        {todo.title}
    </li>
))

function App() {
  return (
    <div className="App">
      <TodoListView todoList={TodoStore} />
    </div>
  );
}

export default App;
