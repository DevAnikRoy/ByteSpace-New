import Image from "next/image";
import { Header } from "@/components/header";

const avatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/hero/avatar-${n}.png`);

const card = "absolute rounded-2xl bg-white p-4 text-neutral-950";

const shapes = [
  {
    src: "/images/hero/shape-squiggle-lime.png",
    width: 267,
    height: 387,
    className:
      "-left-[4%] top-[4%] w-[22%] sm:w-[20%] lg:left-0 lg:top-[221px] lg:w-[267px]",
  },
  {
    src: "/images/hero/shape-squiggle-white-sm.png",
    width: 177,
    height: 176,
    className:
      "hidden sm:block sm:left-[6%] sm:top-[40%] sm:w-[13%] lg:left-[183px] lg:top-[477px] lg:w-[177px]",
  },
  {
    src: "/images/hero/shape-ring.png",
    width: 346,
    height: 343,
    className:
      "-left-[6%] bottom-[22%] w-[24%] sm:w-[22%] lg:left-[14px] lg:top-[681px] lg:bottom-auto lg:w-[346px]",
  },
  {
    src: "/images/hero/shape-cylinder-lime.png",
    width: 213,
    height: 372,
    className:
      "hidden sm:block sm:right-0 sm:top-0 sm:w-[14%] lg:right-auto lg:left-[1227px] lg:top-[220px] lg:w-[213px]",
  },
  {
    src: "/images/hero/shape-pyramid.png",
    width: 190,
    height: 189,
    className:
      "right-[2%] top-[6%] w-[16%] sm:right-[14%] sm:w-[13%] lg:right-auto lg:left-[1104px] lg:top-[463px] lg:w-[190px]",
  },
  {
    src: "/images/hero/shape-squiggle-white-lg.png",
    width: 316,
    height: 332,
    className:
      "-right-[5%] bottom-[20%] w-[24%] sm:w-[22%] lg:right-auto lg:left-[1124px] lg:top-[672px] lg:bottom-auto lg:w-[316px]",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-800 text-white lg:h-[1024px]">
      <div className="hero-grid pointer-events-none absolute inset-y-0 -z-10" aria-hidden="true" />
      <Header />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-6 text-center sm:px-10 sm:pt-8 lg:pt-[49px]">
        <h1 className="mx-auto max-w-[935px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[52px] lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[819px] text-[16px] leading-[1.6] text-neutral-100 sm:mt-8 sm:text-[18px] lg:mt-[31px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          action="/"
          role="search"
          className="mx-auto mt-8 flex w-full max-w-[581px] items-start gap-3 sm:gap-4 lg:mt-[60px]"
        >
          <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-[24px] bg-white px-5 sm:px-6">
            <span className="sr-only">Search courses</span>
            <Image src="/icons/search.png" alt="" width={24} height={24} className="shrink-0" />
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full min-w-0 bg-transparent text-[16px] leading-[1.6] text-neutral-950 outline-none placeholder:text-neutral-400 sm:text-[18px]"
            />
          </label>
          <button
            type="submit"
            className="h-[46px] shrink-0 rounded-[24px] bg-secondary-400 px-5 text-[16px] leading-[1.2] font-medium text-neutral-950 transition-colors hover:bg-secondary-300 sm:px-6 sm:text-[18px]"
          >
            Search
          </button>
        </form>
      </div>

      <div className="relative mx-auto mt-6 h-[400px] w-full max-w-[640px] sm:mt-10 sm:h-[560px] lg:absolute lg:top-0 lg:left-1/2 lg:mt-0 lg:h-[1024px] lg:w-[1440px] lg:max-w-none lg:-translate-x-1/2">
        <div
          aria-hidden="true"
          className="hero-ring absolute top-[22%] left-1/2 aspect-square w-[150%] -translate-x-1/2 sm:top-[26%] sm:w-[135%] lg:top-[582px] lg:left-[145px] lg:w-[1149px] lg:translate-x-0"
        />

        <Image
          src="/images/hero/hero-student.png"
          alt="Student wearing headphones and holding a laptop"
          width={722}
          height={515}
          priority
          sizes="(min-width: 1024px) 722px, 100vw"
          className="absolute bottom-0 left-[-3%] w-[112%] max-w-none lg:top-[509px] lg:bottom-auto lg:left-[410px] lg:w-[722px]"
        />

        <article
          className={`${card} top-[30%] right-[3%] w-[232px] origin-top-right scale-[0.62] sm:top-[24%] sm:right-[4%] sm:scale-[0.85] lg:top-[651px] lg:right-auto lg:left-[842px] lg:origin-top-left lg:scale-100`}
        >
          <p className="text-[14px] leading-[1.2] font-medium">Learning Progress</p>
          <p className="mt-2 font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.01em]">55%</p>
          <div className="mt-2 h-2 w-[200px] overflow-hidden rounded-3xl bg-[#f6f6f6]">
            <div className="h-full w-[112px] rounded-3xl bg-secondary-400" />
          </div>
        </article>

        <article
          className={`${card} bottom-[6%] left-[3%] w-[258px] origin-bottom-left scale-[0.62] sm:bottom-[10%] sm:left-[4%] sm:scale-[0.85] lg:top-[837px] lg:bottom-auto lg:left-[328px] lg:origin-top-left lg:scale-100`}
        >
          <p className="text-[16px] leading-[1.2] font-medium">Happy Students</p>
          <p className="flex items-center text-[12px] leading-[1.6] text-neutral-400">
            4.5 (240)
            <Image src="/icons/star.png" alt="" width={16} height={16} className="ml-0.5" />
          </p>
          <div className="mt-2 flex">
            {avatars.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={43}
                height={43}
                className={`h-[43px] w-[43px] rounded-full ${index === 0 ? "" : "-ml-4"}`}
              />
            ))}
            <span className="-ml-4 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-secondary-400 text-[12px] leading-normal font-bold">
              2K+
            </span>
          </div>
        </article>

        {shapes.map((shape) => (
          <Image
            key={shape.src}
            src={shape.src}
            alt=""
            width={shape.width}
            height={shape.height}
            className={`pointer-events-none absolute h-auto ${shape.className}`}
          />
        ))}

        <article
          className={`${card} top-[18%] left-[3%] w-[208px] origin-top-left scale-[0.62] sm:top-[16%] sm:left-[4%] sm:scale-[0.85] lg:top-[639px] lg:left-[404px] lg:scale-100`}
        >
          <p className="text-[16px] leading-[1.2] font-medium">UI/UX Design</p>
          <p className="flex items-center gap-2 text-[12px] leading-[1.6] text-neutral-400">
            200 Courses
            <span className="text-[10px] leading-[1.5]" aria-hidden="true">
              •
            </span>
            1000+ Students
          </p>
        </article>
      </div>
    </section>
  );
}
