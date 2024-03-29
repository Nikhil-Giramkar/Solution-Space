import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";

export const Register = () => {

    const navigate = useNavigate();
    const {storeTokenInLocalStorage} = useAuth();

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
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
        try {
            //Send to backend
            const response = await fetch(`http://localhost:8765/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })

            console.log(response)

            if (response.ok) {
                //Take token and store in Local storage
                const responseJson = await response.json();
                storeTokenInLocalStorage(responseJson.token);

                //Empty all fields when submit successful
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                })

                //Navigate to login page
                navigate("/login")
            }
        }
        catch (error) {
            console.log("Error in sending Registration data to backend: ", error)
        }
    }
    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="conatiner grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/register.png" alt="register" width="400" height="500" />
                            </div>

                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Registration Form</h1>
                                <br />


                                <form onSubmit={handleFormSubmit} >
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>

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
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
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

                                    <br />

                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </main>
            </section>
        </>
    )
}
