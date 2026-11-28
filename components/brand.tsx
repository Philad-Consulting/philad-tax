import Image from "next/image";

import { cn } from "@/lib/utils";

/** Logo mark plus the "Philad U.S. Tax Advisors" wordmark */
export function Brand({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="grid size-10 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5">
        <Image src="/brand/mark.png" alt="" width={30} height={30} priority />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            tone === "light" ? "text-white" : "text-primary-900",
          )}
        >
          Philad U.S. Tax
        </span>
        <span
          className={cn(
            "mt-1 text-[0.65rem] font-semibold tracking-[0.22em] uppercase",
            tone === "light" ? "text-secondary-400" : "text-secondary-700",
          )}
        >
          Advisors
        </span>
      </span>
    </span>
  );
}
