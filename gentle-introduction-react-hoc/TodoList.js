function TodoList({ todos, isLoadingTodos }) {
    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} /> )}
        </div>
    )
}

const TodoListOne = withTodosEmpty(TodoList)
const TodoListTwo = withTodosNull(TodoListOne)
const TodoListThree = withLoadingIndicator(TodoListTwo)

// OR

const TodoListWithConditionalRendering = withLoadingIndicator(withTodosNull(withTodosEmpty(TodoList)))

export default TodoListThree // TodoListWithConditionalRendering