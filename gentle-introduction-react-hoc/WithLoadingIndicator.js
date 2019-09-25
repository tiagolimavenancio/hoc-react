const withLoadingIndicator = (Component) => ({ isLoadingTodos, ...others }) =>
    isLoadingTodos
    ? <div><p>Loading todos ...</p></div>
    : <Component { ...others } />