import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Design", icon: "/icons/categories/design.png" },
  { label: "Development", icon: "/icons/categories/development.png" },
  { label: "IT & Software", icon: "/icons/categories/it-software.png" },
  { label: "Business", icon: "/icons/categories/business.png" },
  { label: "Marketing", icon: "/icons/categories/marketing.png" },
  { label: "Photography", icon: "/icons/categories/photography.png" },
];

export function Categories() {
  return (
    <section aria-labelledby="categories-title" className="bg-white pb-16 sm:pb-20 lg:pb-[120px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 xl:px-page">
        <div className="text-center">
          <h2
            id="categories-title"
            className="mx-auto max-w-[792px] font-heading text-balance text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[32px] lg:text-[36px]"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-4 max-w-[917px] text-[16px] leading-[1.6] text-neutral-400 sm:text-[18px]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
            various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully
            curated categories.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-[68px] lg:grid-cols-6 xl:gap-10">
          {categories.map((category) => (
            <li key={category.label}>
              <Link
                href="#courses"
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 transition-colors hover:border-neutral-300"
              >
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary-400">
                  <Image src={category.icon} alt="" width={36} height={36} />
                </span>
                <span className="text-[20px] leading-[1.2] font-medium text-neutral-950 lg:text-[18px] xl:text-[20px]">
                  {category.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
