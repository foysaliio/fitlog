"use client";

import { Bookmark, Plus } from "lucide-react";

import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveWorkout } = useWorkout();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-fit-accent px-6 text-sm font-semibold text-fit-bg transition hover:brightness-95 cursor-pointer"
      >
        <Plus size={16} />
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#374151] px-6 text-sm font-medium text-[#e5e7eb] transition hover:border-fit-muted hover:text-white cursor-pointer"
      >
        <Bookmark size={16} />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
