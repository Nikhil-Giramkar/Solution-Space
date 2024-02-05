const { z } = require('zod')


//Create an object schema
const registerSchema = z.object({
    username: z.string({ required_error: "Name is required" })
        .trim()
        .min(2, { message: "Name must be atleast 2 characters" })
        .max(255, { message: "Name must be maximum 255 characters" }),

    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" }),
        
    phone: z.string({ required_error: "Phone is required" })
        .trim()
        .min(10, {message: "Phone must be atleast 10 characters"})
        .max(20, {message: "Phone must be atleast 20 characters"}),

    password: z.string({ required_error: "Password is required" })
        .min(6, {message: "Password must be atleast 6 characters"})
        .max(255, {message: "Password must be atleast 255 characters"})

})


module.exports = {registerSchema}