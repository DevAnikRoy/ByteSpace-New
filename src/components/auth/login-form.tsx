"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { AuthError, AuthSubmit } from "@/components/auth/auth-card";
import { TextField } from "@/components/auth/text-field";
import { authErrorMessage, signIn } from "@/lib/firebase";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError(null);
    startTransition(async () => {
      try {
        await signIn(String(data.get("email")), String(data.get("password")));
        router.push("/");
      } catch (err) {
        setError(authErrorMessage(err));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col lg:mt-10">
      <div className="space-y-6">
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
          autoComplete="current-password"
          placeholder="********"
          required
        />
      </div>
      <AuthError message={error} />
      <AuthSubmit pending={pending}>Sign In</AuthSubmit>
    </form>
  );
}
