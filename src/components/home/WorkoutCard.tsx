import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-fit-border bg-fit-surface transition duration-300 hover:-translate-y-1 hover:border-fit-accent/40"
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-fit-surface-alt">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-md border border-fit-border bg-fit-accent-alt px-2 py-1 text-[10px] font-bold tracking-[0.8px] text-slate-950 uppercase"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-white uppercase transition-colors group-hover:text-fit-accent">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-sm text-fit-muted">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-5 flex items-center gap-5 border-t border-fit-border pt-4 text-xs text-fit-muted">
          <span className="flex items-center gap-1.5">
            <Clock3 size={15} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={15} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star size={15} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
