import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <main>
        <section className="relative isolate overflow-hidden bg-primary-800 text-white lg:h-[957px]">
          <div className="grid-lines pointer-events-none absolute inset-y-0 -z-10" aria-hidden="true" />
          <Header />

          <div className="mx-auto max-w-[1440px] px-5 pt-6 pb-20 text-center sm:px-10 lg:pt-10 lg:pb-0">
            <p
              aria-hidden="true"
              className="text-fade mb-[-0.248em] font-heading text-[160px] leading-none font-semibold tracking-[-0.01em] sm:text-[300px] lg:text-[480px]"
            >
              404
            </p>
            <h1 className="relative mx-auto max-w-[935px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] text-balance sm:text-[52px] lg:text-[72px] lg:text-wrap">
              The page you are looking for doesn’t exist
            </h1>
            <p className="mx-auto mt-5 max-w-[486px] text-[16px] leading-[1.6] text-neutral-100 sm:text-[18px] lg:mt-8">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex h-[46px] items-center rounded-3xl bg-secondary-400 px-6 text-[18px] leading-[1.2] font-medium text-neutral-950 transition-colors hover:bg-secondary-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
