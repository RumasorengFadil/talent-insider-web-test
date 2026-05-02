import { useCookies } from "@/hooks/use-cookies";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginUser } from "../api";
import { LoginFormSchemaType } from "../schemas/login-form.schema";
import { LoginResponse } from "../types/login-response.type";

export default function useLogin(redirect?: string) {
  const router = useRouter();
  const { setCookie } = useCookies();
  return useMutation({
    mutationFn: (payload: LoginFormSchemaType) => loginUser(payload),
    onError: (error: any) => {
      toast.error(error?.response?.data?.meta?.message);
      console.error("Login error:", error?.response?.data ?? error.message);
    },

    onSuccess: (data: LoginResponse) => {
      setCookie("access_token", data?.data?.access_token);
      setCookie("user", JSON.stringify(data?.data?.user))
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace("/dashboard");
      }
    },
  });
}
