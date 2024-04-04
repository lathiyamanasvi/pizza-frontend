import React from 'react';
import { Outlet } from 'react-router-dom'
import Admin_Header from './Admin_Header';
import AdminDashboard from './AdminDashboard';


const Layout = () => {
    return (
        <>
            <Admin_Header/>
                <Outlet/>
            <AdminDashboard/>
        </>
    )
}

export default Layout;