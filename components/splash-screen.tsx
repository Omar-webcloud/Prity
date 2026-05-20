"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut", delay: i * 0.3 },
        opacity: { duration: 0.1, delay: i * 0.3 }
      }
    }),
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#1e1e24]"
        >
          <svg viewBox="0 0 600 150" className="w-[80%] max-w-[600px]">
            {/* P */}
            <motion.path
              className="fill-none stroke-black dark:stroke-white stroke-[8px] stroke-linecap-round stroke-linejoin-round"
              d="M 80,115 V 35 H 120 A 20,20 0 0,1 120,75 H 80"
              custom={0}
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* R */}
            <motion.path
              className="fill-none stroke-black dark:stroke-white stroke-[8px] stroke-linecap-round stroke-linejoin-round"
              d="M 170,115 V 35 H 210 A 20,20 0 0,1 210,75 H 170 M 200,75 L 225,115"
              custom={1}
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* I */}
            <motion.path
              className="fill-none stroke-black dark:stroke-white stroke-[8px] stroke-linecap-round stroke-linejoin-round"
              d="M 260,35 H 300 M 280,35 V 115 M 260,115 H 300"
              custom={2}
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* T */}
            <motion.path
              className="fill-none stroke-black dark:stroke-white stroke-[8px] stroke-linecap-round stroke-linejoin-round"
              d="M 340,35 H 400 M 370,35 V 115"
              custom={3}
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Y */}
            <motion.path
              className="fill-none stroke-black dark:stroke-white stroke-[8px] stroke-linecap-round stroke-linejoin-round"
              d="M 430,35 L 460,75 L 490,35 M 460,75 V 115"
              custom={4}
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
