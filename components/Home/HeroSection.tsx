"use client";
import { Button } from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="max-content">
      <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
        {/* <Image
          src="/me.jpg"
          width={100}
          height={100}
          alt="me"
          className="rounded-full"
        /> */}

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-5xl font-medium w-[fit-content] text-center text-gradient"
        >
          I see the world differently. <br />
          Do you?
        </motion.h1>

        <Button />
      </div>
    </section>
  );
}
