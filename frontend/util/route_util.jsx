import React from 'react';
import { connect } from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});

const Auth = ({ component: Component, path, exact, loggedIn }) => (
    <Route exact={exact} path={path} render={ (props) => (
        !loggedIn ? ( <Component {...props} /> ) : ( <Redirect to="/" /> )
    )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

