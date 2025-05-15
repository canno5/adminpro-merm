// import { z } from "zod";
const { z } = require("zod");
// username:

const signupSchema = z.object({
    name: z.string({ required_error: "Name is required" }).trim().min(3, { message: "Name must be at least 3 chars " })
        .max(255, { message: "Name must not be more than 255 characters" }),

    phone: z.string({ required_error: "Phone is required" }).trim().min(10, { message: "Phone must be at least 10 chars " })
        .max(20, { message: "Phone must not be more than 20 characters" }),

    email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid Email Address" }).min(3, { message: "Email must be at least 3 chars " })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z.string({ required_error: "Password is required" }).min(7, { message: "Password must be at least 7 chars " })
        .max(1024, { message: "Password can't be grather than 1024 characters" })
});
const signInSchema = z.object({
// const signInSchema = signupSchema.extend({
    email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid Email Address Please Valid Email Address" }).min(3, { message: "Email must be at least 3 chars " })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z.string({ required_error: "Password is required" }).min(7, { message: "Password must be at least 7 chars " })
        .max(1024, { message: "Password can't be grather than 1024 characters" })
});


const contactSchema = z.object({
    name: z.string({ required_error: "Name is required" }).trim().min(3, { message: "Name must be at least 3 chars " })
        .max(255, { message: "Name must not be more than 255 characters" }),

    email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid Email Address" }).min(3, { message: "Email must be at least 3 chars " })
        .max(255, { message: "Email must not be more than 255 characters" }),

    message: z.string({ required_error: "Messahe is required" }).min(3, { message: "Message must be at least 3 chars " })
        .max(255, { message: "Message can't be grather than 255 characters" })
});









module.exports = {signupSchema, signInSchema, contactSchema};
