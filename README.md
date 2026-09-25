<div align="center">

# FITLOG

### Workout Library & Personal Training Planner

A responsive workout discovery and planning experience built with Next.js, TypeScript, and Tailwind CSS.

[Live Demo](https://fitlog-fit.vercel.app) · [Source Code](https://github.com/foysaliio/fitlog)

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## Overview

**FitLog** is a workout library and personal planning application designed around a simple idea: discover a workout, understand it quickly, and organize what you want to train.

Users can browse exercises, open detailed workout information, create a daily plan, save workouts for later, track workout totals, sort their collections, mark exercises as completed, and keep their progress available after refresh.

The interface is fully responsive and follows a focused dark fitness aesthetic across mobile, tablet, and desktop screens.

## Highlights

- Browse a complete workout library from an external API
- Search workouts by **name** or **muscle group**
- Open dedicated dynamic pages for individual workouts
- View equipment, difficulty, sets, reps, calories, rating, and instructions
- Build a personalized **Today's Plan**
- Limit the daily plan to a maximum of **5 workouts**
- Save unlimited workouts for later
- Prevent duplicate Plan and Saved entries
- View live exercise, duration, and calorie totals
- Sort workouts by **Duration**, **Calories**, or **Rating**
- Mark planned workouts as completed
- Remove workouts from Plan or Saved collections
- Preserve workout state with Local Storage
- Navigate directly between Plan and Saved views
- Receive toast feedback for important actions
- Handle empty states, loading states, errors, and invalid routes
- Responsive experience across mobile, tablet, and desktop

---

## Core Experience

### Workout Library

The home page presents the available workouts in a responsive card-based library.

Each workout card includes:

- Workout image
- Muscle group tags
- Workout name
- Equipment
- Duration
- Calories burned
- Rating

The library also includes live search, allowing workouts to be filtered by workout name or muscle group.

### Workout Details

Every workout has its own dynamic details page.

Users can review:

- Description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Repetitions
- Duration
- Calories
- Rating
- Step-by-step instructions

From the same page, the workout can be added to **Today's Plan** or **Saved for Later**.

### Today's Plan

Today's Plan is designed for focused daily training.

Users can:

- Add up to 5 workouts
- View total exercises
- View total workout duration
- View total calories
- Sort the current list
- Mark workouts as done
- Open workout details
- Remove workouts from the plan

Once the five-workout limit is reached, additional workouts cannot be added until an existing workout is removed.

### Saved Workouts

The Saved section works as a personal workout collection for future use.

Users can:

- Save workouts without adding them to the daily plan
- Store as many workouts as needed
- Sort the saved collection
- Open workout details
- Remove saved workouts
- View statistics for the active Saved tab

---

## Tech Stack

| Technology          | Used For                                      |
| ------------------- | --------------------------------------------- |
| **Next.js 16**      | App Router, routing, rendering, data fetching |
| **React 19**        | Interactive UI and component architecture     |
| **TypeScript**      | Type-safe development                         |
| **Tailwind CSS 4**  | Responsive styling                            |
| **DaisyUI**         | Utility UI support                            |
| **Lucide React**    | Interface icons                               |
| **React Hot Toast** | User feedback and notifications               |
| **Local Storage**   | Persisting Plan, Saved, and completed state   |
| **Vercel**          | Production deployment                         |

---

## Application Routes

| Route                | Purpose                       |
| -------------------- | ----------------------------- |
| `/`                  | Home page and workout library |
| `/workouts/[id]`     | Dynamic workout details       |
| `/my-plan?tab=plan`  | Today's Plan                  |
| `/my-plan?tab=saved` | Saved Workouts                |

Invalid pages and unavailable workout IDs are handled through a custom Not Found experience.

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

Workout information is loaded from the FitLog API.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## State Management

Workout-related user state is managed through React Context.

The application maintains three main collections:

```text
plan
saved
completedIds
```

These values are also persisted in Local Storage, allowing users to refresh or revisit the application without losing their current workout selections.

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/foysaliio/fitlog.git
```

### Enter the project directory

```bash
cd fitlog
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Available Commands

```bash
npm run dev
```

Starts the development server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

---

## Responsive Design

FitLog is designed to work across different screen sizes without changing the core experience.

| Device  | Layout                                          |
| ------- | ----------------------------------------------- |
| Mobile  | Single-column, touch-friendly interface         |
| Tablet  | Balanced multi-column layouts                   |
| Desktop | Full workout grid and expanded dashboard layout |

Navigation, workout cards, details, plan controls, statistics, tabs, sorting, footer, and empty states all adapt to the available screen size.

---

## UX Details

Several small interactions are included to make the application feel complete:

- Active navigation indicators
- Live Plan and Saved counters
- Search result empty state
- Plan and Saved duplicate prevention
- Disabled state for already-added workouts
- Disabled state when the daily plan reaches five workouts
- Completion state for finished exercises
- Smooth scroll interactions
- Loading skeletons
- Toast notifications
- Custom error screen
- Custom 404 screen
- Scroll-to-top control

---

## Author

**Foysal Hossien**

Frontend Developer  
GitHub: [foysaliio](https://github.com/foysaliio)

---

<div align="center">

**Built with Next.js, TypeScript, and Tailwind CSS**

</div>
