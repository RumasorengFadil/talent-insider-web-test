"use client"
import RegisterForm from '@/features/auth/register/components/register-form.component';


export default function PageClient() {

    return <>
        {/* Main Sign Up Card */}
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-[90%] sm:max-w-2xl lg:max-w-4xl p-6 sm:p-8 lg:p-12">
            <RegisterForm />
        </div>
    </>;
}
