"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

import { Brand } from "./brand";
import { UsFlag } from "./us-flag";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  // See-through over the dark hero; solid once scrolled or with the menu open
  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        solid
          ? "bg-white/90 shadow-[0_1px_0_0_rgb(15_23_42/0.06),0_8px_24px_-12px_rgb(15_23_42/0.18)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="Philad Tax Advisors, back to top" className="rounded-xl">
          <Brand tone={solid ? "dark" : "light"} />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                    solid
                      ? "hover:text-primary-900 text-slate-600 hover:bg-slate-100"
                      : "text-primary-100 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="bg-secondary-500 text-primary-900 hover:bg-secondary-400 hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors sm:inline-flex"
          >
            Get started
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <span
            title="Serving clients across the United States"
            className={cn(
              "grid place-items-center rounded-xs p-0.5 transition-colors",
              solid ? "bg-white ring-1 ring-slate-200" : "",
            )}
          >
            <UsFlag className="h-7 w-9 rounded-xs" />
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "grid size-11 place-items-center rounded-full transition-colors lg:hidden",
              solid ? "text-primary-900 hover:bg-slate-100" : "text-white hover:bg-white/10",
            )}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t bg-white lg:hidden"
          >
            <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-primary-900 block rounded-lg px-3 py-3 text-base font-medium hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-secondary-500 text-primary-900 hover:bg-secondary-400 flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold"
                >
                  Request a consultation
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
