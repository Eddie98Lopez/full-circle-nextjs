import React from "react";
import { dummyMyBeers } from "@/lib/dummyData";
import SectionTitle from "@/components/section-title";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";
import BeerCard from "@/components/beer-card";
import Link from "next/link";
import { BeerClubBanner } from "@/components/beer-card";

const BeerPage = () => {
  return (
    <div>
      <section className="background-brick w-full overflow-hidden">
        <div className="max-w-[1600px] mx-auto space-y-8 p-4 py-6 md:p-8 lg:p-16 ">
          <SectionTitle>Beers</SectionTitle>
          <StaggerReveal
            as="ul"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 flex-wrap "
            itemWrapperClass=""
          >
            {dummyMyBeers.map((beer) => (
              <Link key={`beer-${beer.id}`} href={`/beers/${beer.slug}`}>
                <BeerCard beer={beer} />
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>
      <BeerClubBanner />
    </div>
  );
};

export default BeerPage;
