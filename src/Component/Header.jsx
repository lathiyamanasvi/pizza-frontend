import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'jquery-ui-dist/jquery-ui';
import $ from 'jquery'

const Header = () => {
    useEffect(()=>{
      
    },[])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center mx-3'>
                        <div className='popup'>
                       
                        <lable for="show" type="button" class="btn btn-outline-light px-5 show-btn">Login</lable> 
                       
                        </div>  
                        <h4 className='text-white mx-3'>Cart</h4>
                        <h4 className='text-white mx-3'>wishlist</h4>

                        </div>
                    </div>
                </div>
            </nav>


    

        </>
    )
}

export default Header
