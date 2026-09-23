import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

const WorkoutGrid = async () => {
  const workouts = await getWorkouts();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutGrid;
