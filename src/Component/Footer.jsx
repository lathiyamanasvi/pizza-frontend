import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white p-5 mt-5">
            <div className="row">
                <div className="col-3 align-center">
                    <ul className="list-unstyled ">
                        <li><Link className="text-decoration-none text-white">Home</Link></li>
                        <li><Link className="text-decoration-none text-white">About</Link></li>
                        <li><Link className="text-decoration-none text-white">Blog</Link></li>
                        <li><Link className="text-decoration-none text-white">Service</Link></li>
                    </ul>
                </div>
                <div className="col-3  align-center">
                <ul className="list-unstyled">
                        <li><Link className="text-decoration-none text-white">Home</Link></li>
                        <li><Link className="text-decoration-none text-white">About</Link></li>
                        <li><Link className="text-decoration-none text-white">Blog</Link></li>
                        <li><Link className="text-decoration-none text-white">Service</Link></li>
                    </ul>
                </div>
                <div className="col-3 align-center">
                <ul className="list-unstyled">
                        <li><Link className="text-decoration-none text-white">Home</Link></li>
                        <li><Link className="text-decoration-none text-white">About</Link></li>
                        <li><Link className="text-decoration-none text-white">Blog</Link></li>
                        <li><Link className="text-decoration-none text-white">Service</Link></li>
                    </ul>
                </div>
                <div className="col-3 align-center">
                <ul className="list-unstyled">
                        <li><Link className="text-decoration-none text-white">Home</Link></li>
                        <li><Link className="text-decoration-none text-white">About</Link></li>
                        <li><Link className="text-decoration-none text-white">Blog</Link></li>
                        <li><Link className="text-decoration-none text-white">
                                <button>Table Booking</button>
                            </Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;