import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import 'jquery-ui-dist/jquery-ui';
// import $ from 'jquery'
import './style.css';

const Header = () => {
    useEffect(() => {

    }, [])
    return (
        <>
            <header>
                <div className="menu">
                    <ul>
                        <li><Link to="./home" className="active">Home</Link></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Service</a></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
