"use client";
import { motion } from "framer-motion";

type AppButtonProps = {
  color: string;
  fill: string;
  text: string;
  fontcolor: string;
  hover_color: string;
  hover_fill: string;
  hover_fontcolor: string;
};

export function AppButton({
  color,
  fill,
  text,
  fontcolor,
  hover_color,
  hover_fill,
  hover_fontcolor,
}: AppButtonProps) {
  return (
    <>
      <motion.button
        id={text.toLowerCase().replace(/[^A-Z0-9]/gi, "_")}
        whileHover={{ scale: 1.1 }}
        className={`py-2 px-4 border-2 ${color} ${fill} ${fontcolor} w-48 ${hover_color} ${hover_fill} ${hover_fontcolor}`}
      >
        {text}
      </motion.button>
    </>
  );
}
