import Image from "next/image";
import type { CSSProperties } from "react";

const partners = [
  { src: "/images/partners/partner-1.png", width: 167, height: 41 },
  { src: "/images/partners/partner-2.png", width: 168, height: 41 },
  { src: "/images/partners/partner-3.png", width: 170, height: 41 },
  { src: "/images/partners/partner-4.png", width: 170, height: 41 },
  { src: "/images/partners/partner-5.png", width: 169, height: 42 },
];

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-neutral-50 py-12 sm:py-16 lg:py-20">
      <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-5 sm:gap-x-12 sm:px-10 xl:gap-x-[72px]">
        {partners.map((logo) => (
          <li key={logo.src}>
            <Image
              src={logo.src}
              alt="Logoipsum"
              width={logo.width}
              height={logo.height}
              style={{ "--logo-h": `${logo.height}px` } as CSSProperties}
              className="h-[30px] w-auto sm:h-[34px] xl:h-(--logo-h)"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
