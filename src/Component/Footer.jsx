import React from "react";
import { Link } from "react-router-dom";
import '../style.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-img text-center p-4">
                            <img src="https://static.live.templately.com/woocommerce/2022/07/0e35a758-pizza-logo.png" alt="" />
                        </div>
                        <div className="footer-content pt-5 d-flex justify-content-between pb-4">
                            <div className="col-3">
                                <ul className="text-center">
                                    <li>
                                        <h3 className="fw-bold">ADDRESS</h3>
                                    </li>
                                    <li>
                                        <span className="text-muted">570 8th Ave, New York, NY <br /> 10018 United States</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul className="text-center">
                                    <li>
                                        <h3 className="fw-bold">BOOK A TABLE</h3>
                                    </li>
                                    <li className="pb-3">
                                        <span className="text-muted">Dogfood och Sliders foodtruck. <br />Under Om oss kan ni läsa</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="text-danger fs-5 ">0123456987</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul className="text-center">
                                    <li>
                                        <h3 className="fw-bold">OPENING HOURS</h3>
                                    </li>
                                    <li>
                                        <span className="text-muted">Monday - Friday <br /> 10.00 AM - 11.00 PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="copyright d-flex justify-content-between">
                            <div className="copyright-content">
                                <p>© Get Pizza All Rights Reserved. Designed By
                                    <a href="#" className="text-danger"> Expresso Soft</a>
                                </p>
                            </div>
                            <div className="copyright-icon text-muted ">
                                <ul className="d-flex">
                                    <li><FaFacebookF className="text-danger"/></li>
                                    <li className="mx-3"><FaInstagram className="text-danger"/></li>
                                    <li><FaTwitter className="text-danger"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;