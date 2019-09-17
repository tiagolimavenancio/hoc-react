import requiresAuth from "../AuthHOC";
import checkBoarded from "../CheckBoardedHOC";

const routes = (
    <Route path=''>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />

        <Route path='/welcome-on-board' 
            component={checkBoarded(Welcome, { withValue: true, redirectTo: '/app/dashboard'})} />

        <Route path='forgot-password' component={ForgotWelcome} />
        <Route path='/signout' component={SignOut} />

        <Route path='/app' 
            component={checkBoarded(requiresAuth(App), { withValue: false, redirectTo: '/welcome-on-board'})}>
            <Route name='dashboard' path='dashboard' component={Dashboard} />
            <Route name='profile' path='profile' component={UserProfile} />
        </Route>
        <Route path='/config' component={requiresAuth(Config)}>
            <Route name='page' path='page' component={PageConfig} />
        </Route>
        <Route path='*' component={FourOFour} status={404} />
    </Route>
)