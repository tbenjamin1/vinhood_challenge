import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    RouteChildrenProps,
} from 'react-router-dom'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import { classNamesFunc } from 'classnames-generics'

const classNames = classNamesFunc()
type Props = {
    active: boolean
}

const Application: React.FunctionComponent<{}> = () => {
    return (
        <Provider store={store}>
            <div data-testid="home-page" className="max-w-full md:max-w-4xl p-2 md:p-10 mx-auto">
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(
                                        props: RouteChildrenProps<any>
                                    ) => (
                                        <route.component
                                            name={route.name}
                                            {...props}
                                            {...route.props}
                                        />
                                    )}
                                />
                            )
                        })}
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

export default Application
