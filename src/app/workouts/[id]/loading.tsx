const WorkoutDetailsLoading = () => {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:py-12">
      <div className="grid animate-pulse gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image Skeleton */}
        <div className="relative min-h-105 overflow-hidden rounded-2xl border border-fit-border bg-fit-surface sm:min-h-140 lg:min-h-183.75">
          <div className="absolute inset-0 bg-fit-surface-alt" />
        </div>

        {/* Content Skeleton */}
        <div>
          {/* Title */}
          <div className="h-9 w-3/4 rounded-md bg-fit-surface-alt sm:h-11" />

          {/* Description */}
          <div className="mt-5 space-y-2.5">
            <div className="h-4 w-full rounded bg-fit-surface-alt" />
            <div className="h-4 w-11/12 rounded bg-fit-surface-alt" />
            <div className="h-4 w-3/4 rounded bg-fit-surface-alt" />
          </div>

          {/* Tags */}
          <div className="mt-5 flex gap-2">
            <div className="h-6 w-20 rounded-md bg-fit-surface-alt" />
            <div className="h-6 w-24 rounded-md bg-fit-surface-alt" />
          </div>

          {/* Specs */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-between gap-6 px-6 py-3.5 ${
                  index !== 0 ? "border-t border-[#1e2330]" : ""
                }`}
              >
                <div className="h-3 w-20 rounded bg-[#252a33]" />
                <div className="h-3 w-24 rounded bg-[#252a33]" />
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <div className="h-4 w-28 rounded bg-fit-surface-alt" />

            <div className="mt-5 space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="size-4 shrink-0 rounded bg-fit-surface-alt" />
                  <div className="h-3 w-full rounded bg-fit-surface-alt" />
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="h-11 w-full rounded-xl bg-fit-surface-alt sm:w-52" />
            <div className="h-11 w-full rounded-xl bg-fit-surface-alt sm:w-40" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsLoading;
