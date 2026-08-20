"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BreweryEvent } from "@/lib/dummyData";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

const AUTOPLAY_MS = 6000;
const EventCarousel = ({ events }: { events: BreweryEvent[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [autoplay] = React.useState(() =>
    Autoplay({ delay: AUTOPLAY_MS, stopOnInteraction: false }),
  );
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      autoplay.reset(); // full delay every slide change, manual or auto
    };
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, autoplay]);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      className="w-full h-full [&>div]:h-full"
      setApi={setApi}
      plugins={[autoplay]}
    >
      <CarouselContent className="ml-0 h-full [&>div]:h-full">
        {events.map((event) => {
          return (
            <CarouselItem
              key={`event-${event.id}`}
              className="group pl-0 h-full"
            >
              <div className="aspect-5/6 md:aspect-9/7 lg:aspect-auto group grid h-full rounded-none transition-all p-0 border-none outline-none overflow-hidden">
                {/* overlay — sits in the single grid cell */}
                <div
                  className="w-full h-full col-start-1 row-start-1 group-hover:scale-105 z-0 transition-all duration-800"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="col-start-1 row-start-1 w-full h-full bg-linear-to-t from-black to-black/0  z-1 " />
                <div className="col-start-1 p-8 row-start-1 h-full z-3">
                  <div className="flex w-full h-full flex flex-col gap-2 justify-end lg:flex-row lg:justify-between lg:items-end">
                    <div className="text-white">
                      <h3 className="text-title text-4xl text-pretty lg:text-5xl">
                        {event.title}
                      </h3>
                      <p>{event.shortDescription}</p>
                    </div>
                    <Button
                      size={"lg"}
                      className="uppercase font-bold text-white"
                    >
                      Buy Tickets
                    </Button>
                  </div>
                </div>
                {/* content — same cell, so it stacks on top of the overlay */}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious
        className=" -left-0 rounded-none"
        variant={"ghost"}
        size={"lg"}
      />
      <CarouselNext
        className=" -right-0 rounded-none"
        variant={"ghost"}
        size={"lg"}
      />
      <TimingBar key={current} duration={AUTOPLAY_MS} />
    </Carousel>
  );
};

function TimingBar({ duration }: { duration: number }) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setValue(100)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <Progress
      aria-hidden
      value={value}
      style={{ ["--dur" as string]: `${duration}ms` }}
      className="absolute bottom-0 left-0 z-5 max-h-1 w-full rounded-none bg-neutral-100
                 [&>[data-slot=progress-indicator]]:bg-primary
                 [&>[data-slot=progress-indicator]]:ease-linear
                 [&>[data-slot=progress-indicator]]:[transition-duration:var(--dur)]"
    />
  );
}

export default EventCarousel;
