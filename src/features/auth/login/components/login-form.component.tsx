import { ButtonWithLoadingSc } from "@/components/button-with-loading.component";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { isValid } from "zod/v3";
import { GoogleButton } from "../../components/google-button.component";
import useLogin from "../hooks/use-login.hook";
import { LoginFormSchemaType, loginFormSchema } from "../schemas/login-form.schema";

export default function LoginForm() {
    const { mutate, isPending } = useLogin();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<LoginFormSchemaType>({
        resolver: zodResolver(loginFormSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginFormSchemaType) => {
        mutate(data);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex px-4 w-full sm:w-auto sm:max-w-96 flex-col gap-8 lg:gap-12">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#1d1a1a] text-center">
                Log In
            </h1>

            {/* Form Fields */}
            <div className="flex flex-col gap-6 lg:gap-9">
                <div className="w-full flex flex-col gap-6 lg:gap-8">
                    {/* EMAIL */}
                    <div className="flex flex-col gap-2.5">
                        <FieldGroup>
                            <Controller
                                control={form.control}
                                name="email"
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel>Email</FieldLabel>
                                        <Input className='h-10 px-4' placeholder="Enter your email" {...field} />
                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col gap-2.5">
                        <FieldGroup>
                            <Controller
                                control={form.control}
                                name="password"
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel>Password</FieldLabel>

                                        <div className="relative">
                                            <Input className='h-10 px-4'
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter password"
                                                {...field}
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        </div>

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </div>

                </div>
            </div>
            {/* Submit Button */}
            <div className="flex flex-col gap-4 items-center w-full">
                <ButtonWithLoadingSc
                    disabled={!isValid || isPending}
                    isLoading={isPending}
                    className={`h-12 sm:h-12.5 w-full sm:w-90 max-w-full rounded-md font-semibold text-base sm:text-lg transition-all ${form.formState.isValid
                        ? 'bg-secondary active:scale-[0.98] cursor-pointer hover:bg-secondary/90'
                        : 'bg-[#d6d6d6] text-[#787777] cursor-not-allowed'
                        }`}
                    type="submit"
                >
                    Log In
                </ButtonWithLoadingSc>

                {/* Login Link */}
                <p className="flex justify-between w-full text-sm">
                    <span className="text-gray-400">
                        New to Explore? {" "}
                        <Link className='text-black font-bold' href={"/register"}>
                            Sign Up
                        </Link>
                    </span>
                    <Link
                        href="#"
                        className="text-gray-400 font-semibold hover:underline transition-all"
                        onClick={(e) => {
                            e.preventDefault();
                            alert('Navigate to login page');
                        }}
                    >
                        Forgot password?
                    </Link>
                </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2.5 w-full">
                <div className="flex-1 h-px bg-[#787777]" />
                <span className="text-base text-[#1d1a1a]">Or</span>
                <div className="flex-1 h-px bg-[#787777]" />
            </div>

            {/* Google Sign Up Button */}
            <div className="flex justify-center">
                <Link href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}>
                    <GoogleButton className="h-12 border-black cursor-pointer sm:h-12.5 w-full sm:w-90 max-w-full rounded-md font-semibold text-base sm:text-lg transition-all" variant="outline" />
                </Link>
            </div>
        </form>
    )
}