"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeTextProps {
  text: string | React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

const BlurFadeText = ({
  text,
  className,
  delay = 0,
  yOffset = 4,
}: BlurFadeTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.p
      ref={ref}
      initial={{ y: yOffset, opacity: 0, filter: "blur(4px)" }}
      animate={
        isInView
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: yOffset, opacity: 0, filter: "blur(4px)" }
      }
      transition={{
        delay: 0.04 + delay,
        duration: 0.4,
        ease: "easeOut",
      }}
      className={className}
    >
      {text}
    </motion.p>
  );
};

export default BlurFadeText;
