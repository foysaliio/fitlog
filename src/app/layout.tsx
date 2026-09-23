import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/components/ToasterProvider";
import Navbar from "@/components/layout/Navbar";

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
        <Navbar />
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
