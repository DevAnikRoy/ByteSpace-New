"use client";

import type { FormEvent } from "react";
import { AuthSubmit } from "@/components/auth/auth-card";
import { TextField } from "@/components/auth/text-field";

export function LoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      <AuthSubmit>Sign In</AuthSubmit>
    </form>
  );
}
