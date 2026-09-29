import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function AuthLayout({
  title,
  description,
  visual,
  children,
}: {
  title: string;
  description: string;
  visual: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-primary-800 text-neutral-50">
      <div className="grid-lines pointer-events-none absolute inset-y-0 -z-10" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-5 pt-6 pb-12 sm:px-10 lg:pt-[35px] lg:pb-[120px] xl:pr-page xl:pl-[122px]">
        <Link href="/" className="flex w-fit">
          <Image src="/icons/logo-mark.png" alt="ByteSpace home" width={29} height={32} loading="eager" />
        </Link>

        <div className="mt-8 grid gap-10 lg:mt-[53px] lg:grid-cols-[minmax(0,1fr)_minmax(0,579px)]">
          <div>
            <div className="lg:min-h-[127px]">
              <p className="font-heading text-[20px] leading-[1.2] font-semibold tracking-[-0.01em]">{title}</p>
              <p className="mt-4 max-w-[475px] text-[16px] leading-[1.6] sm:text-[18px]">{description}</p>
            </div>
            {visual}
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
