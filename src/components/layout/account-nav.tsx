"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/auth-provider";
import { authLinks } from "@/components/layout/nav-links";

export function AccountNav({ itemClassName, onNavigate }: { itemClassName: string; onNavigate?: () => void }) {
  const { account, ready } = useAuth();
  const className = ready ? itemClassName : `${itemClassName} invisible`;

  async function handleSignOut() {
    const { signOutAccount } = await import("@/lib/firebase");
    await signOutAccount();
    onNavigate?.();
  }

  if (!account) {
    return authLinks.map((link) => (
      <Link key={link.href} href={link.href} className={className} onClick={onNavigate}>
        {link.label}
      </Link>
    ));
  }

  return (
    <>
      <span className={`${className} pointer-events-none`}>Hi, {account.name.split(" ")[0]}</span>
      <button type="button" onClick={handleSignOut} className={`${className} cursor-pointer text-left`}>
        Sign Out
      </button>
    </>
  );
}
