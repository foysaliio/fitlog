<div align="center">

# FITLOG

### Workout Library & Personal Training Planner

A responsive workout discovery and planning app built with Next.js, TypeScript, and Tailwind CSS.

[**Live Demo**](https://fitlog-fit.vercel.app) · [**Source Code**](https://github.com/foysaliio/fitlog)

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## About FitLog

**FitLog** is a workout library and personal training planner built around a simple workflow:

**discover → review → plan → complete**

Users can explore workouts, open detailed exercise guides, build a daily routine, save workouts for later, track workout totals, and keep their selections available across page refreshes.

The interface follows a focused dark fitness aesthetic and is fully responsive across mobile, tablet, and desktop devices.

---

## What You Can Do

| Feature                | Description                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| **Explore Workouts**   | Browse a responsive library of API-powered exercises                         |
| **Search**             | Find workouts by name or muscle group                                        |
| **View Details**       | Review equipment, difficulty, sets, reps, calories, rating, and instructions |
| **Build a Daily Plan** | Add up to five workouts to Today's Plan                                      |
| **Save for Later**     | Keep workouts in a separate Saved collection                                 |
| **Track Totals**       | See live exercise, duration, and calorie statistics                          |
| **Sort Workouts**      | Sort by Duration, Calories, or Rating                                        |
| **Mark as Done**       | Track completed workouts from the daily plan                                 |
| **Persist Progress**   | Keep Plan, Saved, and completion state after refresh                         |
| **Manage Workouts**    | Remove items, prevent duplicates, and navigate directly to details           |

---

## Core Experience

### Workout Library

The main library presents all available workouts in a responsive card layout.

Each workout includes:

- Exercise image
- Muscle group tags
- Workout name
- Required equipment
- Duration
- Calories burned
- Rating

A live search field allows users to quickly filter workouts by **name** or **muscle group**.

### Workout Details

Every workout has its own dynamic details page with:

- Description
- Target muscle groups
- Equipment
- Difficulty
- Sets and repetitions
- Duration
- Calories
- Rating
- Step-by-step instructions

From the details page, a workout can be added to **Today's Plan** or **Saved for Later**.

### Today's Plan

Today's Plan is built for focused daily training.

Users can:

- Add up to **5 workouts**
- View live workout totals
- Sort the current plan
- Mark exercises as done
- Open workout details
- Remove exercises from the plan

Once five workouts have been added, the plan is locked until an existing workout is removed.

### Saved Workouts

The Saved section acts as a personal exercise collection.

Users can:

- Save workouts independently from Today's Plan
- Store multiple workouts without a daily limit
- Sort saved exercises
- Open workout details
- Remove saved workouts
- View statistics for the active collection

---

## Thoughtful UX

FitLog includes a number of smaller details that make the overall experience feel complete:

- Active navigation states
- Live Plan and Saved counters
- Duplicate workout prevention
- Disabled states for already-added workouts
- Five-workout plan limit
- Completed workout states
- Toast notifications
- Search empty state
- Plan and Saved empty states
- Loading indicators and skeletons
- Custom error interface
- Custom 404 page
- Smooth scroll behavior
- Scroll-to-top control
- Persistent client state

---

## Tech Stack

| Technology          | Role                                          |
| ------------------- | --------------------------------------------- |
| **Next.js 16**      | App Router, rendering, routing, data fetching |
| **React 19**        | Component architecture and interactivity      |
| **TypeScript**      | Type-safe application development             |
| **Tailwind CSS 4**  | Responsive styling                            |
| **DaisyUI**         | Tailwind utility components                   |
| **Lucide React**    | Interface icons                               |
| **React Hot Toast** | Action feedback and notifications             |
| **Local Storage**   | Persistent workout state                      |
| **Vercel**          | Deployment                                    |

---

## Routes

| Route                | Description                |
| -------------------- | -------------------------- |
| `/`                  | Workout library            |
| `/workouts/[id]`     | Individual workout details |
| `/my-plan?tab=plan`  | Today's Plan               |
| `/my-plan?tab=saved` | Saved Workouts             |

Invalid routes and unavailable workout IDs are handled through a dedicated Not Found experience.

---

## Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   │
│   ├── workouts/
│   │   └── [id]/
│   │       ├── loading.tsx
│   │       └── page.tsx
│   │
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   ├── layout/
│   ├── my-plan/
│   └── workouts/
│
├── context/
│   └── WorkoutContext.tsx
│
├── lib/
│   └── api.ts
│
└── types/
    └── workout.ts
```

---

## Data Source

Workout data is loaded from the FitLog API.

**All workouts**

```text
https://api.abcz.workers.dev/api/fitlog
```

**Single workout**

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## State Management

Workout state is managed through React Context and persisted in Local Storage.

The application keeps track of:

```text
plan
saved
completedIds
```

This allows users to refresh or revisit the app without losing their current workout selections.

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/foysaliio/fitlog.git
```

Enter the project:

```bash
cd fitlog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Scripts

| Command         | Purpose                      |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run lint`  | Run ESLint                   |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |

---

## Responsive Layout

| Device      | Experience                                   |
| ----------- | -------------------------------------------- |
| **Mobile**  | Single-column, touch-friendly layout         |
| **Tablet**  | Balanced multi-column interface              |
| **Desktop** | Expanded workout grid and planning dashboard |

Every major part of the application—including navigation, cards, workout details, tabs, statistics, actions, empty states, and footer—is responsive.

---

<div align="center">

### Train with intent. Log every set.

[**Open FitLog →**](https://fitlog-fit.vercel.app)

</div>
