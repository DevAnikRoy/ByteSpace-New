import Image from "next/image";
import { CreatorVisual } from "@/components/sections/features/creator-visual";
import { LearnerVisual } from "@/components/sections/features/learner-visual";

const glows = [
  "-bottom-[465px] left-[722px] size-[1137px] opacity-24 [--glow:#003be2]",
  "-top-[466px] -left-[152px] size-[1137px] opacity-40 [--glow:#cbfc01]",
  "top-[183px] -left-[508px] size-[1137px] opacity-16 [--glow:#003be2]",
  "-top-[458px] left-[811px] size-[1137px] opacity-8 [--glow:#003be2]",
  "-bottom-[158px] -left-[287px] size-[672px] opacity-60 [--glow:#cbfc01]",
];

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const headingClass =
  "font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-[40px] lg:text-[44px]";

export function Features() {
  return (
    <section aria-labelledby="growth-title" className="relative isolate overflow-hidden bg-[#fafafa]">
      <div aria-hidden="true" className="absolute inset-y-0 left-1/2 -z-10 w-[1440px] -translate-x-1/2">
        {glows.map((glow) => (
          <div key={glow} className={`glow absolute ${glow}`} />
        ))}
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:py-[120px] xl:px-page">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,577px)_562px] xl:justify-between">
          <div className="text-center xl:text-left">
            <h2 id="growth-title" className={`mx-auto max-w-[577px] xl:mx-0 ${headingClass}`}>
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mx-auto mt-6 max-w-[477px] text-[16px] leading-[1.6] text-neutral-700 sm:text-[18px] lg:mt-10 xl:mx-0">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
              career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>
            <dl className="mt-8 flex justify-center gap-10 sm:gap-14 lg:mt-10 xl:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-[16px] leading-[1.6] text-neutral-700 sm:text-[18px]">{stat.label}</dt>
                  <dd className="font-heading text-[30px] leading-[1.2] font-medium tracking-[-0.01em] text-primary-800 sm:text-[36px] sm:leading-[44px]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <LearnerVisual />
        </div>

        <div
          id="creators"
          className="mt-16 grid scroll-mt-8 items-center gap-12 lg:mt-[72px] xl:grid-cols-[541px_minmax(0,580px)] xl:justify-between"
        >
          <div className="text-center xl:order-last xl:text-left">
            <h2 className={`mx-auto max-w-[400px] xl:mx-0 ${headingClass}`}>Create &amp; Manage Courses Easily.</h2>
            <p className="mx-auto mt-6 max-w-[574px] text-[16px] leading-[1.6] text-neutral-700 sm:text-[18px] sm:leading-7 lg:mt-10 xl:mx-0">
              <strong className="font-bold text-neutral-950">ByteSpace</strong> supports individuals or entities in
              the creation, publication, and administration of educational courses.
            </p>
            <ul className="mx-auto mt-8 w-fit space-y-4 text-left lg:mt-[42px] xl:mx-0">
              {creatorPerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-[16px] leading-[1.2] font-medium text-neutral-950 sm:text-[18px]"
                >
                  <Image src="/icons/check-circle.png" alt="" width={24} height={24} />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <CreatorVisual />
        </div>
      </div>
    </section>
  );
}
