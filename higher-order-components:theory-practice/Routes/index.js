import requiresAuth from "../AuthHOC";

const routes = (
    <Route path=''>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/welcome-on-board' component={Welcome} />
        <Route path='forgot-password' component={ForgotWelcome} />
        <Route path='/signout' component={SignOut} />

        <Route path='/app' component={requiresAuth(App, { role: 'user', redirectTo: '/signin' })}>
            <Route name='dashboard' path='dashboard' component={Dashboard} />
            <Route name='profile' path='profile' component={UserProfile} />
        </Route>
        <Route path='/config' component={requiresAuth(Config, { role: 'admin', redirectTo: '/app' })}>
            <Route name='page' path='page' component={PageConfig} />
        </Route>
        <Route path='*' component={FourOFour} status={404} />
    </Route>
)