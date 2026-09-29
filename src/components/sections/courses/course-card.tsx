import Image from "next/image";
import type { Course } from "@/components/sections/courses/courses-data";

const learnerAvatars = [1, 2, 3, 4].map((n) => `/images/courses/avatar-${n}.png`);

function Chip({ children }: { children: string }) {
  return (
    <li className="flex h-[26px] items-center rounded-3xl bg-[#f6f6f6]/60 px-2 text-[11px] leading-[1.2] font-medium whitespace-nowrap text-muted backdrop-blur-sm @min-[341px]:px-3 @min-[341px]:text-[12px]">
      {children}
    </li>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-[15px] pb-5">
      <div className="@container relative aspect-[341/195] overflow-hidden rounded-xl bg-[#443131] xl:aspect-auto xl:h-[195px]">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute bottom-[18px] left-[13px] flex gap-1.5 @min-[341px]:gap-3">
          <Chip>{`${course.lessons} Lessons`}</Chip>
          <Chip>{course.duration}</Chip>
          <Chip>{`${course.comments} Comments`}</Chip>
        </ul>
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="max-w-[280px] truncate font-heading text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-black">
            {course.title}
          </h3>
          <p className="text-[12px] leading-[1.6] text-muted">
            by <span className="text-primary-800">{course.author}</span>
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-0.5 pr-px text-[18px] leading-[1.6] text-muted">
          {course.rating}
          <Image src="/icons/rating-star.png" alt="" width={24} height={24} />
          <span className="sr-only">out of 5</span>
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <p className="flex h-8 items-center gap-1 rounded-3xl bg-neutral-50 px-3 text-[12px] leading-[1.2] font-medium text-neutral-700">
          <Image src="/icons/level.png" alt="" width={20} height={20} />
          {course.level}
        </p>
        <div className="flex">
          {learnerAvatars.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className={`h-8 w-8 rounded-full ${index === 0 ? "" : "-ml-2"}`}
            />
          ))}
          <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary-400 text-[12px] leading-[20px] font-medium text-neutral-950">
            {course.learners}
          </span>
        </div>
      </div>

      <p className="mt-4 flex items-end">
        <span className="font-heading text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-primary-800">
          ${course.price}
        </span>
        <span className="text-[12px] leading-[1.6] text-muted">/lifetime</span>
      </p>
    </article>
  );
}
