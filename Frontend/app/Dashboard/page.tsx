"use client";

import Campage from "../components/Campage";
import LiveCamCard from "../components/LiveCam/LiveCamCard";
import ModelViewer3D from "../components/ModelViewer3D";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Stickman from "../components/Stickman";

const getRandomScore = () => Math.floor(Math.random() * 100);

// decide colors + label based on accuracy
const getAccuracyStyles = (score: number | null) => {
  if (score === null) {
    return {
      label: "Waiting for Live Cam…",
      pill: "bg-gray-200 text-gray-700",
      text: "text-gray-700",
    };
  }

  if (score < 40) {
    return {
      label: "Needs Improvement",
      pill: "bg-red-100 text-red-700",
      text: "text-red-600",
    };
  }
  if (score < 70) {
    return {
      label: "Getting There",
      pill: "bg-amber-100 text-amber-700",
      text: "text-amber-600",
    };
  }
  if (score < 90) {
    return {
      label: "Good Form",
      pill: "bg-green-100 text-green-700",
      text: "text-green-600",
    };
  }
  return {
    label: "Excellent!",
    pill: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-600",
  };
};

export default function Home() {
  const [isLiveCam, setIsLiveCam] = useState(false);
  const [num, setNum] = useState<number | null>(null);

  useEffect(() => {
    if (!isLiveCam) {
      // reset when camera stops
      setNum(null);
      return;
    }

    // when camera starts → live updates begin
    const update = () => {
      const score = getRandomScore();
      setNum(score);
    };

    update(); // first update immediately
    const id = setInterval(update, 2000);

    return () => clearInterval(id);
  }, [isLiveCam]);

  const accuracyStyles = getAccuracyStyles(num);

  return (
    <div className="min-h-screen flex flex-col bg-[url('/Background.png')] bg-cover bg-center">
      {/* Navbar */}
      <header className="flex-none h-16">
        <Navbar />
      </header>

      {/* MAIN SECTION */}
      <main className="flex flex-col lg:flex-row gap-4 p-4 min-h-[calc(100vh-4rem)]">
        {/* LEFT COLUMN */}
        <section className="w-full flex flex-col gap-4 min-h-0">
          {/* Top row: Campage + LiveCam / Stickman */}
          <div className="flex flex-col lg:flex-row gap-4 p-4 lg:h-[50%] w-full">
            <Campage setIsLiveCam={setIsLiveCam} isLiveCam={isLiveCam} />

            {/* ⬇️ Stable height + inner wrapper so Stickman can't collapse */}
            <div className="flex-1 rounded-3xl bg-gray-100/60 min-h-[260px] h-64 lg:h-full w-full overflow-hidden shadow-2xl shadow-gray-500">
              <div className="w-full h-full flex items-center justify-center">
                {isLiveCam ? <LiveCamCard /> : <Stickman />}
              </div>
            </div>
          </div>

          {/* Bottom row: Output + Accuracy card */}
          {/* ⬇️ Only grow on large screens so mobile doesn't squeeze the top */}
          <div className="flex flex-col lg:flex-row gap-4 p-4 lg:grow">
            <div className="grow rounded-3xl flex items-center justify-center h-40 lg:h-full bg-gray-100/40 shadow-2xl shadow-gray-500">
              <p>Output Stickman Placeholder</p>
            </div>

            {/* ACCURACY CARD (on-theme) */}
            <div className="w-full sm:w-[260px] rounded-3xl bg-gray-100/40 backdrop-blur-md shadow-2xl shadow-gray-500 px-6 py-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Form Accuracy
                </p>
                <p
                  className={`mt-3 text-4xl font-semibold transition-colors duration-300 ${accuracyStyles.text}`}
                >
                  {isLiveCam && num !== null ? `${num}%` : "--%"}
                </p>
              </div>

              <div
                className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${accuracyStyles.pill}`}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                <span>{accuracyStyles.label}</span>
              </div>

              <p className="mt-3 text-[11px] text-gray-500 leading-snug">
                Live estimate based on your current movement. Accuracy will
                update every few seconds while the{" "}
                <span className="font-medium">Live Cam</span> is running.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <aside className="w-full lg:w-[30%] flex flex-col gap-4 min-h-0 mt-4 lg:mt-0">
          <div className="rounded-3xl backdrop-blur-sm flex flex-col h-80 lg:h-full bg-linear-to-tr from-white/6 to-white/4 bg-[#9C9C9C]">
            <div className="text-center font-semibold pb-2 pt-3 lg:pt-2 text-white">
              Targeted Muscle
            </div>
            <div className="flex-1 min-h-0 rounded-lg overflow-hidden">
              <ModelViewer3D activeMuscles={[]} />
            </div>
          </div>
        </aside>
      </main>

      {/* <Footer /> */}
    </div>
  );
}