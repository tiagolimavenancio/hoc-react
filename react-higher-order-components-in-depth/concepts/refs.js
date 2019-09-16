    
- Acessando Instância via Refs

Você pode acessar this (a instância do WrappedComponent) com uma ref, 
mas precisará de um processo de renderização normal inicial completo 
do WrappedComponent para que a ref seja calculada, 
o que significa que é necessário retornar o elemento 
WrappedComponent a partir do método de renderização HOC , 
deixe o React fazer seu processo de reconciliação e, 
nesse momento, você terá uma referência à instância WrappedComponent.

function refsHOC(WrappedComponent) {
    return class RefsHOC extends React.Component {
      proc(wrappedComponentInstance) {
        wrappedComponentInstance.method()
      }
      
      render() {
        const props = Object.assign({}, this.props, { ref: this.proc.bind(this) })
        return <WrappedComponent { ...props } />
      }
    }
}

Quando o WrappedComponent for renderizado, o retorno de chamada ref 
será executado e você terá uma referência à instância do WrappedComponent. 
Isso pode ser usado para ler / adicionar objetos de instância e 
chamar métodos de instância.