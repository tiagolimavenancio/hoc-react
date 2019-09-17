import requiresAuth from "../AuthHOC";
import checkBoarded from "../CheckBoardedHOC";
import websiteContext from "../WebsiteContextHOC";

const CheckedWelcome = composeComponents(Welcome, [
    c => checkBoarded(c, { withValue: true, redirectTo: '/app/dashboard'}),
    c => requiresAuth(c)
])

const CheckedApp = composeComponents(App, [
    c => checkBoarded(c, { withValue: false, redirectTo: '/welcome-on-board'}),
    c => requiresAuth(c),
    c => requiresSmth(c, { options: {} })
])

const routes = (
    <Route path=''>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />

        <Route path='/welcome-on-board' component={CheckedWelcome} />

        <Route path='forgot-password' component={ForgotWelcome} />
        <Route path='/signout' component={SignOut} />

        <Route path='/app' component={CheckedApp}>
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

export function composeComponents(component, wrappers = []) {
    return wrappers.reduce((c, wrapper) => wrapper(c), component)
}