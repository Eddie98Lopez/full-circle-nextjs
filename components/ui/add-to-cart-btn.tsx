"use client";
import { ComponentProps } from "react";
import { Button } from "./button";
import { motion } from "motion/react";

const MotionButton = motion.create(Button);

type AddToCartBtnProps = ComponentProps<typeof MotionButton>;

const AddToCartBtn = ({ children, ...props }: AddToCartBtnProps) => {
  return (
    <MotionButton
      whileTap={{ scale: 0.9, opacity: 0.8 }} // Note: 0.5 scale is extremely small for a button, 0.9 or 0.95 usually feels more natural!
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export default AddToCartBtn;
