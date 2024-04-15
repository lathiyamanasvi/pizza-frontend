import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Slider from './Slider';
import Gallery from './Gallery';
import Testimonial from './Testimonial';

const Layout = () => {
    return (
        <>
            <Header/>
                <Slider/>
                <Outlet/>
                <Testimonial/>
                <Gallery/>
            <Footer/>
        </>
    )
}

export default Layout;