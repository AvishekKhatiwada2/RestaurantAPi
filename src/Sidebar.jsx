import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({isOpen, setisOpen}) => {

    return (
        <nav id="sidebar" style={{ marginLeft: isOpen ? '0' : '-210px', transitionDuration: '300ms' }}>
            <div className="sidebar-title d-flex">
                <img src="/Restaurant.png" alt="icon" height={50} width={50}/>&nbsp;&nbsp;
                <div className="d-flex row">
                    <span>hitechowner</span>
                    <span>Online</span>
                </div>
            </div>
            {/*  */}
            <div className="sidebarList">
                {/* <Link to="#" className="img logo rounded-circle mb-5" style={{ backgroundImage: 'url(/tastyhublogo.png)' }} />
                 */}
                <ul className="list-unstyled components mb-5">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Dashboard">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ProductList">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">About</Link>
                    </li>
                </ul>
                {/* <div className="footer">
                    <p>
                        Copyright  &copy;
                        {new Date().getFullYear()} All rights reserved | This Website is Developed<i
                            className="icon-heart" aria-hidden="true"></i> by <Link to="https://avishekkhatiwada.com.np/"
                                target="_blank">Avishek Khatiwada</Link>
                    </p>
                </div> */}
            </div>
        </nav>
    );
}

export default Sidebar;
