Exemplo: Componentes pai acessando seus filhos.

class Parent extends React.Component {
    render() {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
  }
}

render((
  <Parent>
    {children}
  </Parent>
), mountNode)