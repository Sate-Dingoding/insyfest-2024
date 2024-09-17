import Joi from "joi";

export const RegisterUserVal = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    fullName: Joi.string().required()
})

export const loginSchema = Joi.object({
    nama_user: Joi.string().required(),
    password: Joi.string().required(),
});