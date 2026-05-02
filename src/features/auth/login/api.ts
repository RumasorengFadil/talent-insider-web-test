import { api } from "@/lib/api";
import { LoginFormSchemaType } from "./schemas/login-form.schema";

export async function loginUser(credentials: LoginFormSchemaType) {
    const res = await api.post("/login", credentials, { xcsrf: false, withCredentials: false });

    return res.data;
}

export async function refreshToken() {
    const res = await api.post("/refresh");

    return res.data;
}

export async function loginGoogle() {
    const res = await api.get("/google", { xcsrf: false });

    return res.data;
}

export async function me() {
    const res = await api.get("/me");

    return res.data;
}

