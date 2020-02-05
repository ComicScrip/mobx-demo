import { observable, computed, action } from "mobx"

class Todo {
    id = Math.random()
    @observable title = ""
    @observable finished = false

    @action.bound
    toggleFinished() {
        this.finished = !this.finished
    }
}

class TodoStore {
    @observable todos = []

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    @action.bound
    createTodo(title) {
        const newTodo = new Todo()
        newTodo.title = title
        this.todos.push()
    }
}

export default new TodoStore()

