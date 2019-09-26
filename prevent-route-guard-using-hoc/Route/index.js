import requireAuth from "../RequireAuth";

class Routes extends React.Component<RoutesProps, {}> {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path="/" component={requireAuth(Persons, ["UC52_003"])} />
                    <Route path="/jobs" component={requireAuth(Jobs, ["UC52_006"])} />
                </Switch>
            </div>
        )
    }
}
