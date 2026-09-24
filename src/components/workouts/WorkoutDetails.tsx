import Image from "next/image";

import type { Workout } from "@/types/workout";
import WorkoutActions from "./WorkoutActions";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const specs: [string, string | number][] = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: Workout Image */}
        <div className="relative min-h-105 overflow-hidden rounded-2xl bg-fit-surface sm:min-h-140 lg:min-h-183.75">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: Workout Information */}
        <div>
          {/* Title */}
          <h1 className="font-display text-3xl leading-tight font-bold tracking-tight text-white uppercase sm:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-xl text-sm leading-6 text-fit-muted sm:text-base">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-md bg-fit-accent-alt px-3.5 py-1 text-xs font-semibold text-fit-bg"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
            {specs.map(([label, value], index) => (
              <div
                key={label}
                className={`flex items-center justify-between gap-6 px-6 py-3.5 ${
                  index !== 0 ? "border-t border-[#1e2330]" : ""
                }`}
              >
                <span className="text-xs font-bold tracking-wide text-fit-muted uppercase">
                  {label}
                </span>

                <span className="text-right text-sm font-medium text-[#e5e7eb]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-base font-extrabold text-white uppercase">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li key={instruction} className="flex gap-3 text-sm leading-6">
                  <span className="shrink-0 text-fit-muted">{index + 1}.</span>

                  <span className="text-fit-muted-light">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;
