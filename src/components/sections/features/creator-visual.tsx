import Image from "next/image";
import {
  HappyStudentsCard,
  TotalRevenueCard,
  YearToDateCard,
} from "@/components/sections/features/feature-cards";

export function CreatorVisual() {
  return (
    <div
      data-animate="stagger"
      data-each="0.12"
      className="relative mx-auto aspect-[541/596] w-full max-w-[541px] xl:mx-0"
    >
      <TotalRevenueCard data-preset="from-left" className="top-[7.38%] left-0" />
      <YearToDateCard data-preset="from-left" className="top-[32.55%] left-0" />
      <Image
        src="/images/features/creator.png"
        alt="Course creator with headphones holding a tablet"
        width={579}
        height={719}
        sizes="(min-width: 640px) 579px, 107vw"
        data-preset="scale-in"
        className="absolute top-[-0.5%] left-[1.29%] w-[107.02%] max-w-none"
      />
      <HappyStudentsCard data-preset="from-right" className="top-[69.3%] left-[52.31%]" />
      <Image
        src="/images/features/squiggle-lime-b.png"
        alt=""
        width={217}
        height={216}
        data-preset="fade"
        data-float=""
        className="pointer-events-none absolute top-[19.13%] left-[56.01%] h-auto w-[40.11%]"
      />
    </div>
  );
}
