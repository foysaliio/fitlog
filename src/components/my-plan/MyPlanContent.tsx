"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

import { useWorkout } from "@/context/WorkoutContext";
import MyPlanWorkoutCard from "./MyPlanWorkoutCard";

type PlanTab = "plan" | "saved";

type SortOption = "duration" | "calories" | "rating";

interface MyPlanContentProps {
  initialTab: PlanTab;
}

const MyPlanContent = ({ initialTab }: MyPlanContentProps) => {
  const router = useRouter();

  const { plan, saved } = useWorkout();

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortLabels: Record<SortOption, string> = {
    duration: "Duration",
    calories: "Calories",
    rating: "Rating",
  };

  const activeTab = initialTab;

  // Active tab wise workout list
  const activeWorkouts = activeTab === "plan" ? plan : saved;

  // Active tab wise total minutes
  const totalMinutes = activeWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  // Active tab wise total calories
  const totalCalories = activeWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // Sort a copied array so context state is never mutated
  const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const handleTabChange = (tab: PlanTab) => {
    router.replace(`/my-plan?tab=${tab}`, {
      scroll: false,
    });
  };

  return (
    <main className="min-h-screen bg-fit-bg">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-12">
        {/* Page Heading */}
        <div>
          <h1 className="font-display text-[30px] leading-[1.2] font-bold tracking-[-0.75px] text-white uppercase">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-[#8a92a0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics Summary */}
        <section className="mt-6 grid overflow-hidden rounded-2xl border border-fit-border bg-[#13161d] md:grid-cols-3">
          {/* Exercises */}
          <div className="border-b border-dashed border-fit-border px-6 py-7 md:border-r md:border-b-0">
            <p className="text-xs text-[#8a92a0]">Exercises</p>

            <p className="mt-1 font-display text-4xl font-bold text-fit-accent">
              {activeWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-dashed border-fit-border px-6 py-7 md:border-r md:border-b-0">
            <p className="text-xs text-[#8a92a0]">Minutes</p>

            <p className="mt-1 font-display text-4xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-6 py-7">
            <p className="text-xs text-[#8a92a0]">Calories</p>

            <p className="mt-1 font-display text-4xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </section>

        {/* Tabs and Sort */}
        {/* Tabs and Sort */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex">
            <div className="flex items-center gap-1 rounded-lg bg-[#151921] p-1">
              <button
                type="button"
                onClick={() => handleTabChange("plan")}
                className={`h-8 rounded-md px-4 text-xs font-medium transition-colors ${
                  activeTab === "plan"
                    ? "bg-[#1a2312] text-fit-accent-alt"
                    : "text-[#8a92a0] hover:text-white"
                }`}
              >
                Today&apos;s Plan
              </button>

              <button
                type="button"
                onClick={() => handleTabChange("saved")}
                className={`h-8 rounded-md px-4 text-xs font-medium transition-colors ${
                  activeTab === "saved"
                    ? "bg-[#1a2312] text-fit-accent-alt"
                    : "text-[#8a92a0] hover:text-white"
                }`}
              >
                Saved
              </button>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-fit-muted-light">
              Sort By
            </span>

            <div className="relative w-57.5">
              <button
                type="button"
                onClick={() => setIsSortOpen((prev) => !prev)}
                className={`flex h-10 w-full items-center justify-between rounded-xl border px-4 text-sm transition ${
                  isSortOpen
                    ? "border-[#4b5563] bg-[#171a21]"
                    : "border-[#343944] bg-[#111318]"
                }`}
              >
                <span className="font-medium text-[#e5e7eb]">
                  {sortLabels[sortBy]}
                </span>

                <ChevronDown
                  size={15}
                  className={`text-fit-muted transition-transform ${
                    isSortOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isSortOpen && (
                <div className="absolute right-0 top-[calc(100%+6px)] z-40 w-full overflow-hidden rounded-xl border border-[#343944] bg-[#171a21] shadow-xl">
                  {(["duration", "calories", "rating"] as SortOption[]).map(
                    (option, index) => {
                      const isSelected = sortBy === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setSortBy(option);
                            setIsSortOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors ${
                            index !== 0 ? "border-t border-[#272b34]" : ""
                          } ${
                            isSelected
                              ? "bg-[#1a2312] text-fit-accent-alt"
                              : "text-fit-muted-light hover:bg-[#1d2028] hover:text-white"
                          }`}
                        >
                          <span>{sortLabels[option]}</span>

                          {isSelected && <Check size={15} strokeWidth={2.2} />}
                        </button>
                      );
                    },
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="mt-6">
          {activeWorkouts.length === 0 ? (
            <div className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111317]/50 px-4 text-center">
              <h2 className="font-display text-xl font-bold tracking-[0.7px] text-white uppercase">
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-xs text-[#a1a1aa]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-6 inline-flex h-9 items-center justify-center rounded-full bg-[#c2f10d] px-6 text-xs font-semibold tracking-[-0.3px] text-black transition hover:brightness-95"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedWorkouts.map((workout) => (
                <MyPlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  variant={activeTab}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default MyPlanContent;
