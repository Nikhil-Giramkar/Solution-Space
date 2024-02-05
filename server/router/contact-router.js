const express = require('express');
const router = express.Router();
const contactForm = require('../controllers/contact-controller');
const {contactFormSchema} = require('../validators/contact-validator');
const validate = require('../middlewares/validation-middleware')

router.route('/contact').post(validate(contactFormSchema), contactForm);

module.exports = router;