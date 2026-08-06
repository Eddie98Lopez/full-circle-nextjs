import React from "react";

const Banner = ({
  children,
}: {
  children: React.ReactElement | React.ReactNode;
}) => {
  return (
    <aside className="w-full min-h-40 background-paper flex items-center justify-center p-10 md:bg-fixed">
      <div className="w-full max-w-[1600px] text-white mx-auto h-full">
        {children}
      </div>
    </aside>
  );
};

export default Banner;
