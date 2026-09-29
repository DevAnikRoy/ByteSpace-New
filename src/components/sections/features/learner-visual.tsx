import Image from "next/image";
import { CourseCard } from "@/components/sections/courses/course-card";
import { courses } from "@/components/sections/courses/courses-data";
import { LearningProgressCard } from "@/components/sections/features/feature-cards";

export function LearnerVisual() {
  return (
    <div className="relative mx-auto aspect-[621/552] w-full max-w-[621px] xl:mx-0 xl:w-[621px] xl:max-w-none">
      <div className="absolute top-0 left-0 w-[373px] origin-top-left scale-[0.56] min-[480px]:scale-75 sm:scale-100">
        <CourseCard course={courses[0]} />
      </div>
      <Image
        src="/images/features/learner.png"
        alt="Student with headphones holding a laptop"
        width={703}
        height={688}
        sizes="(min-width: 640px) 703px, 113vw"
        className="absolute top-[1.63%] left-[-3.38%] w-[113.2%] max-w-none"
      />
      <LearningProgressCard className="top-[38.59%] left-[55.56%]" />
      <Image
        src="/images/features/squiggle-lime-a.png"
        alt=""
        width={217}
        height={216}
        className="pointer-events-none absolute top-[12.14%] left-[65.06%] h-auto w-[34.94%]"
      />
    </div>
  );
}
