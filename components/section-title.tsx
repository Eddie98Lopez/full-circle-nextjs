import React from "react";
import Image from "next/image";

const SectionTitle = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mx-auto">
        <div className="mx-auto w-[24px]">
          <Image
            src="/hop.svg"
            alt="decorative_hop"
            width={24}
            height={24}
            className="fill-green-500"
          />
        </div>
        <h2 className="text-center">
          <span>{children ?? title}</span>
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
