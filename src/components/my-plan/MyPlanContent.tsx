"use client";

import Link from "next/link";
import { useState } from "react";

import { useWorkout } from "@/context/WorkoutContext";

type PlanTab = "plan" | "saved";

const MyPlanContent = () => {
  const { plan, saved } = useWorkout();

  const [activeTab, setActiveTab] = useState<PlanTab>("plan");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const activeWorkouts = activeTab === "plan" ? plan : saved;

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
              {plan.length}
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

        {/* Tabs */}
        <div className="mt-6 flex">
          <div className="flex h-10 items-center rounded-xl border border-fit-border bg-[#151921] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`h-7.5 rounded-lg px-4 text-xs transition ${
                activeTab === "plan"
                  ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-sm"
                  : "border border-transparent font-medium text-[#8a92a0]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`h-7.5 rounded-lg px-4 text-xs transition ${
                activeTab === "saved"
                  ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-sm"
                  : "border border-transparent font-medium text-[#8a92a0]"
              }`}
            >
              Saved
            </button>
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
            <p className="text-sm text-[#8a92a0]">
              {activeWorkouts.length} workout
              {activeWorkouts.length > 1 ? "s" : ""} ready.
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default MyPlanContent;
