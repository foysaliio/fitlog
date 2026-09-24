"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import toast from "react-hot-toast";

import type { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];
  completedIds: number[];
  isHydrated: boolean;

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

interface WorkoutState {
  plan: Workout[];
  saved: Workout[];
  completedIds: number[];
}

const STORAGE_KEY = "fitlog-workout-state";
const MAX_PLAN_ITEMS = 5;

const initialState: WorkoutState = {
  plan: [],
  saved: [],
  completedIds: [],
};

const WorkoutContext = createContext<WorkoutContextType | null>(null);

interface WorkoutProviderProps {
  children: ReactNode;
}

export const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  const [workoutState, setWorkoutState] = useState<WorkoutState>(initialState);

  const [isHydrated, setIsHydrated] = useState(false);

  const { plan, saved, completedIds } = workoutState;

  // Load state from localStorage
  useEffect(() => {
    const loadStoredState = () => {
      try {
        const storedState = localStorage.getItem(STORAGE_KEY);

        if (!storedState) {
          setIsHydrated(true);
          return;
        }

        const parsedState = JSON.parse(storedState) as Partial<WorkoutState>;

        setWorkoutState({
          plan: Array.isArray(parsedState.plan) ? parsedState.plan : [],
          saved: Array.isArray(parsedState.saved) ? parsedState.saved : [],
          completedIds: Array.isArray(parsedState.completedIds)
            ? parsedState.completedIds
            : [],
        });
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }

      setIsHydrated(true);
    };

    const timeoutId = window.setTimeout(loadStoredState, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(workoutState));
  }, [workoutState, isHydrated]);

  const addToPlan = (workout: Workout) => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.error("Workout is already in today's plan");
      return;
    }

    if (plan.length >= MAX_PLAN_ITEMS) {
      toast.error("Today's plan can have up to 5 workouts");
      return;
    }

    setWorkoutState((current) => ({
      ...current,
      plan: [...current.plan, workout],
    }));

    toast.success("Added to today's plan");
  };

  const saveWorkout = (workout: Workout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.error("Workout is already saved");
      return;
    }

    setWorkoutState((current) => ({
      ...current,
      saved: [...current.saved, workout],
    }));

    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setWorkoutState((current) => ({
      ...current,

      plan: current.plan.filter((item) => item.id !== id),

      completedIds: current.completedIds.filter(
        (workoutId) => workoutId !== id,
      ),
    }));

    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setWorkoutState((current) => ({
      ...current,

      saved: current.saved.filter((item) => item.id !== id),
    }));

    toast.success("Removed from saved workouts");
  };

  const markAsDone = (id: number) => {
    const alreadyCompleted = completedIds.includes(id);

    if (alreadyCompleted) {
      toast("Workout already marked as done");
      return;
    }

    setWorkoutState((current) => ({
      ...current,

      completedIds: [...current.completedIds, id],
    }));

    toast.success("Workout marked as done");
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        completedIds,
        isHydrated,
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
