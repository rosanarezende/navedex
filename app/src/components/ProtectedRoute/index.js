import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token')
    const getRedirectProps = (location) => ({
        pathname: "/login",
        from: location
    });
    return (
        <Route
            {...rest}
            render={props => {
                return token
                    ? (<Component {...props} />)
                    : (<Redirect to={getRedirectProps(props.location)} />)
            }}
        />
    )
}

export default ProtectedRoute