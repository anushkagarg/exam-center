import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Routes: FC = () => {
    return (
        <div id="main">
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route>404 Not Found</Route>
            </Switch>
        </div>
    )
}

export default Routes
