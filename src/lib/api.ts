import { cacheLife, cacheTag } from "next/cache";

import type { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<Workout[]> => {
  "use cache";

  cacheLife("days");
  cacheTag("workouts");

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

export const getWorkoutById = async (id: string): Promise<Workout | null> => {
  "use cache";

  cacheTag("workouts", `workout-${id}`);

  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    // Missing workout should not stay cached
    // for a long period.
    cacheLife("minutes");

    return null;
  }

  cacheLife("days");

  return response.json();
};
