import { NavLink } from "react-router-dom"

export const Error = () => {
    return (
        <>
        <section id="error-page">
            <div className="content">
                <div className="header">404</div>
                <h4>Page Not Found!</h4>
                <p>
                    Oops! It looks like you are trying to acccess a URL which does not exixt
                    If you think there is some issue, feel free to report it.
                </p>
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact">Report Problem</NavLink>
                </div>
            </div>
        </section>
        </>
    )
}