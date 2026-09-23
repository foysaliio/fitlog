import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 p-10 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-10 rounded-2xl border border-fit-border bg-fit-surface p-6 sm:p-8 lg:min-h-112 lg:flex-row lg:px-14 lg:py-14">
        {/* Left Content */}
        <div className="w-full max-w-139.5">
          <p className="mb-5 text-[11px] font-bold tracking-[1.1px] text-fit-accent-alt uppercase">
            Workout Library
          </p>

          <h1 className="font-display text-[32px] leading-none font-bold tracking-[-1px] text-white uppercase sm:text-5xl lg:text-[60px] lg:tracking-[-1.5px]">
            Train with intent. Log <br />
            every set.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-fit-muted sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-fit-accent-alt px-6 py-3 text-xs font-bold tracking-[0.3px] text-black uppercase transition-transform hover:-translate-y-0.5"
          >
            Browse Workouts
            <ArrowDown size={16} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex w-full justify-center lg:w-auto">
          <Image
            src="/assets/images/banner.png"
            alt="Athlete training in the gym"
            width={334}
            height={334}
            priority
            className="h-auto w-full max-w-83.5 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
