function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

A parte importante aqui é que o 
método de renderização do HOC retorna um React Element do 
tipo do WrappedComponent. Também passamos pelos adereços que 
o HOC recebe, daí o nome Proxy Proops.

O que pode ser feito com o Props Proxy?

     * Manipulando Props
     * Acessando a Instância via Refs
     * Abstraindo Estado
     * Quebrando o WrappedComponent com outros elementos
    
- Manipulando Props

Você pode ler, adicionar, editar e remover os props que 
estão sendo passados para o WrappedComponent.

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            const newProps = {
                user: currentLoggerInUser
            }
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}
