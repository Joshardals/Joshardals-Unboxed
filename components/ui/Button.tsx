"use client";
import { motion } from "framer-motion";

export function Button() {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ bounceDamping: 10, bounceStiffness: 600 }}
      className="bg-ebony px-10 py-3 text-lightGray ring-1 ring-darkCharcoal/80 text-xs cursor-pointer"
    >
      Enter
    </motion.button>
  );
}
