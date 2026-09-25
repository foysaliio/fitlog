"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutSearchGridProps {
  workouts: Workout[];
}

const WorkoutSearchGrid = ({ workouts }: WorkoutSearchGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredWorkouts = workouts.filter((workout) => {
    if (!normalizedSearch) {
      return true;
    }

    const matchesName = workout.name.toLowerCase().includes(normalizedSearch);

    const matchesMuscleGroup = workout.muscleGroups.some((group) =>
      group.toLowerCase().includes(normalizedSearch),
    );

    return matchesName || matchesMuscleGroup;
  });

  return (
    <>
      {/* Search */}
      <div className="mb-8">
        <div className="relative w-full sm:max-w-sm">
          <Search
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-fit-muted"
          />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search workouts..."
            aria-label="Search workouts"
            className="h-11 w-full rounded-xl border border-[#343944] bg-[#111318] pr-4 pl-11 text-sm text-white outline-none transition placeholder:text-[#6b7280] focus:border-[#4b5563]"
          />
        </div>
      </div>

      {/* Results */}
      {filteredWorkouts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111317]/50 px-4 text-center">
          <Search size={26} strokeWidth={1.7} className="text-fit-muted" />

          <h3 className="mt-4 font-display text-lg font-bold text-white uppercase">
            No Workouts Found
          </h3>

          <p className="mt-1 text-sm text-fit-muted">
            Try searching with another workout name or muscle group.
          </p>
        </div>
      )}
    </>
  );
};

export default WorkoutSearchGrid;
