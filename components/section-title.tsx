import React from "react";
import Image from "next/image";
import Hop from "./hop";

const SectionTitle = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mx-auto space-y-2">
        <div className="mx-auto">
          <Hop className="fill-primary mx-auto size-8" />
        </div>
        <h2 className="text-center font-heading text-4xl">
          <span>{children ?? title}</span>
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
