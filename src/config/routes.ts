import IRoute from '@interfaces/IRoute'
import Results from '@views/results'
import Home from '../views/home'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true,
    },
    {
        path: '/results',
        name: 'Results Page',
        component: Results,
        exact: true,
    },
]

export default routes
