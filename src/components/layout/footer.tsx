import Image from "next/image";
import Link from "next/link";

const linkColumns = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/#courses" },
      { label: "Featured Categories", href: "/#courses" },
      { label: "Business", href: "/#courses" },
      { label: "IT", href: "/#courses" },
      { label: "Design", href: "/#courses" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/#courses" },
      { label: "Marketing", href: "/#courses" },
      { label: "Photography", href: "/#courses" },
      { label: "Finance", href: "/#courses" },
      { label: "Sport", href: "/#courses" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/signup" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-10 sm:px-10 lg:pt-[70px] lg:pb-[47px] xl:px-page">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
          <div className="max-w-[528px]">
            <Link href="/" className="flex w-fit">
              <Image src="/icons/logo-dark.png" alt="ByteSpace" width={171} height={37} />
            </Link>
            <p className="mt-4 text-[14px] leading-[1.6]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form action="/" className="mt-[45px] flex max-w-[504px] items-start gap-3 sm:gap-6">
              <label className="min-w-0 flex-1 sm:flex-none">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="h-[52px] w-full rounded-full border border-neutral-200 bg-white px-6 text-[16px] leading-[1.6] text-neutral-950 outline-none placeholder:text-neutral-950 focus:border-primary-800 sm:w-[376px]"
                />
              </label>
              <button
                type="submit"
                className="h-[46px] shrink-0 rounded-3xl bg-secondary-400 px-6 text-[18px] leading-[1.2] font-medium text-neutral-950 transition-colors hover:bg-secondary-300"
              >
                Search
              </button>
            </form>
            <p className="mt-6 max-w-[504px] text-[12px] leading-[1.6]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-[repeat(3,167px)]"
          >
            {linkColumns.map((column) => (
              <div key={column.title}>
                <h2 className="sr-only">{column.title}</h2>
                <ul className="flex flex-col gap-[15.6px] text-[14px] leading-[1.6] xl:mt-12">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-colors hover:text-primary-800">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-[22px] text-[12px] leading-[1.6] sm:flex-row sm:items-center sm:justify-between xl:mt-[130px]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((label) => (
              <li key={label}>
                <Link href="#" className="transition-colors hover:text-primary-800">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
