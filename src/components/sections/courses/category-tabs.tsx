"use client";

import { useState } from "react";

export function CategoryTabs({ rows }: { rows: string[][] }) {
  const [selected, setSelected] = useState(rows[0][0]);

  return (
    <div
      role="group"
      aria-label="Course categories"
      className="flex flex-wrap justify-center gap-3 sm:max-[1327px]:gap-4 min-[1328px]:flex-col min-[1328px]:items-center min-[1328px]:gap-[21px]"
    >
      {rows.map((row, rowIndex) => (
        <div key={row[0]} className="contents min-[1328px]:flex min-[1328px]:gap-4">
          {row.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={category === selected}
              onClick={() => setSelected(category)}
              className={
                category === selected
                  ? "h-[43px] rounded-3xl bg-secondary-400 px-4 text-[16px] leading-[1.2] font-medium text-neutral-950"
                  : "h-[43px] rounded-3xl bg-neutral-50 px-4 text-[16px] leading-[1.2] font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              }
            >
              {category}
            </button>
          ))}
          {rowIndex === rows.length - 1 ? (
            <button type="button" className="h-[43px] text-[16px] leading-[1.2] font-medium text-primary-800 hover:underline">
              + More
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}
