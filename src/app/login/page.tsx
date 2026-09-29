import type { Metadata } from "next";
import { AuthCard, AuthSwitch } from "@/components/auth/auth-card";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthVisual } from "@/components/auth/auth-visual";
import { LoginForm } from "@/components/auth/login-form";
import { SocialLogin } from "@/components/auth/social-login";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      visual={<AuthVisual />}
    >
      <AuthCard eyebrow="Sign In" title="Welcome Back" className="lg:pb-10">
        <LoginForm />
        <SocialLogin />
        <AuthSwitch prompt="New user?" href="/signup" label="Create an account" className="text-[#888888]" />
      </AuthCard>
    </AuthLayout>
  );
}
