import type { ComponentProps } from "react";

export function TextField({ label, ...inputProps }: { label: string } & ComponentProps<"input">) {
  return (
    <label className="block">
      <span className="block text-[14px] leading-[1.2] font-medium text-neutral-950">{label}</span>
      <input
        {...inputProps}
        className="mt-2 block h-[52px] w-full rounded-xl border border-neutral-100 bg-white px-6 text-[16px] leading-[1.6] text-neutral-950 outline-none placeholder:text-neutral-400 focus:border-primary-800 sm:text-[18px]"
      />
    </label>
  );
}
