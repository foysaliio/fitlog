import { Suspense } from "react";
import LibraryLoading from "./LibraryLoading";
import WorkoutGrid from "./WorkoutGrid";

const Library = () => {
  return (
    <section id="library" className="container mx-auto px-4 py-5 sm:px-6">
      {/* Static Content */}
      <div className="mb-10">
        <p className="mb-2 text-xs font-bold tracking-[1.2px] text-fit-accent-alt uppercase">
          Explore Exercises
        </p>

        <h2 className="font-display text-3xl font-bold text-white uppercase sm:text-4xl">
          The Library
        </h2>

        <p className="mt-2 text-sm text-fit-muted sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Only API content will load */}
      <Suspense fallback={<LibraryLoading />}>
        <WorkoutGrid />
      </Suspense>
    </section>
  );
};

export default Library;
