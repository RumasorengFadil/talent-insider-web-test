import Cookies from "js-cookie";
import { useCallback } from "react";

export const useCookies = () => {
    const getCookie = useCallback((name: string) => {
        return Cookies.get(name);
    }, [])

    const getCookieParse = useCallback((name: string) => {
        const cookie = Cookies.get(name);

        if (!cookie) return null;

        try {
            return JSON.parse(cookie);
        } catch (error) {
            console.error("Invalid JSON in cookie:", error);
            return null;
        }
    }, []);

    // Set token di cookie dan state
    const setCookie = useCallback((name: string, newToken: string) => {
        Cookies.set(name, newToken, {
            expires: Number(process.env.NEXT_PUBLIC_COOKIE_MAX_AGE),
            secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === "true",
            sameSite: process.env.NEXT_PUBLIC_COOKIE_SAMESITE as "strict" | "lax" | "none",
            path: "/",
        });
    }, []);

    // Hapus token
    const removeCookie = useCallback((name: string) => {
        Cookies.remove(name, {
            expires: Number(process.env.NEXT_PUBLIC_COOKIE_MAX_AGE),
            secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === "true",
            sameSite: process.env.NEXT_PUBLIC_COOKIE_SAMESITE as "strict" | "lax" | "none",
            path: "/",
        });
    }, []);

    return {
        setCookie,
        removeCookie,
        getCookie,
        getCookieParse
    };
};