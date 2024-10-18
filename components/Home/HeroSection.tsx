"use client";
import { Button } from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export function HeroSection() {
  return (
    <section className="max-content">
      <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-medium w-[fit-content] text-center text-gradient"
        >
          <span className="text-4xl md:text-5xl">
            I see the world differently.
          </span>{" "}
          <br />
          <span className="text-xl md:text-2xl"> Do you?</span>
        </motion.div>

        <Button />
      </div>
    </section>
  );
}
