import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (

        // <div className="footer">
        //     <h2 className="text-center">All Right Reserved &copy; OmarChihadeh</h2>
        //     <p className="text-center">
        //         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        //         <Link to="/policy">Privacy Policy</Link>
        //     </p>
        // </div>
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">All Right Reserved &copy; OmarChihadeh</p>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                        <li className="nav-item"><Link to="/policy" className="nav-link px-2 text-body-secondary">Privacy Policy</Link></li>
                    </ul>
                </footer>
            </div>


        </>
    );
};

export default Footer;