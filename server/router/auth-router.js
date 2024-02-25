const express = require('express');
const router = express.Router();
const {registerSchema, loginSchema} = require('../validators/auth-validator')
const validate = require('../middlewares/validation-middleware')
const authMiddleware = require("../middlewares/auth-middleware");

const authControllers = require('../controllers/auth-controller');

router.route('/').get(authControllers.home);

router.route('/register').post(validate(registerSchema) ,authControllers.register)

router.route("/login").post(validate(loginSchema),authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;