/*
    await schema.parseAsync(req.body)
    is an in built method in Zod package which validates the fields agains the schema defined
*/

//Note we have 2 fat arrows in below syntax
const validate = (schema) => async (req, res, next) => {
    try{
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next();
    }
    catch(err){
        console.log(err)
        const message = err.errors[0].message;// when validation fails we get an array of errors with message prop
        res.status(400).json({message: message})
    }
}

module.exports = validate;