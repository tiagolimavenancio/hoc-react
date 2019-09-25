import { compose } from 'recompose'

function TodoList({ todos, isLoadingTodos }) {
    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} /> )}
        </div>
    )
}

const withConditionalRenderings = compose(
    withLoadingIndicator,
    withTodosNull,
    withTodosEmpty
)

const TodoListWithConditionalRendering = withConditionalRenderings(TodoList)

export default TodoListWithConditionalRendering