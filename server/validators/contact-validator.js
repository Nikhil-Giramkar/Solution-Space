const { z } = require('zod')

//Create an object schema
const contactFormSchema = z.object({
    username: z.string({ required_error: "Name is required" })
        .trim()
        .min(2, { message: "Name must be atleast 2 characters" })
        .max(255, { message: "Name must be maximum 255 characters" }),

    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" }),
        
    message: z.string({ required_error: "Message is required" })
        .trim()
        .min(2, {message: "Message must be atleast 2 characters"})
        .max(1024, {message: "Phone must be atleast 1024 characters"})

})


module.exports = {contactFormSchema}