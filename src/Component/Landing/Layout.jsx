import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Slider from './Slider';

const Layout = () => {
    return (
        <>
            <Header/>
                <Slider/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;