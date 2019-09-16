function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            return super.render()
        }
    }
}

Como você pode ver, a classe HOC retornada (Enhancer) estende o WrappedComponent. 
É chamado de Inversão de Herança porque, em vez de o WrappedComponent estender 
alguma classe do Enhancer, ele é passivamente estendido pelo Enhancer. 
Dessa maneira, a relação entre eles parece inversa.

A inversão de herança permite que o HOC tenha acesso à instância WrappedComponent 
por meio disso, o que significa que ele tem acesso ao state, props, hooks do 
ciclo de vida do componente e ao método de renderização.

Não entrarei em muitos detalhes sobre o que você pode fazer com os hooks do 
ciclo de vida, porque não é específico do HOC, mas do React. 
Mas observe que, com o II, você pode criar novos hooks de ciclo de vida 
para o WrappedComponent. Lembre-se de sempre chamar super. 
[LifecycleHook] para não quebrar o WrappedComponent.

Exemplo 1: renderização condicional. Esse HOC renderizará exatamente o que o 
WrappedComponent renderizaria, a menos que this.props.loggedIn 
não seja verdadeiro. (Supondo que o HOC receberá o suporte logon)

function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            if(this.props.loggerIn) {
                return super.render()
            } else {
                return null
            }
        }    
    }
}

Exemplo 2: Modificando a árvore React Elements emitida pela renderização.

Neste exemplo, se a saída renderizada do WrappedComponent tiver uma entrada como elemento de 
nível superior, alteramos o valor para "que a força esteja com você".

function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            const elementsTree = super.render()
            let newProps = {}
            if (elementsTree && elementsTree.type === 'input') {
                newProps = { value: 'may the force be with you' }
            }
            const props = Object.assign({}, elementsTree.props)
            const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props)
            return newElementsTree
        }
    }
}

Manipulando Estado

Exemplo: Debugger acessando os props e o estado de WrappedComponent

export function iiHOCDebugger(WrappedComponent) {
    return class II extends WrappedComponent {
        render() {
            return (
                <div>
                    <h2>HOC Debugger Component</h2>
                    <p>Props</p><pre>{JSON.stringify(this.props, null, 2)}</pre>
                    <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
                    {super.render()}
                </div>
            )
        }
    }
}