"use client";
import { motion } from "framer-motion";

type AppButtonProps = {
  color: string;
  fill: string;
  text: string;
  fontcolor: string;
};

export function AppButton({ color, fill, text, fontcolor }: AppButtonProps) {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className={`py-2 px-4 border-2 border-${color} bg-${fill} text-${fontcolor} w-48`}
      >
        {text}
      </motion.button>
    </>
  );
}
