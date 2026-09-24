"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import toast from "react-hot-toast";

import type { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];
  completedIds: number[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | null>(null);

interface WorkoutProviderProps {
  children: ReactNode;
}

export const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  const addToPlan = (workout: Workout) => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.error("Workout is already in today's plan");
      return;
    }

    setPlan((currentPlan) => [...currentPlan, workout]);

    toast.success("Added to today's plan");
  };

  const saveWorkout = (workout: Workout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.error("Workout is already saved");
      return;
    }

    setSaved((currentSaved) => [...currentSaved, workout]);

    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) => currentPlan.filter((item) => item.id !== id));

    setCompletedIds((current) =>
      current.filter((workoutId) => workoutId !== id),
    );

    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) => currentSaved.filter((item) => item.id !== id));

    toast.success("Removed from saved workouts");
  };

  const markAsDone = (id: number) => {
    const alreadyCompleted = completedIds.includes(id);

    if (alreadyCompleted) {
      toast("Workout already marked as done");
      return;
    }

    setCompletedIds((current) => [...current, id]);

    toast.success("Workout marked as done");
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        completedIds,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkout must be used within WorkoutProvider");
  }

  return context;
};
