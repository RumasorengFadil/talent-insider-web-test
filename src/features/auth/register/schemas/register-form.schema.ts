import z from "zod";

export const registerFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
    first_name: z.string().min(2, "First name must be at least 2 characters"),
    last_name: z.string().min(2, "Last name must be at least 2 characters"),
});

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;