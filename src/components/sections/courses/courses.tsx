import { CategoryTabs } from "@/components/sections/courses/category-tabs";
import { CourseCard } from "@/components/sections/courses/course-card";
import { categoryRows, courses } from "@/components/sections/courses/courses-data";

export function Courses() {
  return (
    <section id="courses" className="bg-white py-14 sm:py-16 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 xl:px-page">
        <div data-animate="stagger" data-each="0.12" className="text-center">
          <h2 className="mx-auto max-w-[588px] font-heading text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px] lg:text-[44px]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-[917px] text-[16px] leading-[1.6] text-neutral-400 sm:text-[18px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
            different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div
          data-animate="stagger"
          data-stagger="button"
          data-preset="pop"
          data-each="0.04"
          className="mt-8 lg:mt-[44px]"
        >
          <CategoryTabs rows={categoryRows} />
        </div>

        <ul data-animate="batch" className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[76px] lg:gap-10 xl:grid-cols-3">
          {courses.map((course) => (
            <li key={course.title}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
