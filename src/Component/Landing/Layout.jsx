import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Slider from './Slider';
import Gallery from './Gallery';

const Layout = () => {
    return (
        <>
            <Header/>
                <Slider/>
                <Outlet/>
               
                <Gallery/>
            <Footer/>
        </>
    )
}

export default Layout;