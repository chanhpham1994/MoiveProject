import React from 'react';
import {Route , Redirect} from 'react-router-dom';

const auth = ({ path, Component}) => {
    return (
        <Route path={path} render={(routeProps) => {

            if(localStorage.getItem('accesstoken')) {
                return <Component {...routeProps}/>;
            }

            
            return <Redirect to='/login' />
        }}/>
    );
};

export default auth;