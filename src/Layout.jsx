import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({loggedUsername,loggedCompany,currentFiscalyear}) => {
    const [isOpen, setIsOpen] = useState(true);
    const myProps = { loggedUsername,loggedCompany,currentFiscalyear,isOpen,setIsOpen }
    
    return (
        <>
            <div>
                <Navbar myProps={myProps}/>
                <div id="content-body">
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <div className="content-data">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;