"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "./ui/dialog";
import { StaggerReveal } from "./ui/stagger-wrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const DemoDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-white/80 z-6000" />
        <DialogContent className="background-paper z-6000 text-foreground sm:max-w-3xl p-8 py-16 md:p-16">
          <StaggerReveal direction="y" className="space-y-4">
            <DialogTitle className="text-title text-5xl text-balance text-center">
              Real Designer, Concept Website.
            </DialogTitle>
            <p className="text-center text-lg">
              This site is a passion project and portfolio piece, not a real
              business! But if {`you're`} looking for an actual web designer, I
              can help with that. Take a look around to see my work, keeping in
              mind that {`it's`} a growing concept and {`I'm`} still slowly
              building out some of the features.
            </p>
            <Link
              className="mx-auto w-full grid"
              target="_blank"
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Mavz2MffYH9bwfpA4fcYKQlxHUh2JuV636QELOg7nOlRCjM9W7_RUW76BAFJTc3Y1Non5XxRb"
            >
              <Button className="mt-8" size={"lg"}>
                Book a Project Chat
              </Button>
            </Link>
          </StaggerReveal>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default DemoDialog;
