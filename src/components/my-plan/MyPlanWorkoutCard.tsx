"use client";

import { Check, Clock3, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

interface MyPlanWorkoutCardProps {
  workout: Workout;
  variant: "plan" | "saved";
}

const MyPlanWorkoutCard = ({ workout, variant }: MyPlanWorkoutCardProps) => {
  const { completedIds, markAsDone, removeFromPlan, removeFromSaved } =
    useWorkout();

  const isCompleted = completedIds.includes(workout.id);

  const handleRemove = () => {
    if (variant === "plan") {
      removeFromPlan(workout.id);
      return;
    }

    removeFromSaved(workout.id);
  };

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-fit-border bg-[#14171e] p-4 md:flex-row md:items-center md:justify-between">
      {/* Workout Info */}
      <div className="flex min-w-0 items-center gap-4">
        {/* Thumbnail */}
        <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-xl bg-[#1f2937]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="min-w-0">
          <h2 className="font-display text-base font-bold tracking-[0.4px] text-white uppercase">
            {workout.name}
          </h2>

          <p className="mt-0.5 text-xs text-fit-muted">{workout.equipment}</p>

          {/* Stats */}
          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fit-muted">
            <span className="flex items-center gap-1.5">
              <Clock3 className="text-fit-accent" size={14} strokeWidth={1.7} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <Flame className="text-fit-accent" size={14} strokeWidth={1.7} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <Star className="text-fit-accent" size={14} strokeWidth={1.7} />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 flex-wrap items-center gap-3">
        <Link
          href={`/workouts/${workout.id}`}
          className="inline-flex h-8.5 min-w-27 items-center justify-center rounded-full border border-[#374151] px-4.5 text-xs font-normal text-white transition hover:border-[#6b7280] hover:bg-white/5"
        >
          View Details
        </Link>

        {variant === "plan" && (
          <button
            type="button"
            onClick={() => markAsDone(workout.id)}
            disabled={isCompleted}
            className={`inline-flex h-8 min-w-32.5 items-center justify-center gap-1.5 rounded-full px-4 text-xs font-semibold transition ${
              isCompleted
                ? "cursor-default bg-[#252a32] text-fit-muted"
                : "bg-fit-accent text-black hover:brightness-95"
            }`}
          >
            <Check size={14} strokeWidth={2} />

            {isCompleted ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="inline-flex size-7 items-center justify-center text-fit-muted transition hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </article>
  );
};

export default MyPlanWorkoutCard;
