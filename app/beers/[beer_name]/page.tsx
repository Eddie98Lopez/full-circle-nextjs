import FeaturedBeerCard from "@/components/featured-beer";
import SectionTitle from "@/components/section-title";
import { dummyMyBeers } from "@/lib/dummyData";
import React from "react";

const Page = async ({ params }: { params: Promise<{ beer_name: string }> }) => {
  const { beer_name } = await params;
  console.log(beer_name);
  const beer = dummyMyBeers.filter((beer) => beer.slug == beer_name)[0];
  return (
    <div>
      <section className="grid grid-rows-[3vh_35vh_auto] md:grid-rows-[20vh_25vh_auto] w-full min-h-[60vh]">
        <div className="w-full h-full row-start-1 row-end-3 bg-gray-400 col-start-1 col-end-2 "></div>
        <div className="w-full h-full row-start-2 row-end-4 col-start-1 col-end-2 px-8 ">
          <FeaturedBeerCard beer={beer} />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 mx-auto max-w-[1600px]">
          <div className="col-span-1">availability</div>
          <div className="col-span-2">details</div>
          <div className="col-span-full flex justify-between">
            <p>previous</p>
            <p>next</p>
          </div>
        </div>
      </section>
      <section className="background-paper w-full px-8 py-16 space-y-8">
        <SectionTitle>
          <span className="text-white">You Might Like</span>
        </SectionTitle>
        <div className="max-w-[1600px] mx-auto">
          <ul className="flex flex-nowrap gap-6 snap-x overflow-x-scroll w-full">
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
          </ul>
        </div>
      </section>
      <section className="px-8 py-16 background-logo space-y-8">
        <SectionTitle>Merch</SectionTitle>
        <div className="max-w-[1600px] mx-auto">
          <ul className="flex flex-nowrap gap-6 snap-x overflow-x-scroll w-full">
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
            <li className="flex-none snap-center w-full max-w-sm bg-gray-300 aspect-square hover:bg-gray-600 transition-all"></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
