import SectionTitle from "@/components/section-title";
import React from "react";

const Page = () => {
  return (
    <div>
      <section className="grid grid-cols-3 w-full h-[60vh]">
        <div className="col-[1/2] w-full h-full bg-gray-200">
          artwork and beer can
        </div>
        <div className="col-[2/4] w-full h-full flex justify-start items-center bg-primary">
          <div className="background-paper w-7/10 h-1/2">boop</div>
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
      <section className="background-paper w-full h-100 px-8 py-16">
        <SectionTitle>
          <span className="text-white">You Might Like</span>
          <div>
            <ul></ul>
          </div>
        </SectionTitle>
      </section>
      <section className="px-8 py-16 background-logo">
        <SectionTitle>Merch</SectionTitle>
        <div>
          <ul> Merch list</ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
