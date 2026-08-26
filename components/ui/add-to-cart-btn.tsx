"use client";
import { ComponentProps } from "react";
import { Button } from "./button";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const MotionButton = motion.create(Button);

type AddToCartBtnProps = ComponentProps<typeof MotionButton>;

const AddToCartBtn = ({ children, className, ...props }: AddToCartBtnProps) => {
  return (
    <MotionButton
      whileTap={{ scale: 0.9, opacity: 0.8, y: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn("!transition-colors", className)}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export default AddToCartBtn;
