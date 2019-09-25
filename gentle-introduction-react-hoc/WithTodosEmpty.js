const withTodosEmpty = (Component) => props =>
    !props.todos.length
    ? <div><p>You have no todos.</p></div>
    : <Component { ...props } />