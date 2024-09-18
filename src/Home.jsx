import { Link } from "react-router-dom";
import { useState } from "react";


const Home = () => {
    const [licenseId, setLicenseId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mytoken, setMytoken] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
       // console.log(licenseId, username, password);
        const body = JSON.stringify({
            licenseId,
            username,
            password
        });
       // console.log(body);
        try {
            const response = await fetch('http://app.myswastikonline.com/api/Token/Login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body,
                    });
            if (!response.ok) {
                throw new Error(`API request failed with status ${resopnse.status}`);
            }

            const data = await response.json();
           // console.log(data);
            setMytoken(data);
           // console.log(mytoken);
        } catch(err){
            console.log(err);
        }

console.log(mytoken);
        //     // console.log('Login Successful:', data);
        //     setMytoken(data.token);
        //     console.log(mytoken);
        // }catch(error) {
        //     console.error('Login Error:',error);
        // }
    //     console.log(LoginData);
        // fetch('http://app.myswastikonline.com/api/Token/Login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: body
        // })
        //     .then(res => {
        //         // if(!res.ok){
        //         //     throw error('Error Fetching Data! Check Connection.');
        //         // }
        //         // console.log(res);
        //         return res.json();
        //     })
        //     .then(data => {
        //         // console.log(data);
        //         setToken(data.token);
        //         console.log(token);
        //     })
        // // .catch(err => {
        // //     alert(err.message);
        // // })
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