import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerUser } from "../api";
import { RegisterFormSchemaType } from "../schemas/register-form.schema";

export default function useRegister() {
    const router = useRouter();

    return useMutation({
        mutationFn: (payload: RegisterFormSchemaType) => registerUser(payload),

        onError: (error: any) => {
            toast.error(
                error?.response?.data?.meta?.message || "Register failed"
            );
            console.error("Register error:", error?.response?.data ?? error.message);
        },

        onSuccess: () => {
            toast.success("Register berhasil! Silakan login.", {
                description: "Anda akan diarahkan ke halaman login sesaat lagi"
            });

            // kasih delay biar toast kebaca dulu
            setTimeout(() => {
                router.push("/login");
            }, 1500);
        },
    });
}