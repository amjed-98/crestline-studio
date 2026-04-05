import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariants = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
};

type LinkButtonProps = SharedProps & {
  href: string;
};

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variantClasses: Record<ButtonVariants, string> = {
  primary:
    "bg-ink text-canvas hover:bg-ink/90",
  secondary:
    "border border-line bg-panel text-ink hover:bg-paper",
  ghost:
    "bg-transparent text-ink hover:bg-paper",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300";

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const className = cn(baseClassName, variantClasses[props.variant ?? "primary"], props.className);

  if (typeof props.href === "string") {
    const { children, href } = props;
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", className: _className, variant: _variant, ...rest } = props;
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}
