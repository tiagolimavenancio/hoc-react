- Abstração do Estado

Você pode abstrair o estado fornecendo props e callbacks
para o WrappedComponent, muito semelhante à forma como os 
componentes inteligentes lidam com os componentes burros. 
Consulte componentes burros e inteligentes para obter mais informações.

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: ''
            }
            this.onNameChange = this.onNameChange.bind(this)
        }

        onNameChange(event) {
            this.setState({
                name: event.target.value
            })
        }

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}

Você usaria assim: 

class Example extends React.Component {
    render() {
        return <input name='name' {...this.props.name} />
    }
}

Você pode 'wrap' o WrappedComponent com outros componentes e elementos para 
estilizar, layout ou outros fins.

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            return (
                <div style={{ display: 'block' }}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

