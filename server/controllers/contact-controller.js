const Contact = require('../model/contactSchema');

const contactForm = async (req, res) =>{
    try{
        const contactInfo = req.body;
        await Contact.create(contactInfo);
        return res.status(200).json({message: "Contact Form filled succesfully"});
    }
    catch(error){
        res.status(500).json({message: err});
    }
}

module.exports = contactForm;