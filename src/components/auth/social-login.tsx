import Image from "next/image";

const providers = [
  { name: "Facebook", icon: "/icons/facebook.png" },
  { name: "Google", icon: "/icons/google.png" },
];

export function SocialLogin() {
  return (
    <div className="mt-12 lg:mt-[73px]">
      <div className="flex items-center gap-[11px] text-[16px] leading-[1.6] text-[#888888] sm:text-[18px]">
        <span className="h-px flex-1 bg-[#d1d1d1]" />
        or
        <span className="h-px flex-1 bg-[#d1d1d1]" />
      </div>
      <ul className="mt-10 flex justify-center gap-4">
        {providers.map((provider) => (
          <li key={provider.name}>
            <button
              type="button"
              aria-label={`Sign in with ${provider.name}`}
              className="flex h-[72px] w-[72px] items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white transition-colors hover:bg-neutral-50"
            >
              <Image src={provider.icon} alt="" width={40} height={40} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
