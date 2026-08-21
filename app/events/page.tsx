import React from "react";
import { dummyEvents } from "@/lib/dummyData";
import EventCard from "@/components/event-card";
import SectionTitle from "@/components/section-title";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";
import Banner from "@/components/ui/banner";
import EmailOptIn from "@/components/email-subscribe";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import EventCarousel from "@/components/event-carousel";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  return (
    <div>
      <section className="p-4 py-6 md:p-8 lg:p-16 background-logo">
        <div className="mx-auto max-w-[1600px] space-y-8 overlow-hidden">
          <SectionTitle>Events</SectionTitle>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] lg:grid-rows-3 gap-4 min-h-[40vh]">
            <div className="lg:col-start-1 lg:row-span-3 min-w-0">
              <EventCarousel events={dummyEvents} />
            </div>
            <div className="bg-neutral-300 lg:col-start-2 lg:row-start-3 lg:row-span-1">
              <Card className="group flex w-full h-full grid p-0">
                <div
                  className="w-full h-full col-start-1 row-start-1 group-hover:scale-105 z-0 transition-all duration-800"
                  style={{
                    backgroundImage: `url("/images/events.png")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="col-start-1 row-start-1  w-full min-h-40 h-full  bg-black/70 transition-colors z-1 " />

                <CardContent className="w-full h-full col-start-1 row-start-1 z-3 grid gap-1 p-8 place-content-center">
                  <CardTitle className="text-4xl text-white">
                    Venue Booking
                  </CardTitle>
                  <CardDescription></CardDescription>
                  <Button size={"lg"}>Inquire Here</Button>
                </CardContent>
              </Card>
            </div>
            <div className="lg:row-start-1 lg:col-start-2 lg:row-span-2 w-full h-full flex">
              <Banner>
                <div className="w-full h-full flex flex-col justify-center items-center gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-title">Never miss a post</h2>
                    <p className="text-pretty md:text-balance">
                      Subscribe to our newsletter and get special access to all
                      our content and special pricing for cool merch drops.
                    </p>
                  </div>
                  <div className="ml-auto text-center md:text-left">
                    {" "}
                    <EmailOptIn />
                    <p className="text-xs mt-2 text-white/60">
                      By subscribing you consent to receive promotional,
                      marketing emails and updates in accordance with the
                      Privacy Policy.
                    </p>
                  </div>
                </div>
              </Banner>
            </div>
          </div>
          <Separator className="rounded border border-black" />
          <StaggerReveal
            as="ul"
            direction="y"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {dummyEvents.map((event) => (
              <EventCard key={`event-${event.id}`} event={event} />
            ))}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
