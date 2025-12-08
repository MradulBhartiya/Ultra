"use client";

import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

const developers = [
  {
    name: "Moksh Kasture",
    role: "Frontend Developer",
    techStack: "Next.js, TypeScript, Tailwind",
    passion: "Crafting smooth, modern UIs",
    image: "/Moksh.jpg",
  },
  {
    name: "Mradul Bhartiya",
    role: "Backend Developer",
    techStack: "Node.js, Express, Python",
    passion: "Building scalable systems",
    image: "/Mradul.jpg",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden">
        {/* static background image */}
        <div className="absolute inset-0 bg-[url('/bg3.jpg')] bg-cover bg-center" />

        {/* navbar overlay */}
        <header className="relative z-20 backdrop-blur-md shadow-sm bg-white/60">
          <Navbar />
        </header>

        {/* hero content */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          {/* Fade shadow overlays (sides) */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white/90 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white/90 to-transparent pointer-events-none" />

          {/* Fade shadow overlays (top + bottom) */}
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white/70 to-transparent pointer-events-none" />

          {/* Main content card */}
          <div
            className="relative max-w-3xl mx-auto flex flex-col items-center text-center px-6 py-12 
            bg-white/10 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.15)] 
            rounded-3xl"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-600 mb-2">
              Welcome to
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              PostureIQ
            </h1>

            <p className="text-sm md:text-base text-gray-700 mb-8 leading-relaxed">
              Analyze your workouts in real time, track{" "}
              <span className="font-semibold text-blue-600">form accuracy</span>{" "}
              and understand which{" "}
              <span className="font-semibold text-blue-600">
                muscles are engaged
              </span>{" "}
              during each exercise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/Dashboard")}
                className="relative overflow-hidden px-8 py-3 rounded-full bg-black text-white text-sm font-semibold shadow-lg cursor-pointer
                transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Go to Dashboard</span>
              </button>

              <button
                onClick={() =>
                  document.getElementById("developers")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-8 py-3 rounded-full bg-white/80 text-sm 
                font-semibold text-gray-700 hover:bg-gray-100 backdrop-blur-md transition cursor-pointer hover:scale-105"
              >
                About Us...
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEVELOPERS SECTION ================= */}
      <div className="flex flex-col">
        <section
          id="developers"
          className="bg-[url('/HomeBG5.jpg')] bg-cover bg-center bg-no-repeat bg-fixed 
                    py-16 md:py-20 px-4 border-t border-gray-200"
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
            {/* top white card */}
            <div className="w-full bg-white text-gray-900 rounded-2xl shadow-lg px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Last Updated
                </p>
                <p className="text-lg md:text-xl font-semibold">
                  December 10, 2025
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
                  <img
                    src="/author.jpg"
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Written By
                </p>
                <p className="text-lg md:text-xl font-semibold">
                  Mradul Bhartiya
                </p>
              </div>
            </div>

            {/* title */}
            <div className="text-center">
              <p className="text-md font-semibold text-gray-500">Meet the</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Developers
              </h2>
              <p className="mt-2 text-xs md:text-sm font-semibold text-gray-500">
                The team behind the PostureIQ experience.
              </p>
            </div>

            {/* dev cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-18 w-full">
              {developers.map((dev, i) => (
                <div
                  key={dev.name}
                  className={`flex items-center gap-6 rounded-2xl px-6 py-6
                  ${
                    i % 2 === 0
                      ? "flex-row-reverse text-right"
                      : "flex-row text-left"
                  }`}
                >
                  {/* IMAGE SECTION */}
                  <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 shadow-2xl shadow-gray-500">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* DETAILS SECTION */}
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900 text-lg">
                      {dev.name}
                    </p>
                    <p className="text-blue-600 font-medium">{dev.role}</p>

                    <p className="text-gray-700 mt-1 text-sm">
                      <span className="font-semibold">Tech Stack:</span>{" "}
                      {dev.techStack}
                    </p>
                    <p className="text-gray-600 text-xs">
                      <span className="font-semibold">Passion:</span>{" "}
                      {dev.passion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto border-t border-gray-200 bg-white py-6 text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} PostureIQ. All rights reserved.
      </footer>
    </div>
  );
}