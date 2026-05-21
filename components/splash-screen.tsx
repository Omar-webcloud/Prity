"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Each stroke gets its own <motion.path> so it can be staggered independently.
// The animation replicates the AnimeJS "draw" effect:
//   strokeDashoffset: ['0 0', '0 1', '1 1']
// which maps to framer-motion keyframes:
//   pathLength:  [0, 1, 1, 0]   draw in → hold → draw out
//   pathOffset:  [0, 0, 0, 1]   start at 0 → stays → offset chases the end
// ---------------------------------------------------------------------------

interface Stroke {
  d: string;
  index: number; // fractional index drives the stagger delay
}

// PRITY – split into individual strokes so each animates sequentially
const strokes: Stroke[] = [
  // ── P ──────────────────────────────────────────────────────────────────
  { d: "M 60,115 V 35 H 100 A 20,20 0 0,1 100,75 H 60", index: 0 },

  // ── R ──────────────────────────────────────────────────────────────────
  { d: "M 150,115 V 35 H 190 A 20,20 0 0,1 190,75 H 150", index: 1 },
  { d: "M 180,75 L 210,115", index: 1.4 },

  // ── I ──────────────────────────────────────────────────────────────────
  { d: "M 250,35 H 290", index: 2 },
  { d: "M 270,35 V 115", index: 2.2 },
  { d: "M 250,115 H 290", index: 2.4 },

  // ── T ──────────────────────────────────────────────────────────────────
  { d: "M 325,35 H 390", index: 3 },
  { d: "M 357,35 V 115", index: 3.2 },

  // ── Y ──────────────────────────────────────────────────────────────────
  { d: "M 420,35 L 452,80", index: 4 },
  { d: "M 484,35 L 452,80", index: 4.2 },
  { d: "M 452,80 V 115", index: 4.4 },
];

// Total cycle time per stroke (seconds)
const STROKE_DURATION = 2;
// Gap between the start of consecutive strokes
const STAGGER = 0.28;
// Extra pause before the loop restarts
const REPEAT_DELAY = 1.2;

const lineVariants: Variants = {
  hidden: {
    pathLength: 0,
    pathOffset: 0,
    opacity: 0,
  },
  visible: (index: number) => ({
    pathLength: [0, 1, 1, 0],
    pathOffset: [0, 0, 0, 1],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: STROKE_DURATION,
      ease: "easeInOut",
      // [draw-start, fully-drawn, hold-end, erase-end]
      times: [0, 0.42, 0.58, 1],
      delay: index * STAGGER,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: REPEAT_DELAY,
    },
  }),
};

export function SplashScreen() {
  const [show, setShow] = useState(true);

  // Dismiss after a full first cycle: last stroke starts at index 4.4,
  // so total ≈ (4.4 * STAGGER) + STROKE_DURATION + some breathing room
  const dismissMs =
    (4.4 * STAGGER + STROKE_DURATION + 0.8) * 1000;

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), dismissMs);
    return () => clearTimeout(timer);
  }, [dismissMs]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0f0f14]"
          style={{ willChange: "opacity" }}
        >
          <svg
            viewBox="0 0 560 150"
            className="w-[80%] max-w-[560px] overflow-visible"
            aria-hidden="true"
          >
            {strokes.map((stroke, i) => (
              <motion.path
                key={i}
                d={stroke.d}
                fill="none"
                className="stroke-black dark:stroke-white"
                strokeWidth={7}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={stroke.index}
                style={{ willChange: "pathLength, pathOffset, opacity" }}
              />
            ))}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
