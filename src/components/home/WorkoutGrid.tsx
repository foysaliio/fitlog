import { getWorkouts } from "@/lib/api";
import WorkoutSearchGrid from "./WorkoutSearchGrid";

const WorkoutGrid = async () => {
  const workouts = await getWorkouts();

  return <WorkoutSearchGrid workouts={workouts} />;
};

export default WorkoutGrid;
