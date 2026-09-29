import Link from "next/link";
import type { ReactNode } from "react";

export function AuthCard({
  eyebrow,
  title,
  className = "",
  children,
}: {
  eyebrow: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`flex flex-col rounded-3xl bg-white px-5 py-8 text-neutral-950 sm:px-10 sm:py-12 lg:min-h-[784px] lg:px-[63px] lg:pt-[61px] ${className}`}
    >
      <p className="text-[16px] leading-[1.6] text-primary-800 sm:text-[18px]">{eyebrow}</p>
      <h1 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[40px] lg:text-[44px]">
        {title}
      </h1>
      {children}
    </section>
  );
}

export function AuthSubmit({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="mt-6 h-[46px] self-end rounded-3xl bg-secondary-400 px-6 text-[18px] leading-[1.2] font-medium transition-colors hover:bg-secondary-300"
    >
      {children}
    </button>
  );
}

export function AuthSwitch({
  prompt,
  href,
  label,
  className = "",
}: {
  prompt: string;
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <p className={`mt-auto pt-10 text-center text-[16px] leading-[1.6] ${className}`}>
      {prompt}{" "}
      <Link href={href} className="text-primary-800 hover:underline">
        {label}
      </Link>
    </p>
  );
}
