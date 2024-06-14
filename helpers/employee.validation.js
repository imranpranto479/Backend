const Joi = require('joi');

const nameSchema = () => Joi.string()
    .pattern(/^[a-zA-Z]+$/)
    .required()
    .messages({
        'string.pattern.base': 'Must only contain letters'
    });

const phoneNumberSchema = () => Joi.string()
    .pattern(/^(?:\+88|88)?(01[3-9]\d{8})$/)
    .required()
    .messages({
        'string.pattern.base': 'Must be a valid Bangladeshi number'
    });

const createEmployeeValidation = Joi.object({
    firstName: nameSchema(),
    lastName: nameSchema(),
    email: Joi.string().email().required(),
    phoneNumber: phoneNumberSchema(),
});

const updateEmployeeValidation = Joi.object({
    firstName: nameSchema(),
    lastName: nameSchema(),
    phoneNumber: phoneNumberSchema(),
});





module.exports = {
    createEmployeeValidation,
    updateEmployeeValidation,
};
