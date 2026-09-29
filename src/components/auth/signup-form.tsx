"use client";

import type { FormEvent } from "react";
import { AuthSubmit } from "@/components/auth/auth-card";
import { TextField } from "@/components/auth/text-field";

export function SignupForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      <AuthSubmit>Continue</AuthSubmit>
    </form>
  );
}
