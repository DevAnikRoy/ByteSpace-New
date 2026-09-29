import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { authLinks, mainLinks } from "@/components/layout/nav-links";

const activeHref = "/";

export function Header() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:h-[96px] sm:px-10 lg:h-[120px] lg:items-start lg:pt-[35px] xl:pr-page xl:pl-[122px]">
        <Link href="/" aria-label="ByteSpace home" className="shrink-0">
          <Image
            src="/icons/logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            loading="eager"
            className="h-auto w-[140px] sm:w-[171px]"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-start gap-6 lg:top-[47px] lg:flex"
          aria-label="Primary"
        >
          {mainLinks.map((link) =>
            link.href === activeHref ? (
              <Link
                key={link.href}
                href={link.href}
                aria-current="page"
                className="text-[16px] leading-[19.2px] font-medium text-neutral-50"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] leading-[25.6px] text-neutral-50 transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-6 lg:mt-[13px] lg:flex">
          {authLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[16px] leading-6 text-neutral-50 hover:opacity-80">
              {link.label}
            </Link>
          ))}
          <button type="button" aria-label="Cart" className="h-6 w-6">
            <Image src="/icons/bag.png" alt="" width={24} height={24} />
          </button>
        </div>

        <MobileMenu links={[...mainLinks, ...authLinks]} />
      </div>
    </header>
  );
}
