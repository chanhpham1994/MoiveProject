import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import UserHeader from '../Component/UserComponent/UserHeader';
import UserFooter from '../Component/UserComponent/UserFooter';
import UserPromotion from '../Component/UserComponent/UserPromotion';


const UserLayout = ({ ...props }) => {
    return <Fragment>

        <UserHeader/>
        {props.children}
        <UserPromotion/>
        <UserFooter />


    </Fragment>
}

export const HomeTemplate = ({ Component, ...props }) => {
    return <Route {...props} render={(propsComponent) => {
        return <UserLayout>
            <Component {...propsComponent} />
        </UserLayout>
    }}>
    </Route>
}
