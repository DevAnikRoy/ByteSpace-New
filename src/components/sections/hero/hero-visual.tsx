import Image from "next/image";
import {
  CourseStatsCard,
  HappyStudentsCard,
  LearningProgressCard,
} from "@/components/sections/hero/floating-cards";
import { shapes } from "@/components/sections/hero/shapes";

export function HeroVisual() {
  return (
    <div className="relative mx-auto mt-6 h-[400px] w-full max-w-[640px] sm:mt-10 sm:h-[560px] lg:absolute lg:top-0 lg:left-1/2 lg:mt-0 lg:h-[1024px] lg:w-[1440px] lg:max-w-none lg:-translate-x-1/2">
      <div
        aria-hidden="true"
        data-animate="scale-in"
        data-at="0.3"
        className="hero-ring absolute top-[22%] left-1/2 aspect-square w-[150%] -translate-x-1/2 sm:top-[26%] sm:w-[135%] lg:top-[582px] lg:left-[145px] lg:w-[1149px] lg:translate-x-0"
      />

      <Image
        src="/images/hero/hero-student.png"
        alt="Student wearing headphones and holding a laptop"
        width={722}
        height={515}
        preload
        sizes="(min-width: 1024px) 722px, 100vw"
        data-animate="fade-up"
        data-at="0.4"
        className="absolute bottom-0 left-[-3%] w-[112%] max-w-none lg:top-[509px] lg:bottom-auto lg:left-[410px] lg:w-[722px]"
      />

      <LearningProgressCard
        data-animate="pop"
        data-at="0.75"
        className="top-[30%] right-[3%] w-[232px] origin-top-right scale-[0.62] sm:top-[24%] sm:right-[4%] sm:scale-[0.85] lg:top-[651px] lg:right-auto lg:left-[842px] lg:origin-top-left lg:scale-100"
      />
      <HappyStudentsCard
        data-animate="pop"
        data-at="0.85"
        className="bottom-[6%] left-[3%] w-[258px] origin-bottom-left scale-[0.62] sm:bottom-[10%] sm:left-[4%] sm:scale-[0.85] lg:top-[837px] lg:bottom-auto lg:left-[328px] lg:origin-top-left lg:scale-100"
      />

      {shapes.map((shape, index) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          data-animate="fade"
          data-at={0.55 + index * 0.06}
          data-float=""
          className={`pointer-events-none absolute h-auto ${shape.className}`}
        />
      ))}

      <CourseStatsCard
        data-animate="pop"
        data-at="0.65"
        className="top-[18%] left-[3%] w-[208px] origin-top-left scale-[0.62] sm:top-[16%] sm:left-[4%] sm:scale-[0.85] lg:top-[639px] lg:left-[404px] lg:scale-100"
      />
    </div>
  );
}
