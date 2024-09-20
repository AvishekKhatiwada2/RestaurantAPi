import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';

const Navbar = ({ username, loggedCompany, currentFiscalyear }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="hamburger" type="button"><img src="/more.png" alt="hamburger" /></button>
                    <div>
                        <Link className="navbar-brand" to="#">
                            <img src="./Restaurant.png" alt="icon" width="34" height="35" className="d-inline-block align-text-top" />
                            <span>SwastikRestaurant</span>
                        </Link>
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                {loggedCompany ? (<li className="nav-item">
                                    <div className="d-flex flex-column navCompanyName">
                                        <span>{loggedCompany}</span>
                                        <span>KK990001 {currentFiscalyear}</span>
                                    </div>
                                </li>) : <></>}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="UserNameDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="dynamic">
                                        {username}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Sidebar /> */}
            {/* <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src="./Restaurant.png" alt="icon" width="34" height="35" className="d-inline-block align-text-top" />
                        <span>SwastikRestaurant</span>
                    </Link>
                    <ul>
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {username}
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                    </ul>
                </div>
            </nav> */}
        </>
    );
}

export default Navbar;