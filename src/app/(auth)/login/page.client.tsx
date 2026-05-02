"use client"
import LoginForm from '@/features/auth/login/components/login-form.component';

type SignUpFormData = {
  email: string;
  password: string;
};



export default function PageClient() {
  return <>
    {/* Main Sign In Card */}
    <div className="bg-white rounded-lg shadow-2xl w-full max-w-[90%] flex justify-center sm:max-w-2xl lg:max-w-4xl p-6 sm:p-8 lg:p-12">
      <LoginForm />
    </div>
  </>;
}
