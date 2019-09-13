function HOC(Comp) {
    return class NewComp extends Component {
        render() {
            return <Comp />
        }
    }
}

OR

const HOC = Comp => props => <Comp />

//

const HOC = Comp => props => <Comp {...props} />

//

const HOC = Comp => ({ children, ...props }) => (
    <Comp {...props}>
        {children}
    </Comp>
)

//

const HOC = Comp => ({ forwardRef, ...props }) => (
    <Comp ref={forwardRef} {...props} />
)

//

const HOC = Comp =>
    React.forwardRef(({ children, ...props }, ref) => (
        <Comp ref={ref} {...props}>
            {children}
        </Comp>
    ))
