export const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">Nikhil's Logo</a>
                    </div>
                </div>

                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/sevice">Service</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}