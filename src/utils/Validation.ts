import Joi from "joi";

export const loginSchema = Joi.object({
    nama_user: Joi.string().required(),
    password: Joi.string().required(),
});