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
                    <img src="/images/support.png" alt="Contact us" height="500" width="400"/>
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
                            required/>
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
                            required/>
                        </div>

                        <div>
                            <label htmlFor="message">Message</label>
                            <br></br>
                            <textarea 
                            name="message" 
                            id="message" 
                            autoComplete="off" 
                            cols="30"
                            rows="10"
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
        </section>
        </>
    )
}
