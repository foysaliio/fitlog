"use client";

import { useSyncExternalStore } from "react";
import { useWorkout } from "@/context/WorkoutContext";

import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const emptySubscribe = () => {
  return () => {};
};

const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const currentTab = searchParams.get("tab");

  const isPlanStatusActive = pathname === "/my-plan" && currentTab !== "saved";

  const isSavedStatusActive = pathname === "/my-plan" && currentTab === "saved";

  const { plan, saved, isHydrated } = useWorkout();

  const planCount = plan.length;
  const savedCount = saved.length;

  const showWorkoutCounts = isClient && isHydrated;

  const isWorkoutActive = pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[#0c0d10]/95 backdrop-blur">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-4 px-4 py-4 sm:px-6 lg:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Dumbbell size={28} strokeWidth={2} className="text-fit-accent-alt" />

          <span className="font-display text-lg font-bold tracking-[0.9px] text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center sm:flex">
          <Link
            href="/"
            aria-current={isWorkoutActive ? "page" : undefined}
            className={`rounded-md px-4 py-2 text-sm transition-colors ${
              isWorkoutActive
                ? "bg-[#1a2312] font-semibold text-fit-accent-alt"
                : "font-medium text-fit-muted hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            aria-current={isPlanActive ? "page" : undefined}
            className={`rounded-md px-4 py-2 text-sm transition-colors ${
              isPlanActive
                ? "bg-[#1a2312] font-semibold text-fit-accent-alt"
                : "font-medium text-fit-muted hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Status */}
        <div className="flex items-center gap-3 text-xs sm:gap-5">
          {/* Plan */}
          <Link
            href="/my-plan?tab=plan"
            className={`flex items-center gap-2 font-medium transition-colors ${
              isPlanStatusActive ? "text-white" : "text-fit-muted-light"
            }`}
          >
            Plan
            <span
              className={`inline-flex h-6 min-w-7 items-center justify-center rounded-md border px-1.5 leading-none font-bold transition-colors ${
                isPlanStatusActive
                  ? "border-fit-accent-alt bg-fit-accent-alt text-black"
                  : "border-[#2d313b] bg-transparent text-white"
              }`}
            >
              {showWorkoutCounts ? planCount : null}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan?tab=saved"
            className={`flex items-center gap-2 font-medium transition-colors ${
              isSavedStatusActive ? "text-white" : "text-fit-muted"
            }`}
          >
            Saved
            <span
              className={`inline-flex h-6 min-w-7 items-center justify-center rounded-md border px-1.5 leading-none font-bold transition-colors ${
                isSavedStatusActive
                  ? "border-fit-accent-alt bg-fit-accent-alt text-black"
                  : "border-[#2d313b] bg-transparent text-white"
              }`}
            >
              {showWorkoutCounts ? savedCount : null}
            </span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex w-full items-center justify-center gap-2 border-t border-[#1c1f26] pt-3 sm:hidden">
          <Link
            href="/"
            aria-current={isWorkoutActive ? "page" : undefined}
            className={`rounded-md px-5 py-2 text-sm transition-colors ${
              isWorkoutActive
                ? "bg-[#1a2312] font-semibold text-fit-accent-alt"
                : "font-medium text-fit-muted"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            aria-current={isPlanActive ? "page" : undefined}
            className={`rounded-md px-5 py-2 text-sm transition-colors ${
              isPlanActive
                ? "bg-[#1a2312] font-semibold text-fit-accent-alt"
                : "font-medium text-fit-muted"
            }`}
          >
            My Plan
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
