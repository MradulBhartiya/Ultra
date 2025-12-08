"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Detect current route

  const linkClasses = (path: string) =>
    `group relative px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer hover:scale-110 ${
      pathname === path
        ? "bg-black text-white shadow-lg"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="sticky top-0 w-full z-30 flex items-center justify-between px-8 pt-4 pb-3">
      {/* Left: Brand */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Posture<span className="text-blue-600">IQ</span>
        </h1>
        <img
          src="/Brand Logo.png"
          alt="PostureIQ logo"
          className="h-10 w-10 object-contain drop-shadow-sm"
        />
      </div>

      {/* Center: Nav links */}
      <div className="hidden sm:flex items-center gap-1 bg-white/80 backdrop-blur-xl rounded-full 
                      shadow-lg shadow-gray-400/40 border border-white/70 px-3 py-1.5 absolute 
                      left-1/2 -translate-x-1/2">

        <a href="/workouts" className={linkClasses("/workouts")}>Workouts</a>
        <a href="/history" className={linkClasses("/history")}>History</a>
        <a href="/Dashboard" className={linkClasses("/Dashboard")}>Dashboard</a>
        <a href="/" className={linkClasses("/")}>Home</a>
        <a href="/feedback" className={linkClasses("/feedback")}>Feedback</a>
      </div>

      {/* Right: Login / Sign Up Buttons */}
      <div className="hidden sm:flex items-center gap-2">
        <a
          href="/login"
          className={`relative px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
            pathname === "/login"
              ? "bg-black text-white shadow-lg"
              : "text-gray-700 bg-white/80 hover:bg-gray-200"
          }`}
        >
          Login
        </a>

        <a
          href="/signup"
          className="relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full 
                     bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md
                     transition-all duration-200 hover:shadow-lg hover:-translate-y-1px active:translate-y-1px"
        >
          Sign Up
        </a>
      </div>

      {/* Mobile menu toggle placeholder */}
      <div className="sm:hidden">
        <div className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1 text-xs shadow-md text-gray-700">
          Menu
        </div>
      </div>
    </nav>
  );
}