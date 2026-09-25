"use client";

import { Bookmark, Check, Plus } from "lucide-react";

import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { plan, saved, addToPlan, saveWorkout } = useWorkout();

  const isAlreadyInPlan = plan.some((item) => item.id === workout.id);

  const isAlreadySaved = saved.some((item) => item.id === workout.id);

  const isPlanFull = plan.length >= 5;

  const isAddToPlanDisabled = isAlreadyInPlan || isPlanFull;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Add To Plan */}
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isAddToPlanDisabled}
        className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition ${
          isAddToPlanDisabled
            ? "cursor-not-allowed bg-[#252a32] text-fit-muted"
            : "cursor-pointer bg-fit-accent text-fit-bg hover:brightness-95"
        }`}
      >
        {isAlreadyInPlan ? (
          <>
            <Check size={16} />
            Already in Plan
          </>
        ) : isPlanFull ? (
          <>
            <Plus size={16} />
            Plan is Full
          </>
        ) : (
          <>
            <Plus size={16} />
            Add to today&apos;s plan
          </>
        )}
      </button>

      {/* Save For Later */}
      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        disabled={isAlreadySaved}
        className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-6 text-sm font-medium transition ${
          isAlreadySaved
            ? "cursor-not-allowed border-[#2d313b] bg-[#252a32] text-fit-muted"
            : "cursor-pointer border-[#374151] text-[#e5e7eb] hover:border-fit-muted hover:text-white"
        }`}
      >
        {isAlreadySaved ? (
          <>
            <Check size={16} />
            Already Saved
          </>
        ) : (
          <>
            <Bookmark size={16} />
            Save for later
          </>
        )}
      </button>
    </div>
  );
};

export default WorkoutActions;
