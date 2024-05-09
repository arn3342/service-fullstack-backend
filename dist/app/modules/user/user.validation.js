"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const CreateUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string',
        }),
        role: zod_1.z.string({
            required_error: 'Role is required',
            invalid_type_error: 'Role must be a string',
        }),
        contactNo: zod_1.z.string({
            required_error: 'Contact no is required',
            invalid_type_error: 'Contact no must be a string',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required',
            invalid_type_error: 'Address must be a string',
        }),
        profileImg: zod_1.z.string({
            required_error: 'Profile image is required',
            invalid_type_error: 'Profile image must be a string',
        }),
    }),
});
exports.UserValidation = {
    CreateUser,
};
