import { notFound } from "next/navigation";

import WorkoutDetails from "@/components/workouts/WorkoutDetails";
import { getWorkoutById, getWorkouts } from "@/lib/api";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const generateStaticParams = async () => {
  const workouts = await getWorkouts();

  return workouts.map((workout) => ({
    id: String(workout.id),
  }));
};

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}
