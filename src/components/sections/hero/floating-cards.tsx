import Image from "next/image";
import type { ReactNode } from "react";

const avatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/hero/avatar-${n}.png`);

function FloatingCard({ className, children }: { className: string; children: ReactNode }) {
  return <article className={`absolute rounded-2xl bg-white p-4 text-neutral-950 ${className}`}>{children}</article>;
}

export function LearningProgressCard({ className }: { className: string }) {
  return (
    <FloatingCard className={className}>
      <p className="text-[14px] leading-[1.2] font-medium">Learning Progress</p>
      <p className="mt-2 font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.01em]">55%</p>
      <div className="mt-2 h-2 w-[200px] overflow-hidden rounded-3xl bg-[#f6f6f6]">
        <div className="h-full w-[112px] rounded-3xl bg-secondary-400" />
      </div>
    </FloatingCard>
  );
}

export function HappyStudentsCard({ className }: { className: string }) {
  return (
    <FloatingCard className={className}>
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
    </FloatingCard>
  );
}

export function CourseStatsCard({ className }: { className: string }) {
  return (
    <FloatingCard className={className}>
      <p className="text-[16px] leading-[1.2] font-medium">UI/UX Design</p>
      <p className="flex items-center gap-2 text-[12px] leading-[1.6] text-neutral-400">
        200 Courses
        <span className="text-[10px] leading-[1.5]" aria-hidden="true">
          •
        </span>
        1000+ Students
      </p>
    </FloatingCard>
  );
}
