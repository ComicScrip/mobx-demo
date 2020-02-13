import { action, observable } from "mobx"

class Todo {
    id = Math.random()
    @observable title = ''
    @observable finished = false

    constructor(title) {
        this.title = title
    }

    @action.bound
    toggleFinished() {
        this.finished = !this.finished
    }
}

class TodoStore {
    @observable todos = []

    @action.bound
    createTodo(title) {
        this.todos.push(new Todo(title))
    }
}

export default new TodoStore()