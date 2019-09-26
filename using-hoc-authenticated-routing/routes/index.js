import requireAuth from '../RequiresAuth'

const routes = (
    <Route path=''>
        <Route path=''>
            <Route path="/signin" component={SignIn} />

            <Route path='/app' component={requireAuth(App)}>
                <Route name="dashboard" path="dashboard" component={Dashboard} />
                <Route name="profile" path="user-profile" component={UserProfile} />
            </Route>
        </Route>
    </Route>
)