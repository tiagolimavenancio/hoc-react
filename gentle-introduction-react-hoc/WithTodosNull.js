function withTodosNull(Component) {
    return function (props) {
        return !props.todos ? null : <Component {...props} />
    }
}

// OR

const withTodosNull = (Component) => (props) =>
    !props.todos
    ? null
    : <Component { ...props } />