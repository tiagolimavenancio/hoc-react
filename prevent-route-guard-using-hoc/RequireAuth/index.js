export default function (ComposedComponent, privileges) {

    interface AuthenticateProps {
        isAuthenticated: boolean
        userPrivileges: string[]
    }
    
    class Authenticate extends React.Component<AuthenticateProps, {}> {
        constructor(props: AuthenticateProps) {
            super(props)
        }

        render() {
            return (
                isAuthorized(this.props.isAuthenticated, privileges, this.props.userPrivileges) &&
                <ComposedComponent {...this.props} /> || <div>User is not authorised to access this page.</div>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.userContext ? state.userContext.isAuthenticated : false,
            userPrivileges: state.userContext ? state.userContext.user ? state.userContext.user.rights : [] : []
        };
    }

    return connect(mapStateToProps, null)(Authenticate);
}