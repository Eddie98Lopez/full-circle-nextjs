import React from "react";
import { dummyEvents } from "@/lib/dummyData";
import EventCard from "@/components/event-card";
import SectionTitle from "@/components/section-title";

const EventsPage = () => {
  return (
    <section className="p-8">
      <div className="mx-auto max-w-[1600px] space-y-4">
        <SectionTitle>Upcoming Events</SectionTitle>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dummyEvents.map((event) => (
              <EventCard
                key={`event-${event.id}`}
                title={event.title}
                date={event.startDate}
                location={event.location}
                image={event.image}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
