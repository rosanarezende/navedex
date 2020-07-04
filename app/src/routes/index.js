import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import { routes } from "../utils"

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AddNaverPage from './AddNaverPage';
import EditNaverPage from './EditNaverPage';
import ProtectedRoute from '../components/ProtectedRoute';

function Routes(props){
    const { history } = props

    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={routes.login} component={LoginPage}/>
                <ProtectedRoute exact path={routes.home} component={HomePage}/>
                <ProtectedRoute exact path={routes.addNaver} component={AddNaverPage}/>
                <ProtectedRoute exact path={routes.editNaver} component={EditNaverPage}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Routes