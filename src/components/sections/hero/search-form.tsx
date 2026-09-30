import Image from "next/image";

export function SearchForm() {
  return (
    <form
      action="/"
      role="search"
      data-animate="fade-up"
      data-at="0.4"
      className="mx-auto mt-8 flex w-full max-w-[581px] items-start gap-3 sm:gap-4 lg:mt-[60px]"
    >
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-[24px] bg-white px-5 sm:px-6">
        <span className="sr-only">Search courses</span>
        <Image src="/icons/search.png" alt="" width={24} height={24} className="shrink-0" />
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-[16px] leading-[1.6] text-neutral-950 outline-none placeholder:text-neutral-400 sm:text-[18px]"
        />
      </label>
      <button
        type="submit"
        className="h-[46px] shrink-0 rounded-[24px] bg-secondary-400 px-5 text-[16px] leading-[1.2] font-medium text-neutral-950 transition-colors hover:bg-secondary-300 sm:px-6 sm:text-[18px]"
      >
        Search
      </button>
    </form>
  );
}
