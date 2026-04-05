"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-[0.16em] uppercase">
      <svg viewBox="0 0 36 36" className="h-9 w-9 text-ink" fill="none" aria-hidden="true">
        <path d="M8 24L18 8l10 16" stroke="currentColor" strokeWidth="2.2" />
        <path d="M12 24h12" stroke="currentColor" strokeWidth="2.2" />
      </svg>
      <span>Crestline</span>
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition duration-300",
          isScrolled ? "border-b border-line/80 bg-panel/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="/contact">Start a project</Button>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel/80 md:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-ink transition",
                  isOpen ? "translate-y-[7px] rotate-45" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-5 bg-ink transition",
                  isOpen ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-0.5 w-5 bg-ink transition",
                  isOpen ? "-translate-y-[7px] -rotate-45" : "",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink text-canvas md:hidden"
          >
            <div className="shell flex min-h-screen flex-col justify-center gap-10">
              {NAV_LINKS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: 0.06 * index, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-5xl leading-none tracking-[-0.04em]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.24, duration: 0.35 }}
              >
                <Button href="/contact" className="bg-canvas text-ink" >
                  Start a project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
