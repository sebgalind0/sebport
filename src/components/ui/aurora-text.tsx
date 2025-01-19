import { motion, type HTMLMotionProps } from "framer-motion";
import { ComponentPropsWithoutRef, ElementType } from "react";

interface AuroraTextProps<T extends ElementType> {
  Component?: T;
  className?: string;
  children: React.ReactNode;
}

export function AuroraText<T extends ElementType = "div">({
  Component = "div" as T,
  className,
  children,
  ...props
}: AuroraTextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof AuroraTextProps<T>>) {
  const MotionComponent = Component === "div" ? motion.div : 
                         Component === "span" ? motion.span :
                         motion.div;

  return (
    <MotionComponent
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
