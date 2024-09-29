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

enum CourseColor {
    "#D79EB8",
    "#EEBC82",
    "#FFF4BB",
    "#CCEFC7",
    "#D7E8FE"
}
export const AddCourseValidation = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().valid(...Object.values(CourseColor)).required()
})

export const AddNoteValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string(),
    course: Joi.string().required()
})

export const AddTaskValidation = Joi.object({
    name: Joi.string().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    details: Joi.string(),
    status: Joi.string().required(),
    category: Joi.string().required()
})