"use client";

import { motion } from "framer-motion";
import MuscleAnatomy from "./Muscleanatomy";

type AnatomyPanelProps = {
  activeMuscles: string[];
};

export default function ModelViewer3D({ activeMuscles }: AnatomyPanelProps) {
  return (
    // make this a flex column and allow it to grow
    <motion.div
      layout
      className="h-full flex flex-col flex-1 rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.20)]"
    >
      {/* header (fixed height) */}
      <div className="mb-3 flex items-center justify-center flex-none pt-1">
        <h1 className="font-semibold">Push-up</h1>
      </div>

      {/* content MUST be flex-1 + min-h-0 so it can actually shrink/grow inside flex parents */}
      <div className="flex-1 min-h-0 rounded-2xl bg-slate-200/80 border border-slate-300/60 overflow-hidden">
        {/* IMPORTANT: MuscleAnatomy must render a root element with height:100% */}
        <MuscleAnatomy activeMuscles={activeMuscles} />
      </div>
    </motion.div>
  );
}
