import Image from "next/image";

const glows = [
  "-top-[241px] left-[842px] size-[1137px] opacity-40 [--glow:#cbfc01]",
  "-top-[138px] left-[395px] size-[672px] opacity-60 [--glow:#cbfc01]",
  "top-[149px] -left-[442px] size-[1137px] opacity-24 [--glow:#003be2]",
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/avatar-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/avatar-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/avatar-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="relative isolate overflow-hidden bg-[#fafafa]">
      <div aria-hidden="true" className="absolute inset-y-0 left-1/2 -z-10 w-[1440px] -translate-x-1/2">
        {glows.map((glow) => (
          <div key={glow} className={`glow absolute ${glow}`} />
        ))}
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:pt-[74px] lg:pb-[59px] xl:px-[118px]">
        <div className="max-w-[1200px] gap-10 xl:flex xl:items-end xl:justify-between">
          <h2
            id="testimonials-title"
            className="max-w-[577px] font-heading xl:shrink-0 text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-[40px] lg:text-[44px]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="mt-6 max-w-[580px] text-[16px] leading-[1.6] text-muted sm:text-[18px] xl:mt-0">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap items-start justify-center gap-6 lg:mt-[73px] xl:gap-[41px]">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="w-full rounded-3xl bg-white p-6 md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-82px)/3)]"
            >
              <figure>
                <Image src={item.avatar} alt="" width={80} height={80} className="rounded-full" />
                <figcaption className="mt-6">
                  <p className="font-heading text-[20px] leading-7 font-semibold tracking-[-0.01em] text-black">
                    {item.name}
                  </p>
                  <p className="text-[16px] leading-[1.6] text-primary-800 sm:text-[18px]">{item.role}</p>
                </figcaption>
                <blockquote className="mt-6 text-[16px] leading-[1.6] text-muted sm:text-[18px]">
                  <p>&quot;{item.quote}&quot;</p>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
