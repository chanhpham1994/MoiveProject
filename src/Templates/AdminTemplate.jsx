import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import AdminHeader from '../Component/AdminComponent/AdminHeader';
import AdminSideBar from '../Component/AdminComponent/AdminSideBar';
import AdminFooter from '../Component/AdminComponent/AdminFooter';
import AdminContent from '../Component/AdminComponent/AdminContent';


const AdminLayout = ({ ...props }) => {
    return <Fragment>
        
                <AdminSideBar />
                <AdminHeader />
                <AdminContent  {...props} />
                <AdminFooter />

    </Fragment>
}


export const AdminTemplate = ({ Component, ...props }) => {
    return <Route {...props} render={(propsComponent) => {
        return <AdminLayout >
            <Component {...propsComponent}/>
        </AdminLayout>
    }}>
    </Route>
}