import { ButtonWithLoadingSc } from "@/components/button-with-loading.component";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { isValid } from "zod/v3";
import { GoogleButton } from "../../components/google-button.component";
import useRegister from "../hooks/use-register.hook";
import { RegisterFormSchemaType, registerFormSchema } from "../schemas/register-form.schema";

export default function RegisterForm() {
    const { mutate, isPending } = useRegister();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<RegisterFormSchemaType>({
        resolver: zodResolver(registerFormSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            phone: "",
            first_name: "",
            last_name: "",
        },
    });

    const onSubmit = (data: RegisterFormSchemaType) => {
        mutate(data);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 lg:gap-12">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#1d1a1a] text-center">
                Sign Up
            </h1>

            {/* Form Fields */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-9">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-6 lg:gap-8">
                    {/* Email */}
                    <div className="flex flex-col gap-2.5">
                        {/* EMAIL */}
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

                    {/* Phone Number */}
                    <div className="flex flex-col gap-2.5">
                        <FieldGroup>
                            <Controller
                                control={form.control}
                                name="phone"
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel>Phone Number</FieldLabel>
                                        <Input className='h-10 px-4' placeholder="+62xxxxxxxxxx" {...field} />

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </div>
                </div>
                {/* Vertical Divider - Only visible on large screens */}
                <div className="hidden lg:block w-px bg-[#787777] self-stretch" />

                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-6 lg:gap-8">
                    {/* First Name */}
                    <div className="flex flex-col gap-2.5">
                        <FieldGroup>
                            <Controller
                                control={form.control}
                                name="first_name"
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel>First Name</FieldLabel>
                                        <Input className='h-10 px-4' placeholder="First name" {...field} />

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </div>

                    {/* Last Name */}
                    <FieldGroup>
                        <Controller
                            control={form.control}
                            name="last_name"
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Last Name</FieldLabel>
                                    <Input className='h-10 px-4' placeholder="Last name" {...field} />

                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </div>
            </div>
            {/* Submit Button */}
            <div className="flex flex-col gap-4 items-center w-full">

                <div className="w-90 h-12">
                    <ButtonWithLoadingSc
                        disabled={!isValid || isPending}
                        isLoading={isPending}
                        className={`h-12 sm:h-12.5 w-full sm:w-90 max-w-full rounded-md font-semibold text-base sm:text-lg transition-all ${form.formState.isValid
                            ? 'bg-secondary active:scale-[0.98] cursor-pointer hover:bg-secondary/90'
                            : 'bg-[#d6d6d6] text-[#787777] cursor-not-allowed'
                            }`}
                        type="submit"
                    >
                        Sign Up
                    </ButtonWithLoadingSc>
                </div>

                {/* Login Link */}
                <p className="text-sm">
                    <span className="text-[#787777]">Already Have An Account? </span>
                    <Link
                        href="/login"
                        className="text-[#1d1a1a] font-semibold hover:underline transition-all"
                    >
                        Log In
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