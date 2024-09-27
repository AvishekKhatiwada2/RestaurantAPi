import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import { userNameContext } from "./context/context";

const Navbar = ({ myProps }) => {
    const { isOpen, setIsOpen } = myProps;
    const userContext = useContext(userNameContext)

    const handleSideber = () => {
        setIsOpen(!isOpen)
    }
    // const items: MenuProps['items'] = [
    //     {
    //       key: '1',
    //       label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //           1st menu item
    //         </a>
    //       ),
    //     },
    //     {
    //       key: '2',
    //       label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //           2nd menu item
    //         </a>
    //       ),
    //     },
    //     {
    //       key: '3',
    //       label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //           3rd menu item
    //         </a>
    //       ),
    //     },
    //   ];

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="hamburger" type="button" onClick={handleSideber} ><img src="/more.png" alt="hamburger" /></button>
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
                                {userContext.loggedCompany ? (<li className="nav-item">
                                    <div className="d-flex flex-column navCompanyName">
                                        <span>{userContext.loggedCompany}</span>
                                        <span>{userContext.initial} {userContext.currentFiscalyear}</span>
                                    </div>
                                </li>) : <></>}
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
                                <li className="nav-item dropdown">
                                    {/* <Link className="nav-link dropdown-toggle" id="UserNameDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="profile-pic">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user" />
                                        </div>
                                    </Link> */}
                                    <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                                        <Button>bottomRight</Button>
                                    </Dropdown>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><p>{userContext.loggedUsername}</p></li>
                                        <li><p>Account</p></li>
                                        <li><p>Settings</p></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><p>Log Out</p></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="UserNameDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="dynamic">
                                        {loggedUsername}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </li> */}

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