import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login = () => {

    const navigate = useNavigate();
    const {storeTokenInLocalStorage} = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value;

        setUser({
            ...user,
        [name]: value,
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(user)

        try{
            const response = await fetch(`http://localhost:8765/api/auth/login`,
            {
                method: "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            console.log(response);

            if(response.ok){
                //Take token and store in Local storage
                const responseJson = await response.json();
                storeTokenInLocalStorage(responseJson.token);

                alert("Login Successful")
                setUser({
                    email: "",
                    password: "",
                })
                navigate("/")
            }
            else{
                alert("Invalid Credentials")
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="conatiner grid grid-two-cols">
                            <div className="login-image">
                                <img src="/images/login.png" alt="login" width="400" height="500" />
                            </div>

                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login Form</h1>
                                <br />


                                <form onSubmit={handleFormSubmit} >
                              

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                </div>


                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>

                                <br/>

                                <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </main>
            </section>
        </>
    )
}
