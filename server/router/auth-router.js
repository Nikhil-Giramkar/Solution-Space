const express = require('express');
const router = express.Router();
const {registerSchema, loginSchema} = require('../validators/auth-validator')
const validate = require('../middlewares/validation-middleware')

const authControllers = require('../controllers/auth-controller');

router.route('/').get(authControllers.home);

router.route('/register').post(validate(registerSchema) ,authControllers.register)

router.route("/login").post(validate(loginSchema),authControllers.login);


module.exports = router;