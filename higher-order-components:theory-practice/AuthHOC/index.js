import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export default function requiresAuth(Component) {
    class AuthenticatedComponent extends React.Component {
        static propTypes = {
            user: PropTypes.object,
            dispatch: PropTypes.func.isRequired
        }

        componentDidMount() {
            this._checkAndRedirect()
        }

        componentDidUpdate() {
            this._checkAndRedirect()
        }

        _checkAndRedirect() {
            const { dispatch, user } = this.props
            const { role, redirectTo } = options

            if(!user || !user.role === role) {
                dispatch(push(redirectTo || '/signin'))
            }
        }

        render() {
            return (
                <div className='authenticated'>
                    { this.props.user ? <Component {...this.props} /> : null }
                </div>
            )
        }
    }

    const mapStateTopProps = state => {
        return {
            user: state.account.user
        }
    }

    return connect(mapStateToProps)(AuthenticatedComponent)
}