"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", active: true },
  { href: "#courses", label: "Courses" },
  { href: "#creators", label: "Creators" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:h-[96px] sm:px-10 lg:h-[120px] lg:items-start lg:pt-[35px] xl:pr-page xl:pl-[122px]">
        <Link href="/" aria-label="ByteSpace home" className="shrink-0">
          <Image
            src="/icons/logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            priority
            className="h-auto w-[140px] sm:w-[171px]"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-start gap-6 lg:top-[47px] lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={
                link.active
                  ? "text-[16px] leading-[19.2px] font-medium text-neutral-50"
                  : "text-[16px] leading-[25.6px] text-neutral-50 transition-opacity hover:opacity-80"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:mt-[13px] lg:flex">
          <Link href="/login" className="text-[16px] leading-6 text-neutral-50 hover:opacity-80">
            Sign In
          </Link>
          <Link href="/signup" className="text-[16px] leading-6 text-neutral-50 hover:opacity-80">
            Join Us
          </Link>
          <button type="button" aria-label="Cart" className="h-6 w-6">
            <Image src="/icons/bag.png" alt="" width={24} height={24} />
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          className="absolute inset-x-0 top-full border-t border-white/10 bg-primary-800 px-5 py-4 sm:px-10 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-2 py-2.5 text-[16px] text-neutral-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="rounded-lg px-2 py-2.5 text-[16px] text-neutral-50">
              Sign In
            </Link>
            <Link href="/signup" className="rounded-lg px-2 py-2.5 text-[16px] text-neutral-50">
              Join Us
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
