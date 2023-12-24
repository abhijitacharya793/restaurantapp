"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContainerProps = {
  children: ReactNode; // ReactNode is a type that can hold any React node, such as JSX or strings
};

export const PageWrapper: React.FC<ContainerProps> = ({ children }) => {
  return <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>;
};
