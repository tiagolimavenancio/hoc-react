export default function websiteContext(Component) {
    class WebsiteContextComponent extends React.Component {
        static propTypes = {
            dispatch: PropTypes.func.isRequired,
            state: PropTypes.object.isRequired,
            params: PropTypes.shape({
                websiteId: PropTypes.string.isRequired
            })
        }

        componentDidMount() {
            this._setCurrentWebsite()
        }

        componentDidUpdate() {
            this._setCurrentWebsite()
        }

        _setCurrentWebsite() {
            const { dispatch, params: { websiteId }, state: { websites }} = this.propTypes

            const website = _.find(websites, { id: websiteId })

            dispatch(loadContextWebsite(website))
        }

        render() {
            const { state: { website }} = this.props

            return (
                <div className='website-context'>
                    {website ? <Component {...this.props} /> : null }
                </div>
            )
        }
    }
    const mapStateToProps = state => {
        return {
            state: state.application
        }
    }
    return connect(mapStateToProps)(WebsiteContextComponent)
}