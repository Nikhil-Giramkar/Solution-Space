export const Register = () => {
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
                                <h1 className="main-haeding mb-3">Registration Form</h1>
                                <br />
                                <form >
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="username"
                                    id="username"
                                    required
                                    autoComplete="off"/>
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="email"
                                    id="email"
                                    required
                                    autoComplete="off"/>
                                </div>

                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                    type="text" 
                                    name="phone" 
                                    placeholder="phone"
                                    id="phone"
                                    required
                                    autoComplete="off"/>
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="password"
                                    id="password"
                                    required
                                    autoComplete="off"/>
                                </div>

                                <br/>

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
