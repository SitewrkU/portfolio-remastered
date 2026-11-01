import { motion } from 'framer-motion';
import type {ReactNode} from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
    >
      {children}
    </motion.div>
  );
}