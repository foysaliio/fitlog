"use client";

import { ArrowUp, Dumbbell } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-5 border-t border-[#1a1d24] bg-[#090a0d] py-7">
      <div className="container relative mx-auto flex w-full flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:pr-20 sm:text-left">
        {/* Brand */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Dumbbell size={20} strokeWidth={2} className="text-fit-accent-alt" />

          <span className="font-display text-sm font-bold tracking-[0.7px] text-white uppercase">
            FitLog
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs font-normal text-[#6b7280] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

        {/* Scroll To Top */}
        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-[#2d313b] bg-[#111317] text-fit-muted transition-all  hover:translate-y-[-55%] hover:border-fit-accent-alt hover:bg-[#1a2312] hover:text-fit-accent-alt sm:absolute sm:top-1/2 sm:right-6 sm:-translate-y-1/2"
        >
          <ArrowUp size={17} strokeWidth={2} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
