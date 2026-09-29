import Image from "next/image";
import Link from "next/link";

const shapeGroups = [
  {
    className: "top-0 right-0 h-[377px] w-[362px] origin-top-right",
    shapes: [
      { src: "/images/cta/pyramid-lime.png", width: 190, height: 189, className: "top-0 left-0" },
      { src: "/images/cta/cylinder-white.png", width: 218, height: 372, className: "top-[5px] left-[144px]" },
    ],
  },
  {
    className: "right-0 bottom-0 h-[199px] w-[333px] origin-bottom-right",
    shapes: [{ src: "/images/cta/squiggle-lime-bottom.png", width: 333, height: 199, className: "top-0 left-0" }],
  },
  {
    className: "top-0 left-0 h-[225px] w-[355px] origin-top-left",
    shapes: [
      { src: "/images/cta/squiggle-lime-top.png", width: 267, height: 225, className: "top-0 left-0" },
      { src: "/images/cta/squiggle-white.png", width: 177, height: 176, className: "top-[5px] left-[178px]" },
    ],
  },
  {
    className: "bottom-0 left-0 h-[263px] w-[362px] origin-bottom-left",
    shapes: [
      { src: "/images/cta/cone-white.png", width: 140, height: 189, className: "top-0 left-0" },
      { src: "/images/cta/ring-lime.png", width: 346, height: 190, className: "top-[73px] left-[16px]" },
    ],
  },
];

export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-primary-800 text-neutral-50">
      <div className="grid-lines pointer-events-none absolute inset-y-0 -z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {shapeGroups.map((group) => (
          <div key={group.className} className={`absolute scale-[0.32] md:scale-50 xl:scale-100 ${group.className}`}>
            {group.shapes.map((shape) => (
              <Image
                key={shape.src}
                src={shape.src}
                alt=""
                width={shape.width}
                height={shape.height}
                className={`absolute max-w-none ${shape.className}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pt-[130px] pb-[110px] text-center sm:px-10 md:py-[150px] xl:pt-[86px] xl:pb-[84px]">
        <h2
          id="cta-title"
          className="mx-auto max-w-[540px] font-heading text-balance lg:max-w-[710px] xl:text-wrap text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[40px] lg:text-[44px]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-[964px] text-[16px] leading-[1.6] sm:text-[18px] lg:mt-10">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/signup"
          className="mt-8 inline-flex h-[46px] items-center rounded-3xl bg-secondary-400 px-6 text-[18px] leading-[1.2] font-medium text-neutral-950 transition-colors hover:bg-secondary-300 lg:mt-10"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
