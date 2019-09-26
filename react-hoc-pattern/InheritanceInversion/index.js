const inheritanceInversionHOC = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            return super.render()
        }
    }
}