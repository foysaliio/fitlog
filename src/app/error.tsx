"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  reset: () => void;
}

const ErrorPage = ({ reset }: ErrorPageProps) => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-fit-bg px-4 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-[#2d313b] bg-[#14171e]">
          <AlertTriangle
            size={30}
            strokeWidth={1.8}
            className="text-fit-accent-alt"
          />
        </div>

        {/* Label */}
        <p className="mt-6 font-display text-sm font-semibold tracking-[3px] text-fit-accent-alt uppercase">
          Something Went Wrong
        </p>

        {/* Heading */}
        <h1 className="mt-3 font-display text-4xl font-bold tracking-[-1px] text-white uppercase sm:text-5xl">
          Unable To Load
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#8a92a0]">
          We couldn&apos;t load this content right now. Please try again or
          return to the workout library.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-fit-accent-alt px-6 text-sm font-semibold text-black transition hover:brightness-95"
          >
            <RotateCcw size={16} strokeWidth={2} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-full border border-[#374151] bg-[#111318] px-6 text-sm font-medium text-white transition hover:border-[#4b5563] hover:bg-[#171a21]"
          >
            Back to Workouts
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
