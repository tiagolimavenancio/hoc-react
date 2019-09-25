function App(props) {
    return (
        <TodoListWithConditionalRendering
             todos={props} 
             isLoadingTodos={props.isLoadingTodos} />
    )
}