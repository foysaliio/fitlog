import { cacheLife, cacheTag } from "next/cache";

import { getWorkouts } from "@/lib/api";
import WorkoutSearchGrid from "./WorkoutSearchGrid";

const WorkoutGrid = async () => {
  "use cache";

  cacheLife("days");
  cacheTag("workouts");

  const workouts = await getWorkouts();

  return <WorkoutSearchGrid workouts={workouts} />;
};

export default WorkoutGrid;
