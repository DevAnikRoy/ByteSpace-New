import type { Metadata } from "next";
import { AuthCard, AuthSwitch } from "@/components/auth/auth-card";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthVisual } from "@/components/auth/auth-visual";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Create an Account",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      visual={<AuthVisual />}
    >
      <AuthCard eyebrow="Create an Account" title="Welcome to ByteSpace" className="lg:pb-[51px]">
        <SignupForm />
        <AuthSwitch prompt="Already have an account?" href="/login" label="Login" className="text-neutral-700" />
      </AuthCard>
    </AuthLayout>
  );
}
