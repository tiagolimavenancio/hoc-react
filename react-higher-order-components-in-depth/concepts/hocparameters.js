Exemplo: parâmetros HOC com um Proxy Props trivial. 
O importante é a função HOCFactoryFactory.

function HOCFactoryFactory(...params){
    // do something with params
    return function HOCFactory(WrappedComponent) {
      return class HOC extends React.Component {
        render() {
          return <WrappedComponent {...this.props}/>
        }
      }
    }
  }