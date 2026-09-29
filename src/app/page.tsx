import { Categories } from "@/components/sections/categories";
import { Courses } from "@/components/sections/courses/courses";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features/features";
import { Hero } from "@/components/sections/hero/hero";
import { Partners } from "@/components/sections/partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Courses />
      <Categories />
      <Features />
      <Cta />
    </main>
  );
}
