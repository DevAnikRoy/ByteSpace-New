import { Courses } from "@/components/sections/courses/courses";
import { Hero } from "@/components/sections/hero/hero";
import { Partners } from "@/components/sections/partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Courses />
    </main>
  );
}
