import { ArrowLeft, Dumbbell } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-fit-bg px-4 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-[#2d313b] bg-[#14171e]">
          <Dumbbell
            size={30}
            strokeWidth={1.8}
            className="text-fit-accent-alt"
          />
        </div>

        {/* Error Code */}
        <p className="mt-6 font-display text-sm font-semibold tracking-[3px] text-fit-accent-alt uppercase">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mt-3 font-display text-4xl font-bold tracking-[-1px] text-white uppercase sm:text-5xl">
          Workout Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#8a92a0]">
          The page or workout you&apos;re looking for doesn&apos;t exist, may
          have moved, or is no longer available.
        </p>

        {/* Action */}
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-fit-accent-alt px-6 text-sm font-semibold text-black transition hover:brightness-95"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
