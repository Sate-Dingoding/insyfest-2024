import Joi from "joi";

export const RegisterUserVal = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    fullName: Joi.string().required()
})

export const LoginUserVal = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required()
});

export const NotesSchema = Joi.object({
    notes: Joi.string().required()
});