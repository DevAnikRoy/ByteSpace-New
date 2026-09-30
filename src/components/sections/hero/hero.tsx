import { Header } from "@/components/layout/header";
import { HeroVisual } from "@/components/sections/hero/hero-visual";
import { SearchForm } from "@/components/sections/hero/search-form";

export function Hero() {
  return (
    <section data-intro className="relative isolate overflow-hidden bg-primary-800 text-white lg:h-[1024px]">
      <div className="grid-lines pointer-events-none absolute inset-y-0 -z-10" aria-hidden="true" />
      <Header />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-6 text-center sm:px-10 sm:pt-8 lg:pt-[49px]">
        <h1
          data-animate="fade-up"
          data-at="0.1"
          className="mx-auto max-w-[935px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[52px] lg:text-[72px]"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p
          data-animate="fade-up"
          data-at="0.25"
          className="mx-auto mt-5 max-w-[819px] text-[16px] leading-[1.6] text-neutral-100 sm:mt-8 sm:text-[18px] lg:mt-[31px]"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <SearchForm />
      </div>

      <HeroVisual />
    </section>
  );
}
