import { useState } from "react"

export const Contact = () => {

    const [contactForm, setContactForm] = useState({
        username: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContactForm({
            ...contactForm,
            [name]: value,
        })
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(contactForm)
    }


    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">
                        Contact Us
                    </h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="Contact us" />
                    </div>

                    <section className="section-form">
                        <form action="" onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contactForm.username}
                                    onChange={handleInputChange}
                                    required />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contactForm.email}
                                    onChange={handleInputChange}
                                    required />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    cols="30"
                                    rows="5"
                                    value={contactForm.message}
                                    onChange={handleInputChange}
                                    required></textarea>
                            </div>

                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>

                <section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612045986216!2d73.91411937380185!3d18.56225906790225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1707985463604!5m2!1sen!2sin"
                        width="100%" height="450" allowFullScreen loading="lazy">
                    </iframe>
                </section>
            </section>
        </>
    )
}
