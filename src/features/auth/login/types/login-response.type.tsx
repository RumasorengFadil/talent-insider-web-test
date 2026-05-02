export interface LoginResponse {
    meta: Meta;
    data: LoginData;
}

export interface Meta {
    code: number;
    status: "success" | "error";
    message: string;
}

export interface LoginData {
    user: User;
    access_token: string;
    token_type: "Bearer";
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}