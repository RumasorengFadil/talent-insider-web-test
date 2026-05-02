import { api } from "@/lib/api";
import { RegisterFormSchemaType } from "./schemas/register-form.schema";

export async function registerUser(user: RegisterFormSchemaType) {
    const res = await api.post("/register", user, { xcsrf: false, withCredentials: false });

    return res.data;
}
