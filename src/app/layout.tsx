import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import ToasterProvider from "@/components/ToasterProvider";
import Navbar from "@/components/layout/Navbar";
import { WorkoutProvider } from "@/context/WorkoutContext";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FitLog - Workout Library",
    template: "%s | FitLog",
  },
  description:
    "A workout library and planning app to explore exercises, build today's plan, and save workouts for later.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-screen font-sans antialiased">
        <WorkoutProvider>
          <Suspense
            fallback={
              <div className="h-29.5 border-b border-[#1c1f26] bg-[#0c0d10] sm:h-17.25" />
            }
          >
            <Navbar />
          </Suspense>
          {children}
          <Footer />
        </WorkoutProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}
