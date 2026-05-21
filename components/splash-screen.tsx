"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Each stroke is drawn in once with a staggered delay.
// No loop — strokes stay visible until the splash fades out.
// ---------------------------------------------------------------------------

interface Stroke {
  d: string;
  index: number; // fractional stagger index
}

// PRITY – split into individual strokes so each animates sequentially
const strokes: Stroke[] = [
  // ── P ──────────────────────────────────────────────────────────────────
  { d: "M 60,115 V 35 H 100 A 20,20 0 0,1 100,75 H 60", index: 0 },

  // ── R ──────────────────────────────────────────────────────────────────
  { d: "M 150,115 V 35 H 190 A 20,20 0 0,1 190,75 H 150", index: 1 },
  { d: "M 180,75 L 210,115",                               index: 1.4 },

  // ── I ──────────────────────────────────────────────────────────────────
  { d: "M 250,35 H 290",  index: 2 },
  { d: "M 270,35 V 115",  index: 2.2 },
  { d: "M 250,115 H 290", index: 2.4 },

  // ── T ──────────────────────────────────────────────────────────────────
  { d: "M 325,35 H 390",  index: 3 },
  { d: "M 357,35 V 115",  index: 3.2 },

  // ── Y ──────────────────────────────────────────────────────────────────
  { d: "M 420,35 L 452,80", index: 4 },
  { d: "M 484,35 L 452,80", index: 4.2 },
  { d: "M 452,80 V 115",    index: 4.4 },
];

// How long each stroke takes to draw (seconds)
const STROKE_DURATION = 0.9;
// Gap between the start of each consecutive stroke
const STAGGER = 0.22;
// How long to hold the completed name before fading out (ms)
const HOLD_MS = 800;

const lineVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (index: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: STROKE_DURATION,
        ease: [0.4, 0, 0.2, 1], // smooth cubic-bezier
        delay: index * STAGGER,
      },
      opacity: {
        duration: 0.01,
        delay: index * STAGGER,
      },
    },
  }),
};

export function SplashScreen() {
  const [show, setShow] = useState(true);

  // Dismiss after all strokes finish drawing + a short hold
  const totalDrawMs =
    (4.4 * STAGGER + STROKE_DURATION) * 1000 + HOLD_MS;

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), totalDrawMs);
    return () => clearTimeout(timer);
  }, [totalDrawMs]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
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
                style={{ willChange: "pathLength, opacity" }}
              />
            ))}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
