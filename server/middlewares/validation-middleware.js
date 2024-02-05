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
        const status = 422;
        const message = "Error in validate"
        const extraDetails = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails
        }
        console.log(error);
        next(error)
    }
}

module.exports = validate;