import Image from "next/image";
import { ShowcaseCourseCard } from "@/components/sections/courses/course-card";
import { courses } from "@/components/sections/courses/courses-data";

const avatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/hero/avatar-${n}.png`);

function HappyStudentsCard() {
  return (
    <article className="absolute top-[435px] left-[253px] w-[258px] rounded-2xl bg-secondary-400 p-4 text-neutral-950">
      <p className="text-[16px] leading-6 font-medium">Happy Students</p>
      <p className="flex h-4 items-center text-[10px] leading-[15px] text-neutral-800">
        4.5 (240)
        <Image src="/icons/star-blue.png" alt="" width={16} height={16} />
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
        <span className="-ml-4 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-neutral-950 text-[12px] leading-[18px] font-bold text-neutral-50">
          2K+
        </span>
      </div>
    </article>
  );
}

export function AuthVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-[58px] -mb-[246px] -ml-[27px] hidden h-[585px] w-[552px] origin-top-left scale-[0.58] lg:block min-[1280px]:-mb-[117px] min-[1280px]:scale-[0.8] min-[1440px]:mb-0 min-[1440px]:scale-100"
    >
      <div className="absolute top-[89px] left-[27px] w-[373px]">
        <ShowcaseCourseCard course={courses[1]} />
      </div>
      <div className="absolute top-0 left-[138px] w-[373px]">
        <ShowcaseCourseCard course={courses[2]} />
      </div>
      <HappyStudentsCard />
      <Image
        src="/images/cta/squiggle-white.png"
        alt=""
        width={177}
        height={176}
        className="absolute top-[321px] left-[375px]"
      />
      <Image src="/images/auth/ring-lime.png" alt="" width={148} height={147} className="absolute top-[15px] left-[54px]" />
      <Image
        src="/images/cta/pyramid-lime.png"
        alt=""
        width={190}
        height={189}
        className="absolute top-[396px] left-0"
      />
    </div>
  );
}
