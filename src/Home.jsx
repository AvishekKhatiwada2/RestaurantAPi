import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";


const Home = ({ setLoggedUserame,setMytoken }) => {
    const [licenseId, setLicenseId] = useState('2622');
    const [username, setUsername] = useState('hitechowner');
    const [password, setPassword] = useState('123456');
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            licenseId,
            username,
            password
        });
        try {
            const response = await fetch('http://app.myswastikonline.com/api/Token/Login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body,
                    });
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const data = await response.json();
            setMytoken(data.token);
            setLoggedUserame(data.data[0].userName);
            navigate("/Companies");
        } catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className="MainDiv">
                <div className="row w-100">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="HomeContent">
                            <div className="Content-title d-flex">
                                <img src="./Restaurant.png" alt="RestaurantIcon" />
                                <div className="TitleName1"><span className="FirstLetter">S</span><span className="TitleName">wastikRestaurant</span></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="card col-8 p-0">
                                    <div className="card-header">LOGIN</div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-2">
                                                <input type="Number"
                                                    className="form-control"
                                                    id="LiscenseId"
                                                    placeholder="License Code"
                                                    value={licenseId}
                                                    onChange={(e) => setLicenseId(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <input type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <input type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer d-flex gap-3">
                                        <button type="submit" onClick={handleLogin} className="btn btn-lg btn-primary">Login</button>
                                        <Link to='http://register.hitechnepal.com/' type="submit" className="btn btn-lg btn-primary">Register</Link>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    );
}

export default Home;