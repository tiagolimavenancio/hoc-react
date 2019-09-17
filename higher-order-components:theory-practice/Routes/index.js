import requiresAuth from "../AuthHOC";
import checkBoarded from "../CheckBoardedHOC";
import websiteContext from "../WebsiteContextHOC";

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

            <Route name='websites' path='websites/:id' component={websiteContext(Websites)}>
                <Route name="banners" path="banners" component={Banners} />
                <Route name="revenues" path="revenues" component={Revenues} />
            </Route>
        </Route>
        <Route path='/config' component={requiresAuth(Config)}>
            <Route name='page' path='page' component={PageConfig} />
        </Route>
        <Route path='*' component={FourOFour} status={404} />
    </Route>
)