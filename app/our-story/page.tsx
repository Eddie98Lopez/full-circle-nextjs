import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/logo";
import SectionTitle from "@/components/section-title";
import { dummyTeam } from "@/lib/dummyData";
import TeamMemberCard from "@/components/ui/team-member";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";

const AboutPage = () => {
  return (
    <main>
      <section className="background-brick min-h-[40vh] p-4 md:p-16">
        <div className="bg-foreground translate-y-25 size-75 mx-auto p-4 rounded-full">
          <Logo className="fill-background" />
        </div>
        <div className="background-paper text-white p-8 pt-30  md:p-20 md:pt-30 max-w-[1280px] mx-auto">
          <StaggerReveal
            direction="y"
            className="font-sans text-center space-y-8 w-full text-lg lg:w-2/3 mx-auto"
          >
            <h1 className="font-heading text-5xl">
              The Website Your Beer Has Been Waiting For...
            </h1>
            <p>
              You built your brewery for the beer, the people, and the
              experience. Most brewery websites don’t reflect that. They feel
              generic, outdated, or rushed, and people notice. This demo shows
              what a brewery website should feel like. Clean. Intentional. Easy
              to understand. Built to match your space and your brand, not fight
              it.
            </p>
            <p>
              I don’t promise conversion miracles. I promise a well designed
              site that builds credibility, earns trust, and holds up over time.
              This isn’t a one size fits all template. It’s a starting point
              that gets shaped around your brewery so it actually feels like
              yours.
            </p>

            <p>
              <strong>
                Book a call to see if this layout is right for your brewery.
              </strong>
            </p>
            <Button variant={"outline"} size={"lg"}>
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Mavz2MffYH9bwfpA4fcYKQlxHUh2JuV636QELOg7nOlRCjM9W7_RUW76BAFJTc3Y1Non5XxRb"
                target="_blank"
              >
                Book A Call
              </Link>
            </Button>
          </StaggerReveal>
        </div>
      </section>
      <section className="background-brick p-8 py-16">
        <div className="w-full max-w-[1600px] mx-auto">
          <SectionTitle>Meet the Team</SectionTitle>
          <div>
            <StaggerReveal
              as="ul"
              className="flex gap-4 flex-wrap mx-auto justify-center"
            >
              {dummyTeam.map((member) => (
                <TeamMemberCard
                  key={`${member.id}-teammember`}
                  image={member.image}
                  role={member.jobTitle}
                  name={`${member.firstName} ${member.lastName}`}
                />
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
