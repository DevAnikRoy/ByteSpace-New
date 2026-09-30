import Image from "next/image";
import type { CSSProperties } from "react";

const partners = [
  { src: "/images/partners/partner-1.png", width: 167, height: 41 },
  { src: "/images/partners/partner-2.png", width: 168, height: 41 },
  { src: "/images/partners/partner-3.png", width: 170, height: 41 },
  { src: "/images/partners/partner-4.png", width: 170, height: 41 },
  { src: "/images/partners/partner-5.png", width: 169, height: 42 },
];

const copies = [0, 1, 2, 3];

export function Partners() {
  return (
    <section aria-label="Our partners" className="overflow-hidden bg-neutral-50 py-12 sm:py-16 lg:py-20">
      <div data-animate="marquee" className="mx-auto flex max-w-[1440px] motion-safe:w-max motion-safe:max-w-none">
        {copies.map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0 || undefined}
            data-marquee-copy={copy > 0 || undefined}
            className={`items-center gap-x-10 sm:gap-x-12 xl:gap-x-[72px] motion-safe:shrink-0 motion-safe:pr-10 sm:motion-safe:pr-12 xl:motion-safe:pr-[72px] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-8 motion-reduce:px-5 sm:motion-reduce:px-10 ${
              copy > 0 ? "hidden motion-safe:flex" : "flex"
            }`}
          >
            {partners.map((logo) => (
              <li key={logo.src}>
                <Image
                  src={logo.src}
                  alt={copy > 0 ? "" : "Logoipsum"}
                  width={logo.width}
                  height={logo.height}
                  style={{ "--logo-w": `${logo.width}px`, "--logo-h": `${logo.height}px` } as CSSProperties}
                  className="h-[30px] w-auto sm:h-[34px] xl:h-(--logo-h) xl:w-(--logo-w)"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
