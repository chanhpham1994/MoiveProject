import React, { Component, Fragment } from 'react';
import { Route,Redirect } from 'react-router-dom';
import {settings} from '../Common/Config/Setting';

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
 {/* DÙNG GUARD BẢO VỀ ROUTE( YÊU CẦU ĐĂNG NHẬP MỚI ĐƯỢC TRUY CẬP) */}
    if(localStorage.getItem(settings.token)){
        return <Route {...props} render={(propsComponent) => {
            return <AdminLayout>
                <Component {...propsComponent}/> 
            </AdminLayout>
        }}/>
    }
    alert('Vui lòng đăng nhập!!')
    return <Redirect to='/login' />
    
}