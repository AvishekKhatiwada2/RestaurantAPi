import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className="wrapper align-items-stretch ">
                {/* isOpen={isOpen} setisOpen={setIsOpen}  */}
                <Navbar />
                <div id="content" className="">
                    {/* isOpen={isOpen} setIsOpen={setIsOpen}  */}
                    <Sidebar />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;