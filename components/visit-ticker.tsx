import React from "react";
import { Button } from "./ui/button";
import DemoDialog from "./demo-dialog";

const VisitTicker = () => {
  return (
    <aside className="bg-primary py-4 text-white flex flex-col md:flex-row flex-wrap justify-center md:gap-8 text-xl items-center uppercase font-bold">
      <p>visit us!</p>
      <div className="r">Open today 9am - 5pm</div>

      <DemoDialog>
        <Button
          variant={"link"}
          className="uppercase font-bold text-white px-0"
        >
          Get Directions
        </Button>
      </DemoDialog>
    </aside>
  );
};

export default VisitTicker;
