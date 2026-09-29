import Image from "next/image";
import type { ReactNode } from "react";

const avatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/hero/avatar-${n}.png`);

function FloatingCard({ className, children }: { className: string; children: ReactNode }) {
  return (
    <article
      className={`absolute origin-top-left scale-[0.56] rounded-2xl p-4 min-[480px]:scale-75 sm:scale-100 ${className}`}
    >
      {children}
    </article>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <span className="flex h-6 w-fit items-center rounded-3xl bg-[#cbfc01] px-2 text-[10px] leading-5 font-medium text-neutral-950">
      {children}
    </span>
  );
}

export function LearningProgressCard({ className }: { className: string }) {
  return (
    <FloatingCard className={`bg-white text-neutral-950 ${className}`}>
      <p className="text-[14px] leading-6 font-medium">Learning Progress</p>
      <p className="mt-2 font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.01em]">55%</p>
      <div className="mt-2 h-2 w-[200px] overflow-hidden rounded-3xl bg-[#f6f6f6]">
        <div className="h-full w-[112px] rounded-3xl bg-secondary-400" />
      </div>
    </FloatingCard>
  );
}

export function HappyStudentsCard({ className }: { className: string }) {
  return (
    <FloatingCard className={`w-[258px] bg-white text-neutral-950 ${className}`}>
      <p className="text-[16px] leading-6 font-medium">Happy Students</p>
      <p className="flex h-4 items-center text-[10px] leading-[15px] text-neutral-400">
        4.5 (240)
        <Image src="/icons/star.png" alt="" width={16} height={16} />
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
        <span className="-ml-4 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-secondary-400 text-[12px] leading-[18px] font-bold">
          2K+
        </span>
      </div>
    </FloatingCard>
  );
}

export function TotalRevenueCard({ className }: { className: string }) {
  return (
    <FloatingCard className={`w-[232px] bg-primary-800 text-neutral-50 ${className}`}>
      <p className="text-[16px] leading-[1.2] font-medium">Total Revenue</p>
      <p className="text-[10px] leading-[1.2]">July 1-28</p>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-heading text-[24px] leading-8 font-semibold tracking-[-0.01em]">$120.29</p>
        <Badge>+12$</Badge>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-3xl bg-white">
        <div className="h-full w-[112px] rounded-3xl bg-secondary-400" />
      </div>
    </FloatingCard>
  );
}

export function YearToDateCard({ className }: { className: string }) {
  return (
    <FloatingCard className={`w-[134px] bg-primary-800 text-neutral-50 ${className}`}>
      <p className="text-[16px] leading-[1.2] font-medium">Year to Date</p>
      <p className="text-[10px] leading-[1.2]">2023</p>
      <p className="mt-2 font-heading text-[24px] leading-8 font-semibold tracking-[-0.01em] whitespace-nowrap">
        $1,200.38
      </p>
      <div className="mt-2">
        <Badge>+12$</Badge>
      </div>
    </FloatingCard>
  );
}
