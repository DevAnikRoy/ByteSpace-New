"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { AuthError, AuthSubmit } from "@/components/auth/auth-card";
import { TextField } from "@/components/auth/text-field";
import { authErrorMessage, signUp } from "@/lib/firebase";

export function SignupForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError(null);
    startTransition(async () => {
      try {
        await signUp(String(data.get("name")).trim(), String(data.get("email")), String(data.get("password")));
        router.push("/");
      } catch (err) {
        setError(authErrorMessage(err));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col lg:mt-10">
      <div className="space-y-6">
        <TextField label="Full Name" name="name" autoComplete="name" placeholder="Jamie Davis" required />
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="designer@example.com"
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="********"
          minLength={6}
          required
        />
      </div>
      <AuthError message={error} />
      <AuthSubmit pending={pending}>Continue</AuthSubmit>
    </form>
  );
}
