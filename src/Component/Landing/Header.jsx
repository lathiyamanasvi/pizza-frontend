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
                <div className="main d-flex justify-content-between align-items-center">
                    <div className="col-2 logo d-flex align-items-center">
                    <img src="https://static.live.templately.com/woocommerce/2022/07/0e35a758-pizza-logo.png" width="120px" />
                    </div>
                    <div className="col-6 menu">
                        <ul className=''>
                            <li className='mx-3'><Link to='/home'>Home</Link></li>
                            <li className='mx-3'><a href="#">About</a></li>
                            <li className='mx-3'><Link to='/contact'>Contact</Link></li>
                            <li className='mx-3'><a href="#">Menu</a></li>
                            <li className='mx-3'><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-4 button">
                        <ul className='d-flex text-center justify-content-end align-items-center'>
                            <li>
                                <input type="text" />
                            </li>
                            <li>
                                <button><a href="#" className='text-white'>Search</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
           </header>

        </>
    )
}

export default Header
