import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-accent/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-deep",
        className,
      )}
    >
      {children}
    </span>
  );
}
