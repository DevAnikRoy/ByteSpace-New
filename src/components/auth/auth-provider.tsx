"use client";

import { createContext, use, useEffect, useState, type ReactNode } from "react";
import type { Account } from "@/lib/firebase";

type AuthState = { account: Account | null; ready: boolean };

const AuthContext = createContext<AuthState>({ account: null, ready: false });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({ account: null, ready: false });

  useEffect(() => {
    let active = true;
    let unsubscribe: (() => void) | undefined;

    import("@/lib/firebase").then(({ watchAccount }) => {
      if (!active) return;
      unsubscribe = watchAccount((account) => setState({ account, ready: true }));
    });

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  return <AuthContext value={state}>{children}</AuthContext>;
}

export function useAuth() {
  return use(AuthContext);
}
