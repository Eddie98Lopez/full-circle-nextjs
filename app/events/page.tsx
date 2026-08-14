import React from "react";
import { dummyEvents } from "@/lib/dummyData";
import EventCard from "@/components/event-card";
import SectionTitle from "@/components/section-title";

const EventsPage = () => {
  return (
    <section>
      <div>
        <SectionTitle>Upcoming Events</SectionTitle>
        <div>
          {/* <ul>
            {dummyEvents.map((event) => (
              <EventCard
                key={`event-${event.id}`}
                title={event.title}
                date={event.startDate}
                location={event.location}
                image={event.image}
              />
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
